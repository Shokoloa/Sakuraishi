import html5 from '../../assets/images/icons/html5.png';
import css3 from '../../assets/images/icons/css3.png';
import javascript from '../../assets/images/icons/javascript.png';
import python from '../../assets/images/icons/python.png';
import arduino from '../../assets/images/icons/arduino.png';
import vite from '../../assets/images/icons/vite.png';
import djs from '../../assets/images/icons/djs.png';

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
        case 'arduino':
            return arduino;
        case 'vite':
            return vite;
        case 'djs':
            return djs;
        default:
            return null;
    }
};

export const Skills = ({ data }) => {
    return (
        <div className="skills-list">
            {data.map((skill, index) => {
                const image = getImage(skill.img);

                return (
                    <article className="skill" key={index}>
                        <img src={image} draggable={false} width={50} height={50} alt="Skill" />
                        <p>{skill.name}<br /><span>{skill.level}</span></p>
                    </article>
                );
            })}
        </div>
    );
};

export default Skills;