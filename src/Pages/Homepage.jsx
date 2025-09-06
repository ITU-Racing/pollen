import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-28 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#1f2937]"
        >
          ITU Racing & Pollen
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 max-w-2xl text-lg sm:text-xl text-gray-700"
        >
          We give forgotten{" "}
          <span className="text-yellow-500 font-semibold">fibers</span> a voice,
          a rhythm and a new reason to{" "}
          <span className="text-blue-500 font-semibold">exist</span>.
        </motion.p>
        <div className="mt-8 flex gap-4">
          <Link
            to="/projects"
            className="px-6 py-3 bg-[#1f2937] text-white font-semibold rounded-xl hover:bg-[#374151] transition"
          >
            Explore Projects
          </Link>
          <Link
            to="/career"
            className="px-6 py-3 border border-[#1f2937] text-[#1f2937] rounded-xl hover:bg-[#1f2937] hover:text-white transition"
          >
            Join the Team
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-20 bg-gray-100 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#1f2937]">
          Who We Are
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          We are <span className="text-yellow-500 font-semibold">Pollen</span>,
          a young and ambitious startup turning forgotten carbon fiber waste
          into instruments that inspire. With a passion for music and a
          commitment to{" "}
          <span className="text-blue-500 font-semibold">sustainability</span>,
          we design
          <span className="text-yellow-500 font-semibold"> guitars</span> and
          amplifiers that are innovative, customizable, and{" "}
          <span className="text-blue-500 font-semibold">eco-friendly</span>. At
          <span className="text-yellow-500 font-semibold"> Pollen</span>, we
          don’t just build instruments, we create stories that connect
          <span className="text-blue-500 font-semibold"> creativity</span> with
          a greener future.
        </p>
      </section>

      {/* Key Highlights */}
      <section className="px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-[#1f2937]">
          Key Highlights
        </h2>
        <div className="grid gap-8 sm:grid-cols-3 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white border border-gray-200 rounded-2xl shadow-md"
          >
            <h3 className="text-xl font-semibold text-yellow-500">
              Business Plan
            </h3>
            <p className="mt-3 text-gray-700">
              Sponsorship, investment, and long-term strategy that give us an
              edge in the Formula Student arena.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white border border-gray-200 rounded-2xl shadow-md"
          >
            <h3 className="text-xl font-semibold text-[#3b82f6]">
              Engineering
            </h3>
            <p className="mt-3 text-gray-700">
              Sensor fusion, Kalman filtering, launch control, and energy
              management systems — cutting-edge solutions.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white border border-gray-200 rounded-2xl shadow-md"
          >
            <h3 className="text-xl font-semibold text-[#1f2937]">Innovation</h3>
            <p className="mt-3 text-gray-700">
              Blending{" "}
              <span className="text-yellow-500 font-semibold">creativity</span>{" "}
              and
              <span className="text-[#3b82f6] font-semibold">
                {" "}
                technology
              </span>{" "}
              to build not just a race car, but a new culture of innovation.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
