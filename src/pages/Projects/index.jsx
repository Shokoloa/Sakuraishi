import jsonData from '../../assets/json/projects.json';
import Articles from './Articles';

const house = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#fff" d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>);

export const Projects = () => {
    return (
        <section>
            <main className="projects anim-2" style={{ '--duration': '3s' }}>
                <header className="projectnav">
                    <section className="returnhome anim-3" style={{ '--duration': '3.2s' }}>
                        <div id="returnhome" draggable="false" onClick={() => window.location.href = '/'}>
                            {house}
                        </div>
                    </section>
                    <section className="projecttitle">
                        <h1>Projets</h1>
                        <p>Certains projets viennent du travail et d'autres sont sur mon temps libre</p>
                    </section>
                </header>
                <hr style={{ marginBottom: '3vg' }} />

                <section className="project-card-container">
                    <h1>Meilleurs Projets</h1>
                    <Articles data={jsonData} team="best" />
                    <section id="best-panel" className="project-card_line"></section>
                    <hr style={{ width: '50%' }} />

                    <h1>Autres Projets</h1>
                    <Articles data={jsonData} team="other" />
                    <section id="other-panel" className="project-card_line gr-4"></section>
                </section>
            </main>
        </section>
    );
};

export default Projects;