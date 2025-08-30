// Scene.jsx

import { Canvas } from "@react-three/fiber";
import React from "react";
import { HoneyComb } from "../meshes/HoneyComb.jsx";
import { Hive } from "../meshes/Hive.jsx";
import { Swarm } from "../meshes/Swarm.jsx";
import { Covan } from "../meshes/Covan.jsx";
import { Environment, OrbitControls } from "@react-three/drei";

export default function SceneAmplifier({
  selectedModel,
  selectedCategory,
  selectedColor,
  lastColors,       // parent’tan gelen
}) {
  return (
    <Canvas
      camera={{ position: [0, 1.5, -2.9], fov: 20 }}
      gl={{ toneMappingExposure: 0.75 }}
      className="w-full h-full"
    >
      <OrbitControls />
      <directionalLight intensity={0.9} position={[0, 5, 2]} color="#dddddd" />
      <ambientLight intensity={0.3} />
      <Environment preset="studio" intensity={0.001} background={false} />

      {selectedModel === "HoneyComb" && (
        <HoneyComb
          selectedCategory={selectedCategory}
          selectedColor={selectedColor}
          lastColors={lastColors}       // pass ediyoruz
        />
      )}
      {selectedModel === "Hive" && (
        <Hive
          selectedCategory={selectedCategory}
          selectedColor={selectedColor}
          lastColors={lastColors}
        />
      )}
      {selectedModel === "Swarm" && (
        <Swarm
          selectedCategory={selectedCategory}
          selectedColor={selectedColor}
          lastColors={lastColors}
        />
      )}
      {selectedModel === "Covan" && (
        <Covan
          selectedCategory={selectedCategory}
          selectedColor={selectedColor}
          lastColors={lastColors}
        />
      )}
      
    </Canvas>
  );
}
