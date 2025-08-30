"use client";
import { motion } from "framer-motion";

const slides = [
  { title: "Divine Biscuits", tagline: "Taste of devotion", img: "/images/biscuits.jpg" },
  { title: "Sacred Nimki", tagline: "Crunch with purity", img: "/images/nimki.jpg" },
];

export default function HeroSlider() {
  return (
    <div className="relative h-[70vh] overflow-hidden">
      {slides.map((slide, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.img})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 2, duration: 1 }}
        >
          <div className="bg-black bg-opacity-40 h-full flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
            <p className="text-xl">{slide.tagline}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
