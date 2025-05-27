"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Group } from "three";

function HatModel() {
  const groupRef = useRef<Group>(null);
  const { scene } = useGLTF("/luffy_hat.glb");

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y =
        Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive
        object={scene}
        scale={1.2}
        rotation={[0.2, -0.3, 0.5]}
        position={[0, 0, 0]}
      />
    </group>
  );
}

export default function LuffyHat3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
        }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        <HatModel />
      </Canvas>
    </div>
  );
}

// Preload the model
useGLTF.preload("/luffy_hat.glb");
