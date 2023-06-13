import useMediaQuery from 'hooks/useMediaQuary';
import React from 'react';
import { t } from 'i18next';
import { ProductTableDesktop } from './DesktopTable/ProductTableDesktop';
import { ProductTableMobile } from './MobileTable/ProductTableMobile';


const counts = [
  '5-10',
  '11-30',
  '31-50',
  '51-100',
  '101-200',
  '201-300',
  '301-500',
  '501-1000',
  '>1000',
];

const priceList = [
  {
    title: t('hoodieStandard'),

    prices: [
      2200,
      1900,
      1700,
      1600,
      1400,
      1350,
      1250,
      1200,
      1170,
    ],
  },
  {
    title: t('zipHoodie'),

    prices: [
      2300,
      2000,
      1800,
      1700,
      1550,
      1470,
      1370,
      1300,
      1220,
    ],
  },
  {
    title: t('hoodieDoubleFabric'),

    prices: [
      1500,
      1400,
      1300,
      1100,
      1000,
      930,
      900,
      870,
      830,
    ],
  },
];

export const ProductTable = () => {
  const isMobile = useMediaQuery('(max-width:820px)');

  if (isMobile) return <ProductTableMobile counts={counts} priceList={priceList}/>;

  return <ProductTableDesktop counts={counts} priceList={priceList}/>;
};
