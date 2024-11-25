import Skills from './Skills';
import jsonData from '../../assets/json/skills.json';
import FlagFR from '../../assets/images/icons/flag_fr.png';
import FlagBR from '../../assets/images/icons/flag_br.png';
import FlagSP from '../../assets/images/icons/flag_sp.png';

const house = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#fff" d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>);

export const About = () => {
    return (
        <section>
            <header className="returnhome anim-3" style={{ '--duration': '3.2s' }}>
                <div id="returnhome" onClick={() => window.location.href = '/'}>
                    {house}
                </div>
            </header>

            <main className="about anim-2" style={{ '--duration': '3s' }}>
                <section className="skills">
                    <h1>Compétences</h1>
                    <Skills data={jsonData} />
                    <hr style={{ width: '50%', marginLeft: '25%' }} />
                    <section className="skills-lang">
                        <article className="skill">
                            <img src={FlagFR} draggable={false} width={50} height={50} alt="Skill" />
                            <p>Français<br /><span>Natif</span></p>
                        </article>
                        <article className="skill">
                            <img src={FlagBR} draggable={false} width={50} height={50} alt="Skill" />
                            <p>Anglais<br /><span>Niveau B2</span></p>
                        </article>
                        <article className="skill">
                            <img src={FlagSP} draggable={false} width={50} height={50} alt="Skill" />
                            <p>Espagnol<br /><span>Débutant</span></p>
                        </article>
                    </section>
                </section>
            </main>
        </section>
    );
};

export default About;