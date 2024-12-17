import React from 'react';
import { useNavigate } from 'react-router-dom';
import { github, discord } from '../Icons';
import { useTranslation } from 'react-i18next';

export const Home = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <section>
            <section className="index anim-12" style={{ '--duration': '2s' }}>
                <nav className="customnav anim-3" style={{ '--duration': '4s' }}>
                    <ul>
                        <li className="navlink" onClick={() => navigate('/projects')}>{t('home.projects')}</li>
                        <li className="navlink" onClick={() => navigate('/about')}>{t('home.about')}</li>
                    </ul>
                </nav>
                <article className="hero-wrapper">
                    <article className="hero">
                        <h1>Sakuraishi</h1>
                        <h1>Sakuraishi</h1>

                        <div className="container">
                            <div className="box">
                                <div className="title">
                                    <span className="block"></span>
                                    <p>{t('home.description')}</p>
                                </div>
                            </div>
                        </div>

                        <hr className="anim-3" style={{ '--duration': '3.5s', marginBottom: '-5px' }} />
                        <section className="socials anim-3" style={{ '--duration': '3.5s' }}>
                            <div className="social-link" onClick={() => window.open('https://github.com/shokoloa')}><i dangerouslySetInnerHTML={{ __html: github }} /></div>
                            <div className="social-link" onClick={() => window.open('https://discord.com/invite/zADqwgP8zG')}><i dangerouslySetInnerHTML={{ __html: discord }} /></div>
                        </section>
                    </article>
                </article>
            </section>
        </section>
    );
};