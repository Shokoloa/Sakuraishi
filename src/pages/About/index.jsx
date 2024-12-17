import Skills from './Skills';
import jsonData from '../../assets/json/skills.json';
import { ReturnHome } from '../../components/returnHome';
import { useTranslation, Trans } from 'react-i18next';

export const About = () => {
    const { t } = useTranslation();

    return (
        <section>
            <ReturnHome />
            <main className="about anim-2" style={{ '--duration': '3s' }}>
                <h1>{t('about.title')}</h1>
                <section className="aboutme"><Trans i18nKey="about.description" components={{ br: <br /> }} /></section>
                <section className="skills"><Skills data={jsonData} /></section>
            </main>
        </section>
    );
};