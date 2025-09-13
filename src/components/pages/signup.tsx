"use client"; // Only if using App Router

import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import Link from "next/link";

import signupImage from "../../../public/signinCover/signinCover.jpg";
import { ProfileForm } from "../Form/form";
import { useTranslations } from "next-intl";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const t = useTranslations("signup");
  return (
    <div className="flex min-h-screen">
      {/* Left side - background image + text */}
      <div
        className="w-1/2 hidden lg:flex flex-col justify-center items-center bg-cover bg-center text-white p-12"
        style={{
          backgroundImage: `url(${signupImage.src})`,
        }}
      >
        <div className="bg-black/80 p-8 rounded-xl text-center max-w-md">
          <h1 className="text-3xl font-bold mb-4">{t("content.title")}</h1>
          <p className="text-lg text-gray-200">{t("content.description")}</p>
        </div>
      </div>

      {/* Right side - sign-in form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-6">
        <div className="max-w-md w-full space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center">{t("form.title")}</h2>
          <p className="text-sm text-center text-gray-600">
            {t("form.content")}{" "}
            <Link href="/signin" className="text-blue-600 hover:underline">
              {t("form.subContent")}
            </Link>
          </p>
          <div className="max-w-md w-full bg-slate-50 p-8 rounded-xl shadow-md">
            <ProfileForm
              className="w-full"
              emailField={true}
              passwordField={true}
              nameField={true}
              phoneField={false}
              confirmPasswordField={true}
              messageField={false}
              socialLogin={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
