"use client"
import Link from "next/link";
import Image from "next/image";
import bannerImage from "../../../public/banner/banner.jpg";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <section id="home" className="relative w-full h-full flex items-center justify-center bg-gray-900 text-white">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image src={bannerImage} alt="Tailoring background" className="w-full h-full" />
          <div className="absolute inset-0 bg-black/60" /> {/* Dark Overlay */}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl text-center px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Elevate Your Style with <span className="text-blue-400">Jahir Tailor</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-200">
              Custom suits, alterations, and bridal wear — crafted with precision to fit your lifestyle.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              {/* <Link href="#book" className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition">
              Book Appointment
              </Link> */}
              <Button>
                <Link href="#contact">Book Appointment</Link>
              </Button>
              <Button variant="outline">
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
