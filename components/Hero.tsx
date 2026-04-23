"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6">
  <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">

    {/* LEFT CONTENT */}
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold"
      >
        Sanavi Shridhar Kulkarni
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-lg text-gray-400"
      >
        Building AI-driven systems and scalable full-stack applications.
      </motion.p>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 flex gap-5 text-gray-400 text-4xl"
      >
        <a
          href="https://github.com/Sanavi05"
          target="_blank"
          className="hover:text-white transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/sanavikulkarni"
          target="_blank"
          className="hover:text-white transition"
        >
          <FaLinkedin />
        </a>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-8 flex gap-4"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-500 hover:scale-[1.03] transition duration-200"
        >
          View Work
        </a>

        <a
          href="#contact"
          className="px-6 py-3 border border-gray-500 rounded-xl hover:border-blue-400 hover:scale-[1.03] transition duration-200"
        >
          Contact Me
        </a>
      </motion.div>
    </div>

    {/* RIGHT IMAGE */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center"
    >
      <div className="relative w-56 h-56 md:w-72 md:h-72">
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl"></div>

        <div className="relative w-64 h-64 md:w-80 md:h-80 p-2 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20">
  
  <div className="relative w-full h-full rounded-full overflow-hidden">
    <Image
      src="/profile.png"
      alt="Sanavi"
      fill
      className="object-cover object-top"
    />
  </div>

</div>
      </div>
    </motion.div>

  </div>
</section>
  );
}