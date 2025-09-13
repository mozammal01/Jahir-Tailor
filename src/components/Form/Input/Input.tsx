import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { div } from "framer-motion/client";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

interface InputWithLabelProps {
  emailOrPhone?: boolean;
  name?: boolean;
  phone?: boolean;
  message?: boolean;
  password?: boolean;
  confirmPassword?: boolean;
  field?: any;
  socialLogin?: boolean;
}

export function InputWithLabel({ emailOrPhone, name, phone, message, password, confirmPassword, field, socialLogin }: InputWithLabelProps) {
  const t = useTranslations("contact");
  const tSocialLogin = useTranslations("socialLogin");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      {name && (
        <div className="grid w-full items-center gap-3">
          <label htmlFor="name" className="block text-sm font-bold text-gray-700">
            {t("form.nameInput.label")}
          </label>
          <Input className="" type="name" id="name" placeholder={t("form.nameInput.placeholder")} {...field} />
        </div>
      )}
      {emailOrPhone && (
        <>
          <div>
            <label htmlFor="emailOrPhone" className="block text-sm font-bold text-gray-700">
              {t("form.emailOrPhoneInput.label")}
            </label>
            <div className="mt-1 relative">
              <Mail className="absolute left-3 top-2.5 text-gray-400" size={20} />
              <Input
                type="text"
                id="emailOrPhone"
                name="emailOrPhone"
                required
                {...field}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder={t("form.emailOrPhoneInput.placeholder")}
              />
            </div>
          </div>
        </>
      )}
      {phone && (
        <div className="grid w-full items-center gap-3">
            <label htmlFor="phone" className="block text-sm font-bold text-gray-700">
              {t("form.phoneInput.label")}
            </label>
          <Input className="" type="phone" id="phone" placeholder={t("form.phoneInput.placeholder")} {...field} />
        </div>
      )}
      {message && (
        <div className="grid w-full items-center gap-3">
          <label htmlFor="message" className="block text-sm font-bold text-gray-700">
            {t("form.messageInput.label")}
          </label>
          <Input className="pt-5 pb-30" type="message" id="message" placeholder={t("form.messageInput.placeholder")} {...field} />
        </div>
      )}

      {password && (
        <>
          <label htmlFor="password" className="block text-sm font-bold text-gray-700">
            {t("form.passwordInput.label")}
          </label>
          <div className="mt-1 relative">
            <Lock className="absolute left-3 top-2.5 text-gray-400" size={20} />
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              required
              {...field}
              className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="••••••••"
            />
            <button type="button" className="absolute right-3 top-2.5 text-gray-500" onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <div className="grid w-full items-center gap-3"></div>
        </>
      )}
      {confirmPassword && (
        <div className="grid w-full items-center gap-3">
          <label htmlFor="confirmPassword" className="block text-sm font-bold text-gray-700">
            {t("form.confirmPasswordInput.label")}
          </label>
          <Input
            className=""
            type="confirmPassword"
            id="confirmPassword"
            placeholder={t("form.confirmPasswordInput.placeholder")}
            {...field}
          />
        </div>
      )}
      {
        socialLogin && (
          <div className="grid w-full items-center gap-3 mt-4">
            <Button variant="outline" className="w-full">
            <FcGoogle />
            {tSocialLogin("label")}
            </Button>
          </div>
        )
      }
    </>
  );
}
