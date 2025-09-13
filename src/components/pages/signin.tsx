// 'use client'; // Only if you're using App Router

// import { useState } from 'react';
// import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
// import Link from 'next/link';

// export default function SignInPage() {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
//           Sign in to your account
//         </h2>

//         <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
//           {/* Email Input */}
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email address
//             </label>
//             <div className="mt-1 relative">
//               <Mail className="absolute left-3 top-2.5 text-gray-400" size={20} />
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 required
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 placeholder="you@example.com"
//               />
//             </div>
//           </div>

//           {/* Password Input */}
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <div className="mt-1 relative">
//               <Lock className="absolute left-3 top-2.5 text-gray-400" size={20} />
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 id="password"
//                 name="password"
//                 required
//                 className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 placeholder="••••••••"
//               />
//               <button
//                 type="button"
//                 className="absolute right-3 top-2.5 text-gray-500"
//                 onClick={() => setShowPassword((prev) => !prev)}
//               >
//                 {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//               </button>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-200"
//             >
//               Sign In
//             </button>
//           </div>

//           {/* Extra Options */}
//           <div className="flex justify-between items-center text-sm">
//             <div>
//               <label className="inline-flex items-center">
//                 <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
//                 <span className="ml-2 text-gray-600">Remember me</span>
//               </label>
//             </div>
//             <Link href="#" className="text-blue-600 hover:underline">
//               Forgot password?
//             </Link>
//           </div>
//         </form>

//
//       </div>
//     </div>
//   );
// }

"use client"; // Only if using App Router

import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import Link from "next/link";

import signinImage from "../../../public/signinCover/signinCover.jpg";
import { ProfileForm } from "../Form/form";
import { useTranslations } from "next-intl";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const t = useTranslations("signin");
  return (
    <div className="flex min-h-screen">
      {/* Left side - background image + text */}
      <div
        className="w-1/2 hidden lg:flex flex-col justify-center items-center bg-cover bg-center text-white p-12"
        style={{
          backgroundImage: `url(${signinImage.src})`,
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
          <h2 className="text-3xl font-bold text-gray-800 text-center uppercase">{t("form.title")}</h2>
          <p className="text-sm text-center text-gray-600 font-semibold">
            {t("form.content")}
            <Link href="/signup" className="text-blue-600 hover:underline">
              {t("form.subContent")}
            </Link>
          </p>
          <div className="max-w-md w-full bg-slate-50 p-8 rounded-xl shadow-md">
            <ProfileForm
              className="w-full"
              emailField={true}
              passwordField={true}
              nameField={false}
              phoneField={false}
              confirmPasswordField={false}
              messageField={false}
              socialLogin={true}
              forgetPassword={true}
              submitButton={t("form.sendButton")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
