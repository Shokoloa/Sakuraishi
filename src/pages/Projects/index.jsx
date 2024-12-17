import jsonData from '../../assets/json/projects.json';
import Articles from './Articles';
import { ReturnHome } from '../../components/returnHome';
import { useTranslation } from 'react-i18next';

export const Projects = () => {
    const { t } = useTranslation();

    return (
        <section>
            <main className="projects anim-2" style={{ '--duration': '3s' }}>
                <header className="projectnav">
                    <ReturnHome />
                    <section className="projecttitle">
                        <h1>{t('projects.title')}</h1>
                        <p>{t('projects.description')}</p>
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