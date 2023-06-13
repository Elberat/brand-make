import blackTShirt from 'assets/images/t-shirts/black.png';
import whiteTShirt from 'assets/images/t-shirts/white.png';
import redTShirt from 'assets/images/t-shirts/red.png';
import blueTShirt from 'assets/images/t-shirts/blue.png';
import greyTShirt from 'assets/images/t-shirts/grey.png';

import { t } from 'i18next';


export const tShirts = [
  {
    name: t('tShirtStandart'),
    description: [
      { label: t('material'), info: t('cotton_supreme') },
      { label: t('fabricDensity'), info: t('hundredGram') },
      { label: t('style'), info: t('standardOrOverSize') },
      { label: t('cuffs'), info: t('ownMaterial') },
      { label: t('size'), info: 'XXS, XS, S, M, L, XL, 2XL, 3XL, 4XL, 5XL' },
    ],
    colors: [
      { color: '#000', image: blackTShirt },
      { color: '#fff', image: whiteTShirt },
      { color: '#ff0000', image: redTShirt },
      { color: '#0500ff', image: blueTShirt },
      { color: '#999', image: greyTShirt },
    ],
  },
  {
    name: t('tShirtOversize'),
    description: [
      { label: t('material'), info: t('cotton_supreme') },
      { label: t('fabricDensity'), info: t('hundredGram') },
      { label: t('style'), info: t('standardOrOverSize') },
      { label: t('cuffs'), info: t('ownMaterial') },
      { label: t('size'), info: 'XXS, XS, S, M, L, XL, 2XL, 3XL, 4XL, 5XL' },
    ],
    colors: [
      { color: '#000', image: blackTShirt },
      { color: '#fff', image: whiteTShirt },
      { color: '#ff0000', image: redTShirt },
      { color: '#0500ff', image: blueTShirt },
      { color: '#999', image: greyTShirt },
    ],
  },
  {
    name: t('tShirtPromo'),
    description: [
      { label: t('material'), info: t('cotton') },
      { label: t('fabricDensity'), info: t('hundredGram') },
      { label: t('style'), info: t('standardOrOverSize') },
      { label: t('cuffs'), info: t('ownMaterial') },
      { label: t('size'), info: 'XXS, XS, S, M, L, XL, 2XL, 3XL, 4XL, 5XL' },
    ],
    colors: [
      { color: '#000', image: blackTShirt },
      { color: '#fff', image: whiteTShirt },
      { color: '#ff0000', image: redTShirt },
      { color: '#0500ff', image: blueTShirt },
      { color: '#999', image: greyTShirt },
    ],
  },
];
