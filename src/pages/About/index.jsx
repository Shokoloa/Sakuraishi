import Skills from './Skills';
import jsonData from '../../assets/json/skills.json';
import { ReturnHome } from '../../components/returnHome';

export const About = () => {
    return (
        <section>
            <ReturnHome />
            <main className="about anim-2" style={{ '--duration': '3s' }}>
                <h1>À propos de moi</h1>
                <section className="aboutme">
                    Jeune développeur Freelance de 16 ans et étudiant en STI2D, je suis passionné par la programmation, l’astronomie et la création d’expériences utilisateur uniques.
                    <br /><br />
                    Curieux et créatif, j’aime concevoir des solutions innovantes, explorer de nouvelles technologies et perfectionner des interfaces pour les rendre intuitives et engageantes.
                    <br />
                    Toujours motivé par l’apprentissage et l’amélioration continue, je cherche à allier technique et créativité pour offrir des projets à la fois fonctionnels et inspirants.
                </section>
                <section className="skills"><Skills data={jsonData} /></section>
            </main>
        </section>
    );
};