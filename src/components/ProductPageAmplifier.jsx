import { useState } from "react";
import { useNavigate } from "react-router-dom";


import covanfront from '../assets/images/Covan/covanfront.jpg';
import covanback from '../assets/images/Covan/covanback.jpg';
import covanside from '../assets/images/Covan/covanside.jpg';
import covanperspective from '../assets/images/Covan/covanperspective.jpg';
import hivefront from '../assets/images/Hive/hivefront.jpg';
import hiveback from '../assets/images/Hive/hiveback.jpg';
import hiveside from '../assets/images/Hive/hiveside.jpg';
import hiveperspective from '../assets/images/Hive/hiveperspective.jpg';
import swarmfront from '../assets/images/Swarm/swarmfront.jpg';
import swarmback from '../assets/images/Swarm/swarmback.jpg';
import swarmside from '../assets/images/Swarm/swarmside.jpg';
import swarmperspective from '../assets/images/Swarm/swarmperspective.jpg';
import honeycombfront from '../assets/images/HoneyComb/honeycombfront.jpg';
import honeycombback from '../assets/images/HoneyComb/honeycombback.jpg';
import honeycombside from '../assets/images/HoneyComb/honeycombside.jpg';
import honeycombperspective from '../assets/images/HoneyComb/honeycombperspective.jpg';


const images = {

    Covan: [
        covanfront,
        covanback,
        covanside,
        covanperspective,
    ],

    Hive: [
        hivefront,
        hiveback,
        hiveside,
        hiveperspective,
    ],

    Swarm: [
        swarmfront,
        swarmback,
        swarmside,
        swarmperspective,
    ],

    HoneyComb: [
        honeycombfront,
        honeycombback,
        honeycombside,
        honeycombperspective,
    ]
  
  };


  const textes = {
    Covan: `Precision-built for clean projection and full-spectrum tone. \n Covan is a hexagonal solid-body amplifier constructed from reinforced recycled carbon fiber panels and aluminum corner guards. Designed for mid- to large-scale performance use, it delivers consistent sound pressure across a wide frequency range. It features an integrated 10” neodymium speaker with a high-frequency tweeter, offering extended highs and punchy mids. Multiple input formats allow seamless transition between practice and performance settings.\nPower Output: 80W RMS \n Speaker Configuration: 10" Neodymium Driver + 1" HF Tweeter \n Connectivity: 6.3mm Instrument Jack, AUX (3.5mm), USB-C, Bluetooth 5.0 \n Cabinet Material: Carbon fiber composite with aluminum guards \n Weight: 7.8 kg \n Dimensions: 42 x 46 x 26 cm`,
    Hive: `Compact, lightweight, and purpose-built for portability. Hive is the smallest model in the lineup, designed for travel, home use, and low-volume sessions. The enclosure is carbon fiber-reinforced with optimized internal damping. A 6.5” full-range driver provides clarity across clean and lightly driven tones, while battery operation ensures mobility.\nPower Output: 30W RMS \n Speaker: 6.5" Full-Range Driver \n Connectivity: AUX (3.5mm), Bluetooth 5.0 \n Power Supply: Rechargeable Lithium-Ion Battery (5-hour average runtime) \n Cabinet Material: Carbon fiber composite \n Weight: 3.1 kg \n Dimensions: 28 x 32 x 18 cm`,
    Swarm: `Analog warmth meets modern efficiency. Swarm features a dual-channel preamp design with analog EQ circuitry and a traditional box-style enclosure. Designed for stage compatibility, it includes a 12” ceramic speaker and line-level output for external PA systems or recording gear. Ideal for players requiring volume headroom and tonal shaping controls.\nPower Output: 60W RMS \n Speaker: 12" Ceramic Magnet Driver \n Channels: 2 (Clean / Drive) with Independent EQ \n Connectivity: Line-In, Line-Out, USB Recording Port \n Cabinet Material: MDF + Carbon fiber front grille \n Weight: 9.2 kg \n Dimensions: 48 x 41 x 25 cm`,
    HoneyComb: `Entry-level format with essential features for everyday use. Honeycomb is a compact amplifier intended for beginners, home musicians, or classroom applications. It includes a 2-band EQ and headphone out for silent practice. The 8” speaker provides a smooth, rounded tone suited for clean guitar or basic effects.\nPower Output: 20W RMS \n Speaker: 8" Standard Driver \n EQ: 2-band (Bass / Treble) \n Connectivity: 6.3mm Instrument Jack, AUX, Headphone Output \n Cabinet Material: Carbon fiber composite with polymer front panel \n Weight: 4.4 kg \n Dimensions: 35 x 30 x 20 cm`,
  }

  const productCodes =  {
    Covan: "DQ8426-146",
    Hive: "DQ8426-147",
    Swarm: "DQ8426-148",
    HoneyComb: "DQ8426-149",
}

  const prices = {
    Covan: 250,
    Hive: 150,
    Swarm: 175,
    HoneyComb: 125,
  }

 
const sizes = ["Covan", "Hive", "Swarm", "HoneyComb"];

export default function ProductPageAmplifier() {
  const [selectedSize, setSelectedSize] = useState("Covan");
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [orderSuccess, setOrderSuccess] = useState(false);



  const handleOrder = () => {
    if (selectedSize) {
      setOrderSuccess(true);
      setTimeout(() => {
        setOrderSuccess(false);
      }, 3000);
    }
  };


  const imgs = images[selectedSize] || [];
  const text = textes[selectedSize] 
  const productCode = productCodes[selectedSize];

  const handlePrevImage = () => {
    setMainImageIndex((prevIndex) => (prevIndex === 0 ? imgs.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setMainImageIndex((prevIndex) => (prevIndex === imgs.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex flex-col md:flex-row p-4 max-w-7xl mx-auto gap-6">
      {/* Left - Image Gallery */}
      <div className="flex flex-col gap-4 w-full h-full md:w-1/2 relative">
        <img
          src={imgs[mainImageIndex]}
          alt="Product"
          className="rounded-2xl h-96 shadow-lg object-cover"
        />
        <button
          onClick={handlePrevImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-lg"
        >
          &lt;
        </button>
        <button
          onClick={handleNextImage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-lg"
        >
          &gt;
        </button>
        <div className="flex gap-2 overflow-x-auto mt-2">
          {imgs.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="Thumbnail"
              className="w-20 h-20 object-cover rounded-xl cursor-pointer border-2 hover:border-black"
              onClick={() => setMainImageIndex(idx)}
            />
          ))}
        </div>
      </div>

      {/* Right - Product Details */}
      <div className="flex flex-col gap-6 w-full md:w-1/2">
        <div>
          <h1 className="text-3xl font-bold">{selectedSize} Amplifier</h1>
          <p className="text-gray-500">Product Code: {productCode}</p>
        </div>

        <div className="text-2xl font-semibold text-gray-800">
          {prices[selectedSize]}€
        </div>
        {/* Size Selector */}
        <div>
          <h2 className="text-lg mb-2">Select Model</h2>
          <div className="grid grid-cols-3 gap-2">
            {sizes.map((size, idx) => (
              <button
                key={idx}
                className={`border p-2 rounded-lg ${
                  selectedSize === size ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Order Button */}
        <button
          disabled={!selectedSize}
          onClick={handleOrder}
          className="bg-black text-white p-4 rounded-xl text-lg hover:opacity-90 disabled:opacity-50"
        >
          Order One
        </button>

    
       

        {/* Success Message */}
        {orderSuccess && (
          <div className="p-4 bg-green-100 text-green-700 rounded-xl">
            Your order has been successfully placed! 🎉
          </div>
        )}

        {/* Product Description */}
        <div className="text-gray-700" style={{whiteSpace: "pre-line"}}>
          <h3 className="font-semibold mb-1">Product Description</h3>
          <p>
            {text}
          </p>
        </div>

      
      </div>
    </div>
  );
}
