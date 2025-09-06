// Choicer.jsx

import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const choices = [
  {
    category: "Guitar Body",
    options: [
      {
        category2: "Bumblebee",
        options2: [
          "Yellow",
          "Pink",
          "Gray",
          "Green",
          "Blue",
          "NavyBlue",
          "Red",
          "Black",
        ],
      },
      {
        category2: "Honeybee",
        options2: [
          "Yellow",
          "Pink",
          "Gray",
          "Green",
          "Blue",
          "NavyBlue",
          "Red",
          "Black",
        ],
      },
      {
        category2: "Wasp",
        options2: [
          "Yellow",
          "Pink",
          "Gray",
          "Green",
          "Blue",
          "NavyBlue",
          "Red",
          "Black",
        ],
      },
      {
        category2: "Hornet",
        options2: [
          "Yellow",
          "Pink",
          "Gray",
          "Green",
          "Blue",
          "NavyBlue",
          "Red",
          "Black",
        ],
      },
    ],
  },
  {
    category: "Guitar Neck",
    options: [
      { category2: "Bumblebee", options2: ["Dark", "Light"] },
      { category2: "Honeybee", options2: ["Dark", "Light"] },
      { category2: "Wasp", options2: ["Dark", "Light"] },
      { category2: "Hornet", options2: ["Dark", "Light"] },
    ],
  },
  {
    category: "Pickguard",
    options: [
      { category2: "Bumblebee", options2: ["Black", "White"] },
      { category2: "Honeybee", options2: ["Black", "White"] },
      { category2: "Wasp", options2: ["Black", "White"] },
      { category2: "Hornet", options2: ["Black", "White"] },
    ],
  },
  {
    category: "Buttons",
    options: [
      { category2: "Bumblebee", options2: ["Black", "Gray"] },
      { category2: "Honeybee", options2: ["Black", "Gray"] },
      { category2: "Wasp", options2: ["Black", "Gray"] },
      { category2: "Hornet", options2: ["Black", "Gray"] },
    ],
  },
];

const colors = [
  { color: "White", value: "FFFFFF" },
  { color: "Pink", value: "E281E7FF" },
  { color: "Black", value: "343434FF" },
  { color: "Blue", value: "3C6193" },
  { color: "NavyBlue", value: "06294F" },
  { color: "Red", value: "A60000FF" },
  { color: "Yellow", value: "E5B206FF" },
  { color: "Green", value: "4AB246FF" },
  { color: "Gray", value: "616161FF" },
  { color: "Dark", value: "343434FF" },
  { color: "Light", value: "F3EED1" },
];

export default function Choicer({ isOpen, onToggle, onChange }) {
  const [category1Index, setCategory1Index] = useState(0);
  const [selected1, setSelected1] = useState(choices[0]);
  const [selectedCategory2, setSelectedCategory2] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [direction, setDirection] = useState(1); // 1 = sağ, -1 = sol

  useEffect(() => {
    const firstCategory2 = selected1.options[0];
    setSelectedCategory2(firstCategory2);
    setSelectedColor(firstCategory2.options2[0]);
  }, [selected1]);

  const handleNextCategory = () => {
    setDirection(1);
    setCategory1Index((prevIndex) => {
      const newIndex = (prevIndex + 1) % choices.length;
      setSelected1(choices[newIndex]);
      return newIndex;
    });
  };
  const handlePrevCategory = () => {
    setDirection(-1);
    setCategory1Index((prevIndex) => {
      const newIndex = (prevIndex - 1 + choices.length) % choices.length;
      setSelected1(choices[newIndex]);
      return newIndex;
    });
  };

  useEffect(() => {
    if (selected1 && selectedColor && selectedCategory2) {
      onChange(selected1.category, selectedCategory2.category2, selectedColor);
    }
  }, [selected1, selectedCategory2, selectedColor, onChange]);

  return (
    <div
      className="fixed bottom-0 w-full bg-white shadow-lg flex flex-col items-center"
      style={{
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
      }}
    >
      {/* Header / Toggle */}
      <div className="w-full flex items-center justify-between  px-4">
        <button onClick={onToggle} className="p-1 rounded hover:bg-gray-100">
          {isOpen ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
        </button>

        <div style={{ width: 28 }} />
      </div>

      {isOpen && (
        <>
          <div>
            {/* 1) Birinci Seviye Kategori Seçimi */}
            <div className="flex items-center gap-6 sm:gap-12 md:gap-20 lg:gap-32 p-2 rounded-lg pl-6 sm:pl-14 w-full">
              <button onClick={handlePrevCategory} className="pl-2 sm:pl-3">
                <ArrowLeft size={20} className="sm:size-24" />
              </button>

              <motion.div
                key={selected1.category}
                initial={{ opacity: 0.5, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0.5, x: -direction * 50 }}
                transition={{ duration: 0.2 }}
                className="min-w-[120px] text-right sm:text-center"
              >
                <span className="text-base sm:text-lg font-normal">
                  {selected1.category}
                </span>
                <br />
                <span className="text-sm sm:text-lg font-normal text-gray-500">
                  {category1Index + 1} / {choices.length}
                </span>
              </motion.div>

              <button onClick={handleNextCategory} className="p-1 sm:p-2">
                <ArrowRight size={20} className="sm:size-24" />
              </button>
            </div>

            {/* 2) İkinci Seviye (Model) Seçimi */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selected1.category}
                initial={{ opacity: 0.25, x: direction * 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0.25, x: -direction * 100 }}
                transition={{ duration: 0.1 }}
                className="mt-2 flex flex-wrap gap-3 sm:gap-5 ml-2 sm:ml-4 p-2 w-full justify-center"
              >
                {selected1.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedCategory2(option);
                      setSelectedColor(option.options2[0]);
                    }}
                    className={`px-3 sm:px-4 w-24 sm:w-28 md:w-32 h-9 text-sm sm:text-base border rounded-full font-semibold transition ${
                      selectedCategory2?.category2 === option.category2
                        ? "border-gray-950 border-2"
                        : "border-gray-500"
                    }`}
                  >
                    {option.category2}
                  </button>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* 3) Üçüncü Seviye (Renk) Seçimi */}
            {selectedCategory2 && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory2.category2}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="mt-2 flex flex-wrap gap-2 sm:gap-4 justify-center p-1 w-full"
                >
                  {selectedCategory2.options2.map((color, index) => {
                    const colorObj = colors.find((c) => c.color === color);
                    const bgColor = colorObj ? `#${colorObj.value}` : "gray";

                    return (
                      <motion.button
                        key={index}
                        onClick={() => setSelectedColor(color)}
                        className="flex flex-col items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2"
                        whileTap={{ scale: 0.9 }}
                      >
                        <motion.div
                          className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-gray-300 ${
                            selectedColor === color
                              ? "outline outline-offset-2 sm:outline-offset-4 outline-gray-200"
                              : ""
                          }`}
                          style={{
                            backgroundColor: bgColor,
                            outlineWidth: 1.3,
                          }}
                          whileHover={{ scale: 1.1 }}
                        ></motion.div>

                        <div className="relative min-h-[14px] sm:min-h-[16px] flex items-center">
                          {selectedColor === color ? (
                            <p className="text-[10px] sm:text-xs">{color}</p>
                          ) : (
                            <p className="invisible text-[10px] sm:text-xs">
                              {color}
                            </p>
                          )}
                        </div>
                      </motion.button>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </>
      )}
    </div>
  );
}
