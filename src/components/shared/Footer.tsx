"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="bg-gray-900 dark:bg-gray-100 border-t border-gray-300 dark:border-gray-700 mt-20 h-[300px] hidden lg:block">
      <div className="max-w-[1500px] mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Left side - Copyright */}
        <p className="text-sm text-gray-200 dark:text-gray-400">© {new Date().getFullYear()} {t("leftSide")}</p>
        {/* left Middle - Logo */}
        <div>
          <Link href="/" className="text-2xl font-extrabold text-gray-200 tracking-tight uppercase">
            ✂️ Jahir Tailor
          </Link>
        </div>

        {/* middle - services */}
        <div className="flex flex-col space-y-2 text-gray-200 font-semibold">
          <div>
            <h3>{t("services.content1")}</h3>
          </div>
          <div>
            <h3>{t("services.content2")}</h3>
          </div>
          <div>
            <h3>{t("services.content3")}</h3>
          </div>
          <div>
            <h3>{t("services.content4")}</h3>
          </div>
          <div>
            <h3>{t("services.content5")}</h3>
          </div>
        </div>

        {/* right Middle - Links */}
        <div className="flex flex-col space-y-2">
          <div>
            <Link href="#home" className="text-sm text-gray-200 tracking-tight uppercase hover:underline">
              {t("links.home")}
            </Link>
          </div>
          <div>
            <Link href="#about" className="text-sm text-gray-200 tracking-tight uppercase hover:underline">
              {t("links.about")}
            </Link>
          </div>
          <div>
            <Link href="#process" className="text-sm text-gray-200 tracking-tight uppercase hover:underline">
              {t("links.process")}
            </Link>
          </div>
          <div>
            <Link href="#services" className="text-sm text-gray-200 tracking-tight uppercase hover:underline">
              {t("links.services")}
            </Link>
          </div>
          <div>
            <Link href="#gallery" className="text-sm text-gray-200 tracking-tight uppercase hover:underline">
              {t("links.gallery")}
            </Link>
          </div>
          <div>
            <Link href="#blogs" className="text-sm text-gray-200 tracking-tight uppercase hover:underline">
              {t("links.blogs")}
            </Link>
          </div>
          <div>
            <Link href="#contact" className="text-sm text-gray-200 tracking-tight uppercase hover:underline">
              {t("links.contact")}
            </Link>
          </div>
        </div>

        {/* Right side - Socials */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="https://github.com/jahir-tailor"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-gray-200 hover:text-gray-900 hover:bg-gray-100 rounded-full p-2 dark:text-gray-400 dark:hover:text-white transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/jahir-tailor"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-gray-200 hover:text-blue-700 hover:bg-gray-100 rounded-full p-2 dark:text-gray-400 dark:hover:text-blue-400 transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://twitter.com/jahir-tailor"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-gray-200 hover:text-sky-500 hover:bg-gray-100 rounded-full p-2 dark:text-gray-400 dark:hover:text-sky-400 transition"
          >
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
