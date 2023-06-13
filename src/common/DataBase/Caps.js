import blackCap from 'assets/images/caps/black.png';
import whiteCap from 'assets/images/caps/white.png';
import redCap from 'assets/images/caps/red.png';
import blueCap from 'assets/images/caps/blue.png';
import greyCap from 'assets/images/caps/grey.png';

import { t } from 'i18next';


export const caps = [
  {
    name: t('capPromo'),
    description: [
      { label: t('material'), info: 'ХБ' }, { label: t('fabricDensity'), info: t('hundredGram') },
    ],
    colors: [
      { color: '#000', image: blackCap },
      { color: '#fff', image: whiteCap },
      { color: '#ff0000', image: redCap },
      { color: '#0500ff', image: blueCap },
      { color: '#999', image: greyCap },
    ],
  },
  {
    name: t('capPremium'),
    description: [
      { label: t('material'), info: 'ХБ' }, { label: t('fabricDensity'), info: t('hundredGram') },
    ],
    colors: [
      { color: '#000', image: blackCap },
      { color: '#fff', image: whiteCap },
      { color: '#ff0000', image: redCap },
      { color: '#0500ff', image: blueCap },
      { color: '#999', image: greyCap },
    ],
  },
  {
    name: t('capBaby'),
    description: [
      { label: t('material'), info: 'ХБ 100%' }, { label: t('fabricDensity'), info: t('hundredGram') },
    ],
    colors: [
      { color: '#000', image: blackCap },
      { color: '#fff', image: whiteCap },
      { color: '#ff0000', image: redCap },
      { color: '#0500ff', image: blueCap },
      { color: '#999', image: greyCap },
    ],
  },
];
