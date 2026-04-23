"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSuccess("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setSuccess("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-24">
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-semibold tracking-tight mb-10"
      >
        Contact Me
      </motion.h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          className="w-full p-4 rounded-lg bg-[#111827] border border-gray-700 focus:outline-none focus:border-blue-500"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          className="w-full p-4 rounded-lg bg-[#111827] border border-gray-700 focus:outline-none focus:border-blue-500"
          required
        />

        <textarea
          placeholder="Your Message"
          value={form.message}
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
          className="w-full p-4 rounded-lg bg-[#111827] border border-gray-700 focus:outline-none focus:border-blue-500 h-32"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-500 hover:scale-[1.03] transition duration-200"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && (
          <p className="text-sm text-gray-400">{success}</p>
        )}

      </form>
    </section>
  );
}