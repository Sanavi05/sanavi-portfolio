"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto px-6 py-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-semibold tracking-tight mb-6"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 leading-relaxed text-lg"
      >
        I’m currently pursuing BE in Computer Engineering at PICT and a BS in Data Science and Applications from IIT Madras as my duel degree. I work at the intersection of AI and full-stack development, building systems that are not just functional, but scalable and impactful.
        <br /><br />
        As an AI Full-Stack Intern at NeuraMach.AI, I’ve been working on technologies like RAG pipelines, vector databases, and intelligent systems. I enjoy designing solutions that combine machine learning with real-world applications.
        <br /><br />
        Beyond development, I’ve led teams, mentored students, and contributed to building tech communities through organizations like Pictoreal and PISB (PICT IEEE Student Branch).
      </motion.p>
    </section>
  );
}