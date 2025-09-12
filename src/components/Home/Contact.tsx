"use client";
import { useRef } from "react";
import { ProfileForm } from "../Form/form";
import ContactInfo from "../ContactInfo/contactInfo";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="max-w-7xl mx-auto" id="contact">
      <div className="mt-10 px-4">
        <h1 className="text-4xl font-extrabold tracking-tight border-l-4 border-blue-600 pl-4 uppercase">Contact Us</h1>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView && { opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="md:flex gap-4 px-6 py-12 w-full justify-center items-center"
        ref={ref}
      >
        <div className="w-2/3 flex justify-center">
          <div className="md:min-w-96 w-full my-6">
            <div className="flex flex-col gap-4 ">
              <ProfileForm
                description=""
                emailField={true}
                nameField={true}
                phoneField={true}
                messageField={true}
                passwordField={false}
                confirmPasswordField={false}
              />
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView && { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-1/2 my-8"
          ref={ref}
        >
          <ContactInfo />
        </motion.div>
      </motion.div>
    </div>
  );
}
