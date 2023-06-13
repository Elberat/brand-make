import i18n from 'i18n.js';
import { bitrix24 } from './constants';


export const changeLang = (lang) => {
  i18n.changeLanguage(lang);
  const currLang = localStorage.getItem('lang');
  if (currLang !== lang) {
    localStorage.setItem('lang', lang);
    window.location.reload();
  }
};

export const currentLang = () => {
  const currLang = localStorage.getItem('lang');
  i18n.changeLanguage(currLang);
};

export const handleOrderCall = (navigate, category, product, color) => {
  const { search, pathname } = window.location;

  // const utm_source = pathname.split('/').join('') || 'hoodies';
  // const utm = search.split('&').filter(utm => !utm.includes('utm_source'));

  // window.location.href = bitrix24 + `?utm_source=${utm_source}&${utm.join('&')}`;
  // eslint-disable-next-line max-len
  navigate(`/order?${category ? 'category=' + category : ''}${product !== undefined ? '&product=' + product : ''}${color !== undefined ? '&color=' + color : ''}`);
};
export const getCategory = () => {
  const { pathname } = window.location;
  if (pathname === '/caps') {
    return 'caps';
  } else if (pathname === '/t-shirts') {
    return 'tshirts';
  } else {
    return 'hoodie';
  }
};
