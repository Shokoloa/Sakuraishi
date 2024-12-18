const ClipboardSVG = (
    <svg xmlSpace="preserve" style={{ 'enableBackground:new': '0 0 512 512' }} viewBox="0 0 6.35 6.35" y="0" x="0" height="20" width="20" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" className="clipboard">
        <g>
            <path fill="currentColor" d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"></path>
        </g>
    </svg>
);

const CheckmarkSVG = (
    <svg xmlSpace="preserve" style={{ 'enableBackground:new': '0 0 512 512' }} viewBox="0 0 24 24" y="0" x="0" height="18" width="18" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" className="checkmark">
        <g>
            <path data-original="#000000" fill="currentColor" d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"></path>
        </g>
    </svg>
);

const house = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#fff" d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>);

export const Binary = () => {
    function textToBinary() {
        const textInput = document.getElementById('text-binary').value.toUpperCase();

        let binary = '';
        for (let i = 0; i < textInput.length; i++) {
            const charCode = textInput.charCodeAt(i).toString(2);
            binary += '0'.repeat(8 - charCode.length) + charCode + ' ';
        }

        document.getElementById('binary-text').value = binary;
    }

    function binaryToText() {
        const binaryInput = document.getElementById('binary-text').value;

        const binaryArray = binaryInput.split(' ');
        let text = '';
        for (let i = 0; i < binaryArray.length; i++) {
            const binaryChar = binaryArray[i];
            const charCode = parseInt(binaryChar, 2);
            text += String.fromCharCode(charCode);
        }

        document.getElementById('text-binary').value = text.replace(/\s/g, "");
    }

    async function copyBinary() {
        const binaryText = document.getElementById('binary-text').value;
        await navigator.clipboard.writeText(binaryText);
    }


    async function copyTextB() {
        const binaryText = document.getElementById('text-binary').value;
        await navigator.clipboard.writeText(binaryText);
    }

    return (
        <section>
            <header className="returnhome">
                <div id="returnhome" draggable="false" onClick={() => window.location.href = '/projects'}>
                    {house}
                </div>
            </header>

            <main className="slug">
                <h1>Binaire</h1>
                <p>Convertisseur de binaire</p>
                <hr />
                <article className="slug-desc">
                    <h1>Text vers Binaire</h1>
                    <div className="auto-expand">
                        <textarea className="textare-auto" id="text-binary" onInput={textToBinary} placeholder="Place text here"></textarea>
                        <div className="copy copy-text" onClick={copyTextB}>
                            <span data-text-end="Copié!" data-text-initial="Copier" className="tooltip"></span>
                            <span>
                                {ClipboardSVG}
                                {CheckmarkSVG}
                            </span>
                        </div>
                    </div>
                    <hr />

                    <h1>Binaire vers Text</h1>
                    <div className="auto-expand">
                        <textarea className="textare-auto" id="binary-text" onInput={binaryToText} placeholder="Place morse here"></textarea>
                        <div className="copy copy-morse" onClick={copyBinary}>
                            <span data-text-end="Copié!" data-text-initial="Copier" className="tooltip"></span>
                            <span>
                                {ClipboardSVG}
                                {CheckmarkSVG}
                            </span>
                        </div>
                    </div>
                </article>
            </main>
        </section>
    );
};