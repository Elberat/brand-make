import blackStandard from 'assets/images/hoodie/standard/black.png';
import redStandard from 'assets/images/hoodie/standard/red.png';
import whiteStandard from 'assets/images/hoodie/standard/white.png';
import blueStandard from 'assets/images/hoodie/standard/blue.png';
import grayStandard from 'assets/images/hoodie/standard/gray.png';

import blackZip from 'assets/images/hoodie/zip/black.png';
import redZip from 'assets/images/hoodie/zip/red.png';
import whiteZip from 'assets/images/hoodie/zip/white.png';
import blueZip from 'assets/images/hoodie/zip/blue.png';
import grayZip from 'assets/images/hoodie/zip/gray.png';

import { t } from 'i18next';


export const hoodies = [
  {
    name: t('hoodieStandard'),
    description: [
      { label: t('material'), info: t('europeStandard') },
      { label: t('fabricDensity'), info: t('thirtyGram') },
      { label: t('style'), info: t('standardOrOverSize') },
      { label: t('cuffs'), info: t('ribana') },
      { label: t('size'), info: 'XXS, XS, S, M, L, XL, 2XL, 3XL, 4XL, 5XL' },
    ],
    colors: [ { color: '#000', image: blackStandard },
      { color: '#fff', image: whiteStandard },
      { color: '#ff0000', image: redStandard },
      { color: '#0500ff', image: blueStandard },
      { color: '#999', image: grayStandard } ],
  },
  {
    name: t('zipHoodie'),
    description: [
      { label: t('material'), info: t('europeStandard') },
      { label: t('fabricDensity'), info: t('thirtyGram') },
      { label: t('style'), info: t('standardOrOverSize') },
      { label: t('cuffs'), info: t('ribana') },
      { label: t('size'), info: 'XXS, XS, S, M, L, XL, 2XL, 3XL, 4XL, 5XL' },
    ],
    colors: [ { color: '#000', image: blackZip },
      { color: '#fff', image: whiteZip },
      { color: '#ff0000', image: redZip },
      { color: '#0500ff', image: blueZip },
      { color: '#999', image: grayZip } ],
  },
  {
    name: t('hoodieDoubleFabric'),
    description: [
      { label: t('material'), info: t('europeStandardDouble') },
      { label: t('fabricDensity'), info: t('hundredGram') },
      { label: t('style'), info: t('standardOrOverSize') },
      { label: t('cuffs'), info: t('ribana') },
      { label: t('size'), info: 'XXS, XS, S, M, L, XL, 2XL, 3XL, 4XL, 5XL' },
    ],
    colors: [ { color: '#000', image: blackStandard },
      { color: '#fff', image: whiteStandard },
      { color: '#ff0000', image: redStandard },
      { color: '#0500ff', image: blueStandard },
      { color: '#999', image: grayStandard } ],
  },

];
