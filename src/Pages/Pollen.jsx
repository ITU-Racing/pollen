import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function PollenPage() {
  const navigate = useNavigate();
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="px-6 pt-24 pb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#1f2937]"
        >
          Project Pollen
        </motion.h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-700">
          Our <span className="text-yellow-500 font-semibold">Formula Student concept </span>  
          unites technology, sustainability, and innovation to redefine racing.  
        </p>
      </section>

      {/* Video Section */}
      <section className="px-6 pb-20 flex flex-col items-center">
        <div className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/byFnkdCNd7E"
            title="Pollen Concept Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="mt-6 max-w-3xl text-center text-gray-600 text-lg">
          Watch our <span className="text-[#3b82f6] font-bold">concept video </span>  
          introducing Project Pollen — a journey that merges engineering,  
          business strategy, and sustainable innovation.
        </p>
      </section>

      {/* Content Highlights */}
      <section className="px-6 py-20 bg-gray-100">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-[#1f2937]">
          What Makes Pollen Unique?
        </h2>
        <div className="grid gap-8 sm:grid-cols-3 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white border border-gray-200 rounded-2xl shadow-md"
          >
            <h3 className="text-xl font-semibold text-yellow-500">Sustainability</h3>
            <p className="mt-3 text-gray-700">
              Designed with eco-friendly concepts that align  
              with the future of clean mobility.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white border border-gray-200 rounded-2xl shadow-md"
          >
            <h3 className="text-xl font-semibold text-[#3b82f6]">Engineering</h3>
            <p className="mt-3 text-gray-700">
              Innovative systems like sensor fusion, Kalman filtering,  
              and launch control bring technology to life.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white border border-gray-200 rounded-2xl shadow-md"
          >
            <h3 className="text-xl font-semibold text-[#1f2937]">Business Plan</h3>
            <p className="mt-3 text-gray-700">
              A strategic roadmap that combines sponsorships,  
              investment opportunities, and international exposure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1f2937] mb-6">
          Be Part of the Journey
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-8">
          Whether you are a sponsor, a partner, or a passionate engineer,  
          Project Pollen welcomes you to join us in shaping the future of racing.
        </p>
        <button onClick={()=> navigate("/contact-us")} className="px-6 py-3 bg-[#1f2937] text-white font-semibold rounded-xl hover:bg-[#374151] transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
