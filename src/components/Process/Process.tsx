// components/ProcessSection.tsx

"use client";

import { Clock, Ruler, Scissors, PackageCheck } from "lucide-react";

const steps = [
  {
    icon: <Clock className="w-8 h-8 text-indigo-600" />,
    title: "Book Appointment",
    description: "Choose a convenient time to meet with our tailor online or in-store.",
  },
  {
    icon: <Ruler className="w-8 h-8 text-indigo-600" />,
    title: "Get Measured",
    description: "We take precise measurements to ensure the perfect fit tailored to your body.",
  },
  {
    icon: <Scissors className="w-8 h-8 text-indigo-600" />,
    title: "Tailoring Begins",
    description: "Our expert tailors craft your garment with attention to detail and quality.",
  },
  {
    icon: <PackageCheck className="w-8 h-8 text-indigo-600" />,
    title: "Delivery or Pickup",
    description: "Receive your finished garment on time, either delivered or ready for pickup.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12" id="process">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 uppercase border-l-4 border-blue-600 pl-4">Process</h2>
        <p className="text-gray-600 mb-12 max-w-2xl font-semibold">
          We follow a simple and effective four-step process to deliver perfectly tailored garments.
        </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
              <div className="bg-indigo-100 p-4 rounded-full">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
