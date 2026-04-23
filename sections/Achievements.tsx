"use client";

import { motion } from "framer-motion";

const achievements = [
  {
    title: "Top 4 Finalist – NariYukthi TechHack",
    description:
      "Selected among top 20 teams nationwide and secured a top 4 position in the national finale.",
  },
  {
    title: "CSA Summer School – IISc Bangalore",
    description:
      "Shortlisted from 1000+ applicants to attend advanced workshops and research sessions.",
  },
];

export default function Achievements() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-semibold tracking-tight mb-10"
      >
        Achievements
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-xl border border-gray-800 bg-[#111827]/40 hover:border-blue-500 hover:scale-[1.02] transition duration-300"
          >
            <h3 className="font-semibold">
              {item.title}
            </h3>
            <p className="text-gray-400 mt-2 text-sm">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}