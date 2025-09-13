// components/ProcessSection.tsx

"use client";

import { Clock, Ruler, Scissors, PackageCheck } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ProcessSection() {
  const t = useTranslations("process");
  const steps = [
    {
      icon: <Clock className="w-8 h-8 text-indigo-600" />,
      title: t("appointment.title"),
      description: t("appointment.description"),
    },
    {
      icon: <Ruler className="w-8 h-8 text-indigo-600" />,
      title: t("measure.title"),
      description: t("measure.description"),
    },
    {
      icon: <Scissors className="w-8 h-8 text-indigo-600" />,
      title: t("begin.title"),
      description: t("begin.description"),
    },
    {
      icon: <PackageCheck className="w-8 h-8 text-indigo-600" />,
      title: t("delivery.title"),
      description: t("delivery.description"),
    },
  ];
  return (
    <section className="bg-white py-16 px-6 md:px-12" id="process">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6 uppercase border-l-4 border-blue-600 pl-4">{t("title")}</h2>
          <p className="text-gray-600 mb-12 max-w-2xl font-semibold">{t("content")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
              <div className="bg-indigo-100 p-4 rounded-full">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
