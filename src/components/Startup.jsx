import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const Startup = () => {
    const { i18n } = useTranslation();

    useEffect(() => {
        let savedLang = localStorage.getItem('lang'), supportedLanguages = ['fr-FR', 'fr', 'en', 'en-US', 'en-GB'], queryLang = new URLSearchParams(location.search).get('lang');

        if (queryLang && supportedLanguages.includes(queryLang)) i18n.changeLanguage(queryLang);
        else if (savedLang) i18n.changeLanguage(savedLang);
        else i18n.changeLanguage(supportedLanguages.includes(window.navigator.language) ? window.navigator.language.slice(0, 2) : 'en');
    }, [i18n]);
}