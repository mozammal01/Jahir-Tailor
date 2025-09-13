import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";

interface InputWithLabelProps {
  email?: boolean;
  name?: boolean;
  phone?: boolean;
  message?: boolean;
  password?: boolean;
  confirmPassword?: boolean;
}

export function InputWithLabel({ email, name, phone, message, password, confirmPassword }: InputWithLabelProps) {
  const t = useTranslations("contact");
  return (
    <>
      {name && (
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="name">{t("form.nameInput.label")}</Label>
          <Input className="" type="name" id="name" placeholder={t("form.nameInput.placeholder")} />
        </div>
      )}
      {email && (
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="email">{t("form.emailInput.label")}</Label>
          <Input className="" type="email" id="email" placeholder={t("form.emailInput.placeholder")} />
        </div>
      )}
      {phone && (
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="phone">{t("form.phoneInput.label")}</Label>
          <Input className="" type="phone" id="phone" placeholder={t("form.phoneInput.placeholder")} />
        </div>
      )}
      {message && (
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="message">{t("form.messageInput.label")}</Label>
          <Input className="pt-5 pb-30" type="message" id="message" placeholder={t("form.messageInput.placeholder")} />
        </div>
      )}
      {password && (
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="password">{t("form.passwordInput.label")}</Label>
          <Input className="" type="password" id="password" placeholder={t("form.passwordInput.placeholder")} />
        </div>
      )}
      {confirmPassword && (
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="confirmPassword">{t("form.confirmPasswordInput.label")}</Label>
          <Input className="" type="confirmPassword" id="confirmPassword" placeholder={t("form.confirmPasswordInput.placeholder")} />
        </div>
      )}
    </>
  );
}
