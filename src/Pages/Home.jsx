import { Html } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';
import { GridLoader } from 'react-spinners';
import Island from '../Models/Island';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  }, []);
  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition] = adjustIslandForScreenSize();
  return (
    <section className="relative h-screen w-full">
      {/* <div className="absolute top-28 left-0 right-0 flex items-center justify-center z-10 " >
        Pop
      </div> */}

      <Canvas
        className="h-screen w-full bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense
          fallback={
            <Html>
              <GridLoader
                loading={!isLoaded}
                margin={15}
                size={30}
                color="#c11850"
                cssOverride={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  translate: '-50% -50%',
                }}
              />
            </Html>
          }
        >
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />

          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Island
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
