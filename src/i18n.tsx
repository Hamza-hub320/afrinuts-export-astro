// src/i18n.ts
import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import homeEN from './locales/en/home.json';
import homeFR from './locales/fr/home.json';
import commonEN from './locales/en/common.json';
import commonFR from './locales/fr/common.json';
import aboutEN from './locales/en/about.json';
import aboutFR from './locales/fr/about.json';
import productsEN from './locales/en/products.json';
import productsFR from './locales/fr/products.json';
import farmEN from './locales/en/farm.json';
import farmFR from './locales/fr/farm.json';
import contactEN from './locales/en/contact.json';
import contactFR from './locales/fr/contact.json';
import footerEN from './locales/en/footer.json';
import footerFR from './locales/fr/footer.json';

// Type definition for your translation resources
interface TranslationResources {
    home: typeof homeEN;
    common: typeof commonEN;
    about: typeof aboutEN;
    products: typeof productsEN;
    farm: typeof farmEN;
    contact: typeof contactEN;
    footer: typeof footerEN;
}

// Type definition for your i18n configuration
interface I18nOptions {
    fallbackLng: string;
    debug: boolean;
    ns: Array<keyof TranslationResources>;
    defaultNS: keyof TranslationResources;
    resources: {
        en: TranslationResources;
        fr: TranslationResources;
    };
    interpolation: {
        escapeValue: boolean;
    };
    detection: {
        order: string[];
        caches: string[];
        lookupQuerystring: string;
        lookupCookie: string;
        lookupLocalStorage: string;
    };
}

const options: InitOptions = {
    fallbackLng: 'en',
    debug: true,
    ns: ['home', 'common', 'about', 'products', 'farm', 'contact', 'footer'],
    defaultNS: 'common',
    resources: {
        en: {
            home: homeEN,
            common: commonEN,
            about: aboutEN,
            products: productsEN,
            farm: farmEN,
            contact: contactEN,
            footer: footerEN
        },
        fr: {
            home: homeFR,
            common: commonFR,
            about: aboutFR,
            products: productsFR,
            farm: farmFR,
            contact: contactFR,
            footer: footerFR
        }
    },
    interpolation: {
        escapeValue: false
    },
    detection: {
        order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
        caches: ['localStorage', 'cookie'],
        lookupQuerystring: 'lng',
        lookupCookie: 'i18next',
        lookupLocalStorage: 'i18nextLng'
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init(options);

export default i18n;