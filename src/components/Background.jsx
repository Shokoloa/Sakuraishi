import background from '../assets/images/background.svg';

export const Background = () => {
    return (
        <div className="bg">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <img width={'100%'} height={'100%'} src={background} draggable={false} alt="Background" />
        </div>
    );
};