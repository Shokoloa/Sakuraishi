import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import gsap from "gsap";
import img from '../assets/images/404.svg';

export const NotFound = () => {
    const [svgContent, setSvgContent] = useState(null);

    useEffect(() => {
        const fetchSVG = async () => {
            try {
                const response = await fetch(img);
                setSvgContent(await response.text());
            } catch (error) { console.error(error); }
        };

        fetchSVG();
    }, []);

    useEffect(() => {
        const animateSVG = () => {
            if (svgContent) {
                gsap.to(["#headStripe", "#spaceman", "#craterSmall", "#craterBig", "#planet"], {
                    y: 0.5,
                    rotation: 1,
                    yoyo: true,
                    repeat: -1,
                    ease: "sine.inOut",
                    duration: 1
                });

                gsap.to("#planet", {
                    rotation: -2,
                    yoyo: true,
                    repeat: -1,
                    duration: 1,
                    ease: "sine.inOut",
                    transformOrigin: "50% 50%"
                });

                gsap.to("#starsBig g", {
                    rotation: "random(-30,30)",
                    transformOrigin: "50% 50%",
                    yoyo: true,
                    repeat: -1,
                    ease: "sine.inOut"
                });

                gsap.fromTo("#starsSmall g", { scale: 0 }, { scale: 1, yoyo: true, repeat: -1, stagger: 0.1 });

                gsap.to(["#circlesSmall circle", "#circlesBig circle"], {
                    y: -4,
                    yoyo: true,
                    duration: 1,
                    ease: "sine.inOut",
                    repeat: -1
                });

                gsap.set("#glassShine", { x: -68 });

                gsap.to("#glassShine", {
                    x: 80,
                    duration: 2,
                    rotation: -30,
                    ease: "expo.inOut",
                    transformOrigin: "50% 50%",
                    repeat: -1,
                    repeatDelay: 8,
                    delay: 2
                });
            }
        };

        animateSVG();
    }, [svgContent]);

    return (
        <section>
            <main className="notfound">
                <div className="cat-container">
                    <div className="row anim-2" style={{ '--duration': '2s' }}>
                        <div><div dangerouslySetInnerHTML={{ __html: svgContent }} /></div>
                        <div className="anim-3" style={{ '--duration': '2s' }}>
                            <h1>Oops! Vous vous êtes perdus.</h1>
                            <p>La page <code id="url">{useLocation().pathname}</code> n'existe pas. Comment êtes-vous arrivé ici est un mystère.</p>
                            <button onClick={() => window.location.href = '/'}>Retourner sur le bon chemin</button>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
};