// CustomizerPageAmplifier.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChoicerAmplifier from "./ChoicerAmplifier.jsx";
import SceneAmplifier from "./SceneAmplifier.jsx";

export default function CustomizerPageAmplifier() {
  // 1) Choicer’dan gelecek seçim bilgileri
  const [selectedCategory, setSelectedCategory] = useState("Amp Body");
  // Görselde gitar olmayan isimleri amfi modeli olarak varsayıyoruz
  // (örnek: Covan, Hive, HoneyComb, Hornet, Swarm, Wasp)
  const [selectedModel, setSelectedModel] = useState("Hive");
  const [selectedColor, setSelectedColor] = useState("Black");

  const navigate = useNavigate();

  // 2) lastColors’u parent’ta tutuyoruz
  const [lastColors, setLastColors] = useState({
    "Amp Body": "#1a1a1a",
    "Amp Grill": "#d9d9d9",
    "Knobs": "#1a1a1a",
    "Logo": "#ffffff",
  });

  // 3) Renklerin hex eşlemeleri (KategoriAdı + Renk)
  const colorMap = {
    // Amp Body
    "AmpBodyWhite": "#FFFFFF",
    "AmpBodyBlack": "#1A1A1A",
    "AmpBodyGray": "#616161",
    "AmpBodyNavyBlue": "#06294F",
    "AmpBodyGreen": "#4AB246",
    "AmpBodyRed": "#A60000",
    "AmpBodyYellow": "#E5B206",

    // Amp Grill / Cloth
    "AmpGrillWhite": "#EFEFEF",
    "AmpGrillBlack": "#0A0A0A",
    "AmpGrillCream": "#E8E2D0",
    "AmpGrillGray": "#8A8A8A",

    // Knobs
    "KnobsBlack": "#0A0A0A",
    "KnobsGold": "#D4AF37",
    "KnobsSilver": "#BFBFBF",
    "KnobsCream": "#E8E2D0",

    // Logo
    "LogoWhite": "#FFFFFF",
    "LogoBlack": "#000000",
    "LogoGold": "#D4AF37",
    "LogoSilver": "#BFBFBF",
  };

  // 4) Kategori + renk geldiğinde lastColors’u güncelle
  const updateColorForCategory = (category, color) => {
    if (!category || !color) return;
    const safeCategory = category.replace(/\s+/g, "");
    const key = `${safeCategory}${color}`;
    if (colorMap[key]) {
      setLastColors((prev) => ({ ...prev, [category]: colorMap[key] }));
    }
  };

  // 5) Choicer’dan gelen değişiklik
  const handleChoicerChange = (category, model, color) => {
    setSelectedCategory(category);
    setSelectedModel(model);
    setSelectedColor(color);
    updateColorForCategory(category, color);
  };

  // 6) Choicer açık/kapalı
  const [isChoicerOpen, setIsChoicerOpen] = useState(true);

  // 7) Yükseklikler
  const HEADER_HEIGHT = 48;
  const FULL_CHOICER_HEIGHT = 240;

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* 8) Scene kapsayıcısı */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          bottom: isChoicerOpen ? FULL_CHOICER_HEIGHT : HEADER_HEIGHT,
        }}
      >
        <SceneAmplifier
          selectedModel={selectedModel}
          selectedCategory={selectedCategory}
          selectedColor={selectedColor}
          lastColors={lastColors}
        />
      </div>

      {/* Done butonu */}
      <button
        type="button"
        onClick={() => navigate("/product")}
        className="absolute px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition cursor-pointer"
        style={{
          bottom: isChoicerOpen
            ? FULL_CHOICER_HEIGHT + 78
            : HEADER_HEIGHT + 46,
          right: 24,
        }}
      >
        Done
      </button>

      {/* Choicer */}
      <ChoicerAmplifier
        isOpen={isChoicerOpen}
        onToggle={() => setIsChoicerOpen((prev) => !prev)}
        onChange={handleChoicerChange}
        // İstersen modelleri burada da iletebilirsin:
        // availableModels={["Covan", "Hive", "HoneyComb", "Hornet", "Swarm", "Wasp"]}
      />
    </div>
  );
}
