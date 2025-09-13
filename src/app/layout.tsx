import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {NextIntlClientProvider} from 'next-intl';
import { getLocale } from "next-intl/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JAHIR TAILOR",
  description: "Presenting a new tailoring website",
  icons: {
    icon: "/favicon.ico",
  },
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({children}: Props) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
