import { motion } from "framer-motion";
import worldMap from "../assets/images/yoyoyo.png"; // 🔥 senin görsel

export default function LocationPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-extrabold text-[#1f2937]"
        >
          Our <span className="text-yellow-500">Global Reach</span>
        </motion.h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600">
          From Istanbul to the world — our journey spreads across continents,  
          building connections with{" "}
          <span className="text-[#3b82f6] font-semibold">musicians, innovators, {" "}</span>  
          and sustainability-driven partners worldwide.
        </p>
      </section>

      {/* Map */}
      <section className="flex justify-center mb-20">
        <motion.img
          src={worldMap}
          alt="Pollen Global Locations"
          className="max-w-7xl w-full rounded-2xl shadow-lg border border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </section>

      {/* Impact Numbers (ProjectsPage ile aynı içerik) */}
      <section className="bg-gray-100 rounded-2xl shadow-inner py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1f2937] mb-12">
          Our <span className="text-yellow-500">Impact</span> in Numbers
        </h2>
        <div className="grid gap-8 sm:grid-cols-3 text-center">
          <div>
            <p className="text-4xl font-extrabold text-yellow-500">8,000+</p>
            <p className="text-gray-600">tons CO₂ saved</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-[#3b82f6]">50+</p>
            <p className="text-gray-600">instruments donated</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-red-500">75,000+</p>
            <p className="text-gray-600">early community members</p>
          </div>
        </div>
      </section>
    </div>
  );
}
