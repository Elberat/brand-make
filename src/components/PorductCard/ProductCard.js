import { getCategory, handleOrderCall } from 'common/helpers';
import { SmallModel } from 'components/Models/SmallModel';
import { Button } from 'components/UI/Button/Button';
import { useIsVisible } from 'hooks/useIsVisible';
import React, { useEffect, useRef, useState } from 'react';
import { t } from 'i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './product.module.css';


export const ProductCard = ({ product, key, index }) => {
  const [ pickedColorIdx, setPickedColorIdx ] = useState(0);
  const navigate = useNavigate();

  const handlePickColor = (colorIdx) => {
    setPickedColorIdx(colorIdx);
  };

  const ref = useRef(null);
  const infoBlockRefs = useRef({});
  const [ isVisible ] = useIsVisible(ref);

  const { pathname } = useLocation();
  const productName = (pathname[ 1 ]?.toUpperCase() + pathname.slice(2)).replaceAll('/');

  const productOrder = `${t('order' + (pathname.length === 1 ? 'Hoodie' : productName))}`;

  useEffect(() => {

    if (isVisible) {
      const productCard = ref.current.children[ 0 ];
      const productCardView = productCard.children[ 0 ];
      productCardView.style.opacity = 1;
      productCardView.style.transform = 'scale(1)';

      productCard.style.clipPath = 'polygon(1% 10%, 100% 0%, 100% 90%, 0% 100%)';

      Object.values(infoBlockRefs).forEach(block => {
        if (!block?.style) return;
        block.style.opacity = 1;
        block.style.transform = 'none';
      });
    }

  }, [ isVisible ]);

  if (!product.name) return;

  return (
    <div key={key} ref={ref} className={styles.product}>
      <div className={styles.productCard}>
        <SmallModel
          style={{ position: 'static' }}
          image={product?.colors?.[ pickedColorIdx ]?.image}
        />
      </div>

      <div className={styles.text}>
        <div>
          <h2 className={styles.title}>{product.name}</h2>

          {product?.description.map((infoBlock, idx) => (
            <div
              ref={ref => infoBlockRefs[ idx ] = ref}
              key={idx}
              style={{ transitionDelay: `${((idx + 1) * 3) / 10}s` }}
              className={styles.infoBlock}
            >
              <h4>{infoBlock.label}:</h4>
              <p>{infoBlock.info}</p>
            </div>
          ))}

        </div>

        <div>
          <h4>{t('color')}:</h4>
          <ul className={styles.colorPicker}>
            {product?.colors.map((color, idx) => (
              <li
                key={color.color}
                onClick={e => handlePickColor(idx)}
                className={styles[ pickedColorIdx === idx ? 'activeColor' : 'color' ]}
                style={{ backgroundColor: color.color }}
              />
            )) }
          </ul>

          <Button
            onClick={() => handleOrderCall(navigate, getCategory(), index, pickedColorIdx)}
            variant='outlined'>{t(productOrder)}
          </Button>
        </div>
      </div>
    </div>
  );
};
