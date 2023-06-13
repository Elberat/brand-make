import { useIsVisible } from 'hooks/useIsVisible';
import React, { useEffect, useRef, useState } from 'react';
import { t } from 'i18next';
import { Heptagon } from './components/icons/Heptagon';
import { Hexagon } from './components/icons/Hexagon';
import { Pentagon } from './components/icons/Pentagon';
import { Square } from './components/icons/Square';
import { Triangle } from './components/icons/Triangle';
import { Stage } from './components/Stage/Stage';

import styles from './stages.module.css';


const stages = [
  {
    title: t('buyingFabric'),
    description: t('bestFabricForYou'),
    icon: <Triangle/>,
  },
  {
    title: t('sew'),
    description: t('setHighQuality'),
    icon: <Square/>,
  },
  {
    title: t('print'),
    description: t('highPrintQuality'),
    icon: <Pentagon/>,
  },
  {
    title: t('embroidery'),
    description: t('technics'),
    icon: <Hexagon/>,
  },
  {
    title: t('qualityControl'),
    description: t('noDefective'),
    icon: <Heptagon/>,
  },

];

const handleAnimateStages = (stages) => {

  stages.forEach((stage, idx) => {

    const figure = stage.children[ 0 ].children[ 0 ].children[ 1 ];
    const figureWrapper = stage.children[ 0 ];
    const title = stage.children[ 1 ];
    const number = stage.children[ 2 ];

    setTimeout(() => {
      figureWrapper.style.color = '#131313';
      title.style.opacity = 1;
      number.style.opacity = 1;

      figure.style.fill = '#fff';

      setTimeout(() => {
        figureWrapper.style.color = 'transparent';
        title.style.opacity = .6;
        number.style.opacity = .4;

        figure.style.fill = '#131313';

        if (idx + 1 === stages.length) handleAnimateStages(stages);

      }, 2000);

    }, (idx) * 2000);
  });


};

export const DevelopingStages = () => {
  const ref = useRef(null);
  const [ isVisible ] = useIsVisible(ref);
  const [ alreadyAnimated, setAlreadyAnimated ] = useState(false);

  useEffect(() => {
    const stages = [ ...ref.current.children ];
    if (alreadyAnimated) return;

    if (isVisible) {
      setTimeout(() => {
        handleAnimateStages(stages);
      }, 1000);
    }

    return () => {
      if (isVisible) setAlreadyAnimated(true);
    };
  }, [ isVisible, alreadyAnimated ]);

  return (
    <div className={styles.stages}>
      <ul ref={ref} className='container'>
        {stages.map((stage) => (
          <Stage
            title={stage.title}
            description={stage.description}
          >
            {stage.icon}
          </Stage>
        ))}
      </ul>
    </div>
  );
};
