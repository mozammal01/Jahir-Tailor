"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm fixed w-full z-50" ref={ref}>
      <motion.div initial={{ opacity: 0, y: -30 }} animate={isInView && { opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Left: Logo */}
          <Link href="#home" className="text-2xl font-extrabold text-gray-900 tracking-tight uppercase">
            ✂️ Jahir Tailor
          </Link>

          {/* Middle: Links (Desktop) */}
          <div className="hidden md:flex space-x-10 text-gray-700 font-medium">
            <Link href="#home" className="hover:text-blue-600 transition">
              Home
            </Link>
            <Link href="#about" className="hover:text-blue-600 transition">
              About
            </Link>
            <Link href="#services" className="hover:text-blue-600 transition">
              Services
            </Link>
            <Link href="#gallery" className="hover:text-blue-600 transition">
              Gallery
            </Link>
            <Link href="#blogs" className="hover:text-blue-600 transition">
              Blogs
            </Link>
            <Link href="#contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </div>

          {/* Right: CTA */}
          <div className="hidden md:flex">
            <Link href="#book" className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 text-gray-700 font-medium">
          <Link href="#home" className="block hover:text-blue-600">
            Home
          </Link>
          <Link href="#about" className="block hover:text-blue-600">
            About
          </Link>
          <Link href="#services" className="block hover:text-blue-600">
            Services
          </Link>
          <Link href="#gallery" className="block hover:text-blue-600">
            Gallery
          </Link>
          <Link href="#blogs" className="block hover:text-blue-600">
            Blogs
          </Link>
          <Link href="#contact" className="block hover:text-blue-600">
            Contact
          </Link>
          <Link
            href="#book"
            className="block w-full text-center px-4 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
