"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "AI Full-Stack Intern",
    company: "NeuraMach.AI",
    duration: "Sep 2025 – Present",
    description:
      "Working on AI-driven systems including RAG pipelines, vector databases, and LLM-based applications. Building scalable full-stack solutions for real-world use cases.",
  },
  {
    role: "Editorial Head & Event Coordinator",
    company: "Pictoreal",
    duration: "Jun 2023 – Present",
    description:
      "Leading a team of 100+ members managing content, publications, and social media. Coordinating large-scale events and editorial workflows.",
  },
  {
    role: "Reverse Coding Head",
    company: "PICT IEEE",
    duration: "Jun 2023 – Present",
    description:
      "Developed event websites and mentored students in full-stack development and problem-solving.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-24">
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-semibold tracking-tight mb-12"
      >
        Experience
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-2xl border border-gray-800 bg-[#111827]/40 hover:border-blue-500 hover:scale-[1.02] transition duration-300"
          >
            <h3 className="text-lg font-semibold">
              {exp.role}
            </h3>

            <p className="text-sm text-gray-400 mt-1">
              {exp.company} • {exp.duration}
            </p>

            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}