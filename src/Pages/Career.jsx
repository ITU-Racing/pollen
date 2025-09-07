import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
          At <span className="text-yellow-500 font-semibold">Pollen</span>,
          we are not just building instruments, we are turning waste into innovation and melody
        </p>
      </section>

      {/* Positions Section */}
      <section className="px-6 py-20 bg-gray-100">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-[#1f2937]">
          Open Positions
        </h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Design & Engineering */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white border border-gray-200 rounded-2xl shadow-md text-center"
          >
            <h3 className="text-xl font-semibold text-[#1f2937]">
              Design & Engineering
            </h3>
            <p className="mt-3 text-gray-700">
              Shape the future of sustainable instruments with{" "}
              <span className="font-semibold text-[#1f2937]">
                advanced composites
              </span>
              , 3D modeling, sensor integration, and innovative control systems.
              Perfect for engineers and creators who love solving real-world
              challenges.
            </p>
            <button className="mt-5 px-4 py-2 bg-[#1f2937] text-white rounded-lg hover:bg-[#374151] transition">
              Apply Now
            </button>
          </motion.div>

          {/* Manufacturing */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white border border-gray-200 rounded-2xl shadow-md text-center"
          >
            <h3 className="text-xl font-semibold text-[#3b82f6]">
              Manufacturing
            </h3>
            <p className="mt-3 text-gray-700">
              Get hands-on with{" "}
              <span className="font-semibold text-[#3b82f6]">
                carbon fiber processing
              </span>
              , CNC machining, and prototyping. Help us transform recycled
              materials into world-class guitars and amplifiers.
            </p>
            <button className="mt-5 px-4 py-2 bg-[#3b82f6] text-white rounded-lg hover:bg-blue-600 transition">
              Apply Now
            </button>
          </motion.div>

          {/* Sales & Marketing */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white border border-gray-200 rounded-2xl shadow-md text-center"
          >
            <h3 className="text-xl font-semibold text-yellow-500">
              Sales & Marketing
            </h3>
            <p className="mt-3 text-gray-700">
              Drive our story to the world with{" "}
              <span className="font-semibold text-yellow-500">
                creative campaigns
              </span>
              , global branding, and community engagement. Connect with
              sponsors, musicians, and new audiences to scale our vision.
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
          Whether you are an engineer, a strategist, or a designer, there is a
          place for you in Pollen. Let’s build the future together.
        </p>
        <button
          onClick={() => navigate("/contact-us")}
          className="px-6 py-3 bg-[#1f2937] text-white font-semibold rounded-xl hover:bg-[#374151] transition"
        >
          Get in Touch
        </button>
      </section>
    </div>
  );
}
