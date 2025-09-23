import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl, name }) => {
  const [decal] = useTexture([imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={5}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#b5d7e2"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/* Front */}
        <Decal
          position={[0, 0, 1]}
          rotation={[0, 0, 0]}
          scale={1}
          map={decal}
          flatShading
        />
        {/* Back */}
        <Decal
          position={[0, 0, -1]}
          rotation={[0, Math.PI, 0]}
          scale={1}
          map={decal}
          flatShading
        />
        {/* Left */}
        <Decal
          position={[-1, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1}
          map={decal}
          flatShading
        />
        {/* Right */}
        <Decal
          position={[1, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
          scale={1}
          map={decal}
          flatShading
        />
        {/* Top */}
        <Decal
          position={[0, 1, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
          map={decal}
          flatShading
        />
        {/* Bottom */}
        <Decal
          position={[0, -1, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, name }) => {
  return (
    <Canvas dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} name={name} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
