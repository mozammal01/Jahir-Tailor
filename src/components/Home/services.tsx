"use client";

import { motion, useInView } from "framer-motion";
import { Scissors, Shirt, Ruler } from "lucide-react";
import { useRef } from "react";

const services = [
  {
    icon: <Scissors className="w-10 h-10 text-indigo-600" />,
    title: "Custom Tailoring",
    description: "Perfectly fitted suits, dresses, and traditional wear tailored just for you.",
  },
  {
    icon: <Shirt className="w-10 h-10 text-indigo-600" />,
    title: "Alterations",
    description: "From resizing to restyling, we make sure your clothes fit comfortably.",
  },
  {
    icon: <Ruler className="w-10 h-10 text-indigo-600" />,
    title: "Design Consultation",
    description: "Get expert advice on fabric, style, and design to match your personality.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="max-w-6xl mx-auto px-6 text-center" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView && { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Our Services
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 font-semibold">
          We provide premium tailoring solutions that combine traditional craftsmanship with modern style.
        </p>
        <div className="grid md:grid-cols-3 gap-8" ref={ref}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView && { opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
