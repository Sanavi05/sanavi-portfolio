"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const featuredProject = {
  title: "EcoPass",
  description:
    "A digital product passport system focused on sustainability. Built a recommendation engine analyzing CO2, water, and energy metrics to guide eco-friendly decisions. Designed as a scalable system with real-world impact.",
  tech: ["React", "FastAPI", "MongoDB"],
  github: "https://github.com/madhura0805/Product-Passport",
  demo: "https://drive.google.com/file/d/1fBqB78X4ldZXhqo3gukBRmoMb9Ts3nPm/view?usp=sharing",
};

const secondFeaturedProject = {
  title: "Unified Student Engagement Platform",
  description:
    "An AI-first ecosystem designed to guide students through the entire higher education journey—from discovery to financing. Built using LLM-driven personalization, automation pipelines, and intelligent engagement systems.",
  tech: ["AI", "LLMs", "Full Stack"],
  github: "https://github.com/Sanavi05/unified-student-engagement-ecosystem",
  demo: "https://drive.google.com/file/d/1Gi6pLT64XHebvM6jaNCzpncLLyvZM-u0/view?usp=sharing",
};

const projects = [
  {
    title: "Harvesting Intelligence",
    description:
      "AI-powered farming assistant using CNNs for crop disease detection and planning systems like crop rotation.",
    tech: ["ML", "Node.js", "PostgreSQL"],
    github: "https://github.com/SiddharthKumbharkar/Harvesting-Intelligence",
  },
  {
    title: "Placement Portal Application",
    description:
      "Role-based placement system with filtering, scheduling, and background processing using Celery and Redis.",
    tech: ["Flask", "Redis", "Celery"],
    github: "https://github.com/23f2002583/placement-portal-application",
  },
  {
    title: "Canteen Hub",
    description:
      "Pre-ordering system with coupon generation and admin verification to reduce canteen rush.",
    tech: ["MERN Stack", "JWT"],
    github: "https://github.com/Sanavi05/digital-canteen-coupon-system",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-semibold tracking-tight mb-16"
      >
        Projects
      </motion.h2>

      {/* Featured Project */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-16 p-8 rounded-3xl border border-blue-500/20 bg-gradient-to-br from-[#111827] to-[#0a0f1c] hover:border-blue-500 hover:scale-[1.02] transition duration-300"
      >
        <h3 className="text-2xl font-semibold">
          {featuredProject.title}
        </h3>

        <p className="mt-4 text-gray-400 max-w-2xl">
          {featuredProject.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {featuredProject.tech.map((t, i) => (
            <span
              key={i}
              className="text-sm px-3 py-1 bg-gray-800 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <a
            href={featuredProject.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
          >
            <FaGithub /> Code
          </a>

          <a
            href={featuredProject.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg hover:border-blue-400 transition"
          >
            <FaExternalLinkAlt /> Live
          </a>
        </div>
      </motion.div>

      {/* � Second Featured Project */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-16 p-8 rounded-3xl border border-purple-500/20 bg-gradient-to-br from-[#111827] to-[#0a0f1c] hover:border-purple-400 hover:scale-[1.02] transition duration-300"
      >
        <h3 className="text-2xl font-semibold">
          {secondFeaturedProject.title}
        </h3>

        <p className="mt-4 text-gray-400 max-w-2xl">
          {secondFeaturedProject.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {secondFeaturedProject.tech.map((t, i) => (
            <span
              key={i}
              className="text-sm px-3 py-1 bg-gray-800 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <a
            href={secondFeaturedProject.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
          >
            <FaGithub /> Code
          </a>

          <a
            href={secondFeaturedProject.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg hover:border-purple-400 transition"
          >
            <FaExternalLinkAlt /> Live
          </a>
        </div>
      </motion.div>

      {/* �🔹 Other Projects */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-2xl border border-gray-800 bg-[#111827]/40 backdrop-blur-md hover:scale-[1.02] hover:border-blue-500 transition duration-300"
          >
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaGithub size={20} />
              </a>
            </div>

            <p className="mt-3 text-gray-400">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-sm px-3 py-1 bg-gray-800 rounded-full text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}