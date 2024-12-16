import jsonData from '../../assets/json/projects.json';
import Articles from './Articles';
import { ReturnHome } from '../../components/returnHome';

export const Projects = () => {
    return (
        <section>
            <main className="projects anim-2" style={{ '--duration': '3s' }}>
                <header className="projectnav">
                    <ReturnHome />
                    <section className="projecttitle">
                        <h1>Projets</h1>
                        <p>Certains projets viennent du travail et d'autres sont sur mon temps libre</p>
                    </section>
                </header>
                <hr />

                <section className="project-card-container">
                    <Articles data={jsonData} />
                </section>
            </main>
        </section>
    );
};

export default Projects;