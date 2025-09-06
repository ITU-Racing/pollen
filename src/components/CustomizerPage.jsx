import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Choicer from "./Choicer.jsx";
import Scene from "./Scene.jsx";

export default function CustomizerPage() {
  const [selectedCategory, setSelectedCategory] = useState("Guitar Body");
  const [selectedModel, setSelectedModel] = useState("Bumblebee");
  const [selectedColor, setSelectedColor] = useState("Yellow");
  const [isChoicerOpen, setIsChoicerOpen] = useState(true);

  const navigate = useNavigate();

  const [lastColors, setLastColors] = useState({
    "Guitar Body": "#00050a",
    "Guitar Neck": "#F0EBCD",
    "Pickguard": "#00050a",
    "Buttons": "#00050a",
  });

  const colorMap = {
    GuitarBodyWhite: "#FFFFFF",
    GuitarBodyPink: "#E281E7",
    GuitarBodyBlue: "#3C6193",
    GuitarBodyBlack: "#343434",
    GuitarBodyNavyBlue: "#06294F",
    GuitarBodyRed: "#A60000",
    GuitarBodyYellow: "#E5B206",
    GuitarBodyGreen: "#4AB246",
    GuitarBodyGray: "#616161",
    PickguardWhite: "#FCFCFC",
    PickguardBlack: "#0A0A0A",
    ButtonsBlack: "#0A0A0A",
    ButtonsGray: "#4A4A4A",
    GuitarNeckDark: "#464335",
    GuitarNeckLight: "#634E39",
  };

  const updateColorForCategory = (category, color) => {
    if (!category || !color) return;
    const safeCategory = category.replace(/\s+/g, "");
    const fullKey = `${safeCategory}${color}`;
    if (colorMap[fullKey]) {
      setLastColors((prev) => ({
        ...prev,
        [category]: colorMap[fullKey],
      }));
    }
  };

  const handleChoicerChange = (category, model, color) => {
    setSelectedCategory(category);
    setSelectedModel(model);
    setSelectedColor(color);
    updateColorForCategory(category, color);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Scene alanı */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          bottom: isChoicerOpen ? "16rem" : "3.5rem", // 64px yerine responsive rem
        }}
      >
        <Scene
          selectedModel={selectedModel}
          selectedCategory={selectedCategory}
          selectedColor={selectedColor}
          lastColors={lastColors}
        />
      </div>

      {/* Done butonu */}
      <button
        onClick={() => navigate("/product")}
        className="absolute right-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-lg 
          hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 
          transition cursor-pointer
          bottom-20 sm:bottom-24 md:bottom-28 lg:bottom-32"
      >
        Done
      </button>

      {/* Choicer (responsive yükseklik) */}
      <Choicer
        isOpen={isChoicerOpen}
        onToggle={() => setIsChoicerOpen((prev) => !prev)}
        onChange={handleChoicerChange}
      />
    </div>
  );
}
