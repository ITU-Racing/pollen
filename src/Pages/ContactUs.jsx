import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactPage() {
  const [state, handleSubmit] = useForm("xrbarppp"); // ✅ senin form ID
  if (state.succeeded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-green-600 text-xl font-semibold">
          ✅ Thanks for your message! We’ll get back to you soon.
        </p>
      </div>
    );
  }

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
          Contact <span className="text-yellow-500">Us</span>
        </motion.h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600">
          Got a question, proposal, or just want to say hi? We’d love to hear
          from you.
        </p>
      </section>

      {/* Grid */}
      <section className="grid gap-12 lg:grid-cols-2 items-start">
        {/* Info */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Mail className="text-[#3b82f6]" size={28} />
            <div>
              <h3 className="text-lg font-bold">Email</h3>
              <p className="text-gray-700">pollensupport@gmail.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="text-yellow-500" size={28} />
            <div>
              <h3 className="text-lg font-bold">Phone</h3>
              <p className="text-gray-700">+90 554 178 40 80</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="text-red-500" size={28} />
            <div>
              <h3 className="text-lg font-bold">Address</h3>
              <p className="text-gray-700">ITU Ayazağa Campus, Istanbul</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit} // ✅ Formspree handleSubmit
          className="bg-gray-50 p-8 rounded-2xl shadow-lg space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 w-full rounded-lg border-gray-300 focus:border-[#1f2937] focus:ring-[#1f2937]"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full rounded-lg border-gray-300 focus:border-[#1f2937] focus:ring-[#1f2937]"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              required
              className="mt-1 w-full rounded-lg border-gray-300 focus:border-[#1f2937] focus:ring-[#1f2937]"
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full px-6 py-3 bg-[#1f2937] text-white font-semibold rounded-xl hover:bg-[#374151] transition"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </section>
    </div>
  );
}
