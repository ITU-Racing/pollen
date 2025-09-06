import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import Bumblebee from "../meshes/Bumblebee.jsx";
import Honeybee from "../meshes/Honeybee.jsx";
import Hornet from "../meshes/Hornet.jsx";
import Wasp from "../meshes/Wasp.jsx";
import { Environment, OrbitControls } from "@react-three/drei";

export default function Scene({
  selectedModel,
  selectedCategory,
  selectedColor,
  lastColors,
}) {
  // ekran genişliğine göre kamera ayarı
  const [cameraSettings, setCameraSettings] = useState({
    position: [0, 1.5, -2.9],
    fov: 20,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // mobile
        setCameraSettings({ position: [0, 1.2, -3.5], fov: 25 });
      } else if (window.innerWidth < 1024) {
        // tablet
        setCameraSettings({ position: [0, 1.4, -3.2], fov: 22 });
      } else {
        // desktop
        setCameraSettings({ position: [0, 1.5, -2.9], fov: 20 });
      }
    };

    handleResize(); // ilk çalıştırma
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas
      camera={cameraSettings}
      gl={{ toneMappingExposure: 0.75 }}
      className="w-full h-full"
    >
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        maxDistance={6}
        minDistance={2}
      />
      <directionalLight intensity={0.9} position={[0, 5, 2]} color="#dddddd" />
      <ambientLight intensity={0.3} />
      <Environment preset="studio" intensity={0.001} background={false} />

      {selectedModel === "Bumblebee" && (
        <Bumblebee
          selectedCategory={selectedCategory}
          selectedColor={selectedColor}
          lastColors={lastColors}
        />
      )}
      {selectedModel === "Honeybee" && (
        <Honeybee
          selectedCategory={selectedCategory}
          selectedColor={selectedColor}
          lastColors={lastColors}
        />
      )}
      {selectedModel === "Wasp" && (
        <Wasp
          selectedCategory={selectedCategory}
          selectedColor={selectedColor}
          lastColors={lastColors}
        />
      )}
      {selectedModel === "Hornet" && (
        <Hornet
          selectedCategory={selectedCategory}
          selectedColor={selectedColor}
          lastColors={lastColors}
        />
      )}
    </Canvas>
  );
}
