"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import menSuit1 from "../../../public/gallery/men-suit-1.jpg";
import menSuit2 from "../../../public/gallery/men-suit-2.jpg";
import menSuit3 from "../../../public/gallery/men-suit-3.jpg";
import menSuit4 from "../../../public/gallery/men-suit-4.jpg";
import menSuit5 from "../../../public/gallery/men-suit-5.jpg";
import womenSuit1 from "../../../public/gallery/women-suit-1.jpg";
import womenSuit2 from "../../../public/gallery/women-suit-2.jpg";
import saree from "../../../public/gallery/saree.jpg";
import maleKids from "../../../public/gallery/male-kids.jpg";
import femaleKids from "../../../public/gallery/female-kids.jpg";

import { StaticImageData } from "next/image";
import Image from "next/image";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface GalleryItem {
  imageUrl: StaticImageData;
  title: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    imageUrl: menSuit1,
    title: "Sunset Over Mountains",
    description: "A beautiful sunset captured in the Alps.",
  },
  {
    imageUrl: menSuit2,
    title: "City at Night",
    description: "Skyline of New York City during the night.",
  },
  {
    imageUrl: menSuit3,
    title: "Forest Path",
    description: "A peaceful trail through a dense forest.",
  },
  {
    imageUrl: menSuit4,
    title: "Ocean Horizon",
    description: "Endless blue waves meeting the sky.",
  },
  {
    imageUrl: menSuit5,
    title: "Ocean Horizon",
    description: "Endless blue waves meeting the sky.",
  },
  {
    imageUrl: womenSuit1,
    title: "Ocean Horizon",
    description: "Endless blue waves meeting the sky.",
  },

  {
    imageUrl: womenSuit2,
    title: "Ocean Horizon",
    description: "Endless blue waves meeting the sky.",
  },

  {
    imageUrl: saree,
    title: "Ocean Horizon",
    description: "Endless blue waves meeting the sky.",
  },

  {
    imageUrl: maleKids,
    title: "Ocean Horizon",
    description: "Endless blue waves meeting the sky.",
  },

  {
    imageUrl: femaleKids,
    title: "Ocean Horizon",
    description: "Endless blue waves meeting the sky.",
  },
];

export default function GallerySlider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="py-16 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000, // 3 seconds
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {galleryItems.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView && { opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                <div className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-300 "
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 hover:opacity-80 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white p-4 text-center">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm mt-2">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
