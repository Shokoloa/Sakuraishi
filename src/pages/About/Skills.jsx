import html5 from '../../assets/images/icons/html5.webp';
import css3 from '../../assets/images/icons/css3.webp';
import javascript from '../../assets/images/icons/javascript.webp';
import python from '../../assets/images/icons/python.webp';
import vite from '../../assets/images/icons/vite.webp';
import djs from '../../assets/images/icons/djs.webp';
import FlagFR from '../../assets/images/icons/flag_fr.webp';
import FlagBR from '../../assets/images/icons/flag_br.webp';
import FlagSP from '../../assets/images/icons/flag_sp.webp';

const getImage = (imageName) => {
    switch (imageName) {
        case 'html5':
            return html5;
        case 'css3':
            return css3;
        case 'javascript':
            return javascript;
        case 'python':
            return python;
        case 'vite':
            return vite;
        case 'djs':
            return djs;
        case 'fr':
            return FlagFR;
        case 'en':
            return FlagBR;
        case 'es':
            return FlagSP;
        default:
            return null;
    }
};

export const Skills = ({ data }) => {
    return (
        <div className="skills-list">
            {data.map((skill, index) => {
                const image = getImage(skill.img);
                if (!image) return;

                return (
                    <article className="skill" key={index}>
                        <img src={image} draggable={false} width={50} height={50} alt="Skill" />
                        <span className="skill-tooltip">{skill.name} | {skill.level}</span>
                    </article>
                );
            })}
        </div>
    );
};

export default Skills;