import { motion } from "framer-motion";
import { Music, Recycle, School } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProjectsPage() {
  const navigate = useNavigate();
  return (
    <div className="bg-white text-gray-900 min-h-screen px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-extrabold text-[#1f2937]"
        >
          Our <span className="text-yellow-500">Projects</span>
        </motion.h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600">
          We go beyond building instruments. Our projects empower{" "}
          <span className="text-[#3b82f6] font-semibold">innovation</span>,  
          inspire <span className="text-yellow-500 font-semibold">young musicians</span>,  
          and contribute to a <span className="text-[#3b82f6] font-semibold">sustainable future</span>.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 mb-20">
        {/* Project 1 */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-gray-50 border border-gray-200 rounded-2xl shadow-lg p-8 text-center"
        >
          <Recycle className="mx-auto text-yellow-500 mb-4" size={40} />
          <h3 className="text-xl font-bold text-[#1f2937] mb-3">Sustainable Guitars</h3>
          <p className="text-gray-700 mb-4">
            Transforming forgotten <span className="text-yellow-500">carbon fibers</span>  
            into durable, customizable guitars and amplifiers.  
            Each piece reduces waste and embraces eco-conscious design.
          </p>
          <p className="text-sm text-gray-500 italic">“A greener rhythm for a louder world.”</p>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-gray-50 border border-gray-200 rounded-2xl shadow-lg p-8 text-center"
        >
          <School className="mx-auto text-[#3b82f6] mb-4" size={40} />
          <h3 className="text-xl font-bold text-[#1f2937] mb-3">High School Donations</h3>
          <p className="text-gray-700 mb-4">
            Supporting the next generation of musicians by donating  
            guitars and amplifiers to <span className="text-[#3b82f6]">school music programs</span>.  
            Empowering youth to create, learn, and express through sustainable instruments.
          </p>
          <p className="text-sm text-gray-500 italic">100+ instruments donated.</p>
        </motion.div>

        {/* Project 3 */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-gray-50 border border-gray-200 rounded-2xl shadow-lg p-8 text-center"
        >
          <Music className="mx-auto text-red-500 mb-4" size={40} />
          <h3 className="text-xl font-bold text-[#1f2937] mb-3">Innovation Lab</h3>
          <p className="text-gray-700 mb-4">
            Exploring ways to merge <span className="text-yellow-500">technology</span>  
            and <span className="text-[#3b82f6]">creativity</span>.  
            From smart amplifiers to modular accessories,  
            we are designing the future of music gear.
          </p>
        
        </motion.div>
      </section>

      {/* Impact Numbers */}
      <section className="bg-gray-100 rounded-2xl shadow-inner py-16 mb-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1f2937] mb-12">
          Our <span className="text-yellow-500">Forecasted</span> Impact
        </h2>
        <div className="grid gap-8 sm:grid-cols-3 text-center">
          <div>
            <p className="text-4xl font-extrabold text-yellow-500">8.000+</p>
            <p className="text-gray-600">tons CO₂ saved</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-[#3b82f6]">100+</p>
            <p className="text-gray-600">instruments donated</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-red-500">40.000+</p>
            <p className="text-gray-600">community members</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1f2937] mb-6">
          Want to Be Part of the <span className="text-yellow-500">Journey</span>?
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-8">
          Whether you are a sponsor, a musician, or a believer in sustainable design,  
          our projects open the stage for you to make an impact.
        </p>
        <button onClick={()=> navigate("/contact-us")} className="px-6 py-3 bg-[#1f2937] text-white font-semibold rounded-xl hover:bg-[#374151] transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
