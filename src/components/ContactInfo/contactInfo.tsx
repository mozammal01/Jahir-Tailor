"use client";

import React from "react";
import { MapPin, Phone, Mail, Linkedin, Github, Twitter, Facebook } from "lucide-react";
import { useTranslations } from "next-intl";

const ContactInfo: React.FC = () => {
  const t = useTranslations("contact");
  return (
    <aside className="w-full min-w-96 p-6 border-l border-gray-300 dark:border-gray-700 space-y-4 font-semibold">
      <h3 className="text-xl font-bold uppercase border-l-4 border-blue-600 pl-4">{t("title")}</h3>

      {/* Location */}
      <div className="flex items-start gap-3">
        <MapPin className="text-gray-500 mt-1" size={20} />
        <p>{t("contactInfo.location")}</p>
      </div>

      {/* Phone */}
      <div className="flex items-start gap-3">
        <Phone className="text-gray-500 mt-1" size={20} />
        <p>{t("contactInfo.phone")}</p>
      </div>

      {/* Email */}
      <div className="flex items-start gap-3">
        <Mail className="text-gray-500 mt-1" size={20} />
        <a href="mailto:yourname@example.com" className="text-blue-600 hover:underline">
          jahir@example.com
        </a>
      </div>

      {/* Socials */}
      <div>
        <h4 className="text-lg font-bold mt-8 mb-5 uppercase border-l-4 border-blue-600 pl-4">Socials</h4>
        <ul className="space-y-3">
          <li className="flex items-center gap-3">
            <Linkedin size={20} className="text-blue-600" />
            <a href="https://linkedin.com/in/jahir-tailor" target="_blank" rel="noopener noreferrer" className="hover:underline">
              linkedin.com/in/jahir-tailor
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Github size={20} className="text-gray-800 dark:text-white" />
            <a href="https://github.com/jahir-tailor" target="_blank" rel="noopener noreferrer" className="hover:underline">
              github.com/jahir-tailor
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Twitter size={20} className="text-sky-500" />
            <a href="https://twitter.com/jahir-tailor" target="_blank" rel="noopener noreferrer" className="hover:underline">
              twitter.com/jahir-tailor
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Facebook size={20} className="text-sky-500" />
            <a href="https://twitter.com/jahir-tailor" target="_blank" rel="noopener noreferrer" className="hover:underline">
              facebook.com/jahir-tailor
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default ContactInfo;
