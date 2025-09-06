import { motion } from "framer-motion";
import {useNavigate} from "react-router-dom";

export default function Career() {
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
          Join Our Team
        </motion.h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-700">
          At <span className="text-yellow-500 font-semibold">ITU Racing</span>,  
          we are not just building a Formula Student race car —  
          we are building the future of engineering, business, and innovation.  
        </p>
      </section>

      {/* Positions Section */}
      <section className="px-6 py-20 bg-gray-100">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-[#1f2937]">
          Open Positions
        </h2>
        <div className="grid gap-8 sm:grid-cols-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white border border-gray-200 rounded-2xl shadow-md text-center"
          >
            <h3 className="text-xl font-semibold text-[#1f2937]">Engineering</h3>
            <p className="mt-3 text-gray-700">
              Work on vehicle dynamics, sensor fusion, Kalman filters,  
              launch control, and sustainable powertrain systems.
            </p>
            <button className="mt-5 px-4 py-2 bg-[#1f2937] text-white rounded-lg hover:bg-[#374151] transition">
              Apply Now
            </button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white border border-gray-200 rounded-2xl shadow-md text-center"
          >
            <h3 className="text-xl font-semibold text-[#3b82f6]">Business</h3>
            <p className="mt-3 text-gray-700">
              Join our Business Plan team, manage sponsorships,  
              build investor relations, and design winning strategies.
            </p>
            <button className="mt-5 px-4 py-2 bg-[#3b82f6] text-white rounded-lg hover:bg-blue-600 transition">
              Apply Now
            </button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white border border-gray-200 rounded-2xl shadow-md text-center"
          >
            <h3 className="text-xl font-semibold text-yellow-500">Design</h3>
            <p className="mt-3 text-gray-700">
              Bring creativity to life with UI/UX design,  
              branding, and media content for global exposure.
            </p>
            <button className="mt-5 px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition">
              Apply Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1f2937] mb-6">
          Ready to Make an Impact?
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-8">
          Whether you are an engineer, a strategist, or a designer,  
          there is a place for you in ITU Racing. Let’s build the future together.
        </p>
        <button onClick={()=> navigate("/contact-us")} className="px-6 py-3 bg-[#1f2937] text-white font-semibold rounded-xl hover:bg-[#374151] transition">
          Get in Touch
        </button>
      </section>
    </div>
  );
}
