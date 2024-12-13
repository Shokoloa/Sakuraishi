import nacl from 'tweetnacl';
import axios from 'axios';

export default async function handler(req, res) {
    const signature = req.headers['x-signature-ed25519'];
    const timestamp = req.headers['x-signature-timestamp'];
    let publicKey;
    if (req.body.application_id === '968752770679197796') publicKey = process.env.SAPHIRA_PUBLIC_KEY;
    else if (req.body.application_id === '966999633329012756') publicKey = process.env.AKATSUKI_PUBLIC_KEY;

    if (!signature || !timestamp) return res.status(401).send('Missing headers');

    if (!publicKey || publicKey.length !== 64) {
        console.error(`Invalid public key format ${publicKey}`);
        return res.status(500).send('Server misconfiguration');
    }

    const body = JSON.stringify(req.body);
    const message = new TextEncoder().encode(timestamp + body);
    const signatureUint8 = Uint8Array.from(Buffer.from(signature, 'hex'));
    const publicKeyUint8 = Uint8Array.from(Buffer.from(publicKey, 'hex'));

    const isVerified = nacl.sign.detached.verify(message, signatureUint8, publicKeyUint8);
    if (!isVerified) return res.status(401).send('Invalid request signature');

    try {
        if (req.body.application_id === '968752770679197796') {
            await axios.post('http://147.135.153.52:2021/webhook', { body: req.body.event }, { headers: { Authorization: process.env.API_KEY } });
            res.status(204).send('Signature verified');
        } else if (req.body.application_id === '966999633329012756') {
            if (req.body.event.type !== 'APPLICATION_AUTHORIZED' || req.body.event.data.integration_type !== 1) return;
            const data = {
                embeds: [{
                    description: "### Merci d'avoir ajouté <@966999633329012756> à son profil. <:mascotte_with_heart_icon:1226670613502885969>",
                    color: 0xe12b6a,
                    author: {
                        name: req.body.event.data.user.username || 'John Doe',
                        icon_url: `https://cdn.discordapp.com/avatars/${req.body.event.data.user.id}/${req.body.event.data.user.avatar}.${req.body.event.data.user.avatar.includes('a_') ? 'gif' : 'webp'}` || null
                    },
                    timestamp: new Date().toISOString()
                }]
            };

            await fetch(process.env.AKATSUKI_WEBHOOK, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            res.status(204).send('Signature verified');
        }
    } catch (error) {
        console.error(error.message || error);
        res.status(500).send('Failed to send webhook');
    }
}