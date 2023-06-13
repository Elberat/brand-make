import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stage } from '@react-three/drei';
import { useLocation } from 'react-router-dom';

import useMediaQuery from 'hooks/useMediaQuary';

import { PATHS } from 'common/constants';

import styles from './hoodie.module.css';


function Model(props) {
  const { pathname } = useLocation();
  const tshirt = 'https://dl.dropbox.com/s/i495su1sbfcy1cv/tshirt.glb';
  const cap = 'https://dl.dropbox.com/s/0m51ieaw2jyxm1l/cap.glb';
  const currentModel = () => {
    switch (pathname) {
    case PATHS.tShirts: return tshirt;
    case PATHS.caps: return cap;

    default: return tshirt;
    }
  };
  const { scene } = useGLTF(currentModel());
  return <primitive object={scene} {...props} />;
}

const RotateModel = () => {
  const boxRef = useRef();

  useFrame(() => {
    boxRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={boxRef} rotation-x={0.25}>
      <boxBufferGeometry args={[
        5,
        5,
        64,
        64,
      ]} />
      <Stage environment={null}>
        <Model scale={0.01} />
      </Stage>
      <meshStandardMaterial color={'red'} />
    </mesh>
  );
};

export default function GLBModel() {
  const isMobile = useMediaQuery('(max-width: 820px)');

  return (
    <div className={styles.hoodieModel}>
      <Suspense fallback={null}>
        <Canvas style={{
          width: isMobile ? '280px' : '300px',
          boxSizing: 'border-box',
          margin: '0 auto',
          marginTop: isMobile ? '40px' : '0px',
          overflow: 'visible',
        }}>

          <RotateModel />
        </Canvas>
      </Suspense>
    </div>
  );
}
