"use client";

import { motion, useInView } from "framer-motion";
import { Scissors, Shirt, Ruler, PersonStanding, ReceiptText } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRef } from "react";


export default function Services() {
  const t = useTranslations("services");
  const services = [
    {
      icon: <Scissors className="w-10 h-10 text-indigo-600" />,
      title: t("customTailoring.title"),
      description: t("customTailoring.description"),
    },
    {
      icon: <ReceiptText className="w-10 h-10 text-indigo-600" />,
      title: t("bespokeSuits.title"),
      description: t("bespokeSuits.description"),
    },
    {
      icon: <PersonStanding className="w-10 h-10 text-indigo-600" />,
      title: t("designerClothes.title"),
      description: t("designerClothes.description"),
    },
    {
      icon: <Shirt className="w-10 h-10 text-indigo-600" />,
      title: t("alterations.title"),
      description: t("alterations.description"),
    },
    {
      icon: <Ruler className="w-10 h-10 text-indigo-600" />,
      title: t("designConsultation.title"),
      description: t("designConsultation.description"),
    },
  ];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView && { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6 border-l-4 border-blue-600 pl-4 uppercase"
        >
          {t("title")}
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mb-12 font-semibold">
          {t("content")}
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
