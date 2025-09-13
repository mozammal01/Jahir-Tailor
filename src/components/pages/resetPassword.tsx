import { ProfileForm } from "../Form/form";
import { useTranslations } from "next-intl";

export default function ResetPassword() {
  const t = useTranslations("resetPassword");
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="flex flex-col space-y-5 h-[400px] justify-center items-center max-w-[400] mx-auto bg-slate-50 rounded-xl px-5">
        <h1 className="text-2xl font-bold text-gray-800 text-center uppercase">{t("title")}</h1>
        <ProfileForm
          emailField={false}
          nameField={false}
          phoneField={false}
          messageField={false}
          passwordField={true}
          confirmPasswordField={true}
          className="w-full"
          socialLogin={false}
          forgetPassword={false}
          submitButton={t("sendButton")}
        />
      </div>
    </div>
  );
}
