"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import aboutImage from "../../../public/about/about.jpg";
import { useTranslations } from "next-intl";

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const t = useTranslations("about");
  const paragraphs = [
    `${t("p.fisrtP")}`,
    `${t("p.secondP")}`,
    `${t("p.thirdP")}`,
    `${t("p.fourthP")}`,
  ];

  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 py-24 text-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView && { opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <div ref={ref} className="space-y-6">
            <h2 className="text-4xl font-extrabold tracking-tight border-l-4 border-blue-600 pl-4 uppercase">{t("title")}</h2>

            {paragraphs.map((text, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={isInView && { opacity: 1, y: 0 }} transition={{delay: i * 0.2, duration: 0.6 }}>
                <p key={i} ref={ref} className="text-lg leading-8 text-muted-foreground">
                  {text}
                </p>
              </motion.div>
            ))}

            <div ref={ref} className="flex items-center gap-2 pt-6 text-blue-600 italic font-semibold text-xl">
              <BadgeCheck className="w-6 h-6" />
              <span>{t("endContent")}</span>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView && { opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <div ref={ref} className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
            <Image src={aboutImage} alt="Tailor at work" fill className="object-cover" priority />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
