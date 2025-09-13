import Link from "next/link";
import { ProfileForm } from "../Form/form";

export default function ForgetPassword() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="flex flex-col space-y-10 h-[400px] justify-center items-center max-w-[400] mx-auto bg-slate-50 rounded-xl px-5">
        <h1 className="text-2xl font-bold text-gray-800 text-center">Forget Password</h1>
          <ProfileForm
            emailField={true}
            nameField={false}
            phoneField={false}
            messageField={false}
            passwordField={false}
            confirmPasswordField={false}
            className="w-full"
            socialLogin={false}
            forgetPassword={false}
          />
        <p className="text-sm text-gray-500 text-center font-semibold mt-[-20px]">Remember your password? <Link href="/signin" className="text-blue-600 hover:underline">Sign in</Link></p>
      </div>
    </div>
  );
}
