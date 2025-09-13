"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { InputWithLabel } from "./Input/Input";

const formSchema = z.object({
  name: z.string().min(0, {}),
  email: z.string().min(0, {}),
  phone: z.string().min(0, {}),
  message: z.string().min(0, {}),
  password: z.string().min(0, {}),
  confirmPassword: z.string().min(0, {}),
  socialLogin: z.boolean().optional(),
  forgetPassword: z.boolean().optional()
});

interface ProfileFormProps {
  emailField: boolean;
  nameField: boolean;
  phoneField: boolean;
  messageField: boolean;
  passwordField: boolean;
  confirmPasswordField: boolean;
  className: string;
  socialLogin?: boolean;
  forgetPassword?: boolean;
  submitButton: string;
}

export function ProfileForm({
  emailField,
  nameField,
  phoneField,
  messageField,
  passwordField,
  confirmPasswordField,
  className,
  socialLogin,
  forgetPassword,
  submitButton,
}: ProfileFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      password: "",
      confirmPassword: "",
      forgetPassword: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-2 p-5 rounded-2xl ${className}`}>
        {nameField && (
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputWithLabel name={true} field={field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        {emailField && (
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputWithLabel emailOrPhone={true} field={field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        {phoneField && (
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputWithLabel phone={true} field={field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        {messageField && (
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputWithLabel message={true} field={field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        {passwordField && (
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputWithLabel password={true} field={field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        {forgetPassword && (
          <FormField
            control={form.control}
            name="forgetPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputWithLabel forgetPassword={true} field={field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        {confirmPasswordField && (
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputWithLabel confirmPassword={true} field={field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <Button className="w-full rounded-xl mt-4" type="submit">
          {submitButton}
        </Button>
        {socialLogin && (
          <FormField
            control={form.control}
            name="socialLogin"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputWithLabel socialLogin={true} field={field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
      </form>
    </Form>
  );
}
