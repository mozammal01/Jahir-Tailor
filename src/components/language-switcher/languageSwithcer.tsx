"use client";

import { useLocale } from "next-intl";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import usIcon from "../../../public/flag/us.png"
import bdIcon from "../../../public/flag/bd.png"
import Image from "next/image";

const languages = [
  { code: "en", name: "English", country: "🇺🇸", flag: usIcon },
  { code: "bn", name: "বাংলা", country: "🇧🇩", flag: bdIcon },
];

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find((lang) => lang.code === locale);

  const handleLanguageChange = (newLocale: string) => {
    // Set locale in cookie
    document.cookie = `locale=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}`; // 1 year

    // Refresh the page to apply new locale
    router.refresh();
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors bg-transparent shadow-none text-foreground"
        aria-label="Select language"
      >
        <Image src={currentLanguage?.flag?.src || ""} alt="us" width={20} height={20} />
        <span className="text-lg mb-1">{currentLanguage?.country}</span>
        <span className="hidden sm:inline text-sm font-medium text-muted-foreground">{currentLanguage?.name}</span>
        <svg
          className={`w-4 h-4 transition-transform text-muted-foreground ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />

          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-2 w-48 bg-background border border-border rounded-lg shadow-lg z-20">
            {languages.map((language) => (
              <Button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full flex justify-start items-center gap-3 px-4 py-3 bg-transparent shadow-none text-left hover:bg-primary/5 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                  locale === language.code ? "bg-primary/10 text-primary" : "text-foreground"
                }`}
              >
                <Image src={language.flag.src} alt="us" width={20} height={20} />
                <span className="text-lg mb-1">{language.country}</span>
                <span className="font-medium">{language.name}</span>
                {locale === language.code && (
                  <svg className="w-4 h-4 ml-auto text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </Button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
