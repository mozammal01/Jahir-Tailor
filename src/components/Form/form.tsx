"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { InputWithLabel } from "./Input/Input";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({}),
  phone: z.string().min(10, {}),
  message: z.string().min(5, {}),
  password: z.string().min(8, {}),
  confirmPassword: z.string().min(8, {}),
});

interface ProfileFormProps {
  description: string;
  emailField: boolean;
  nameField: boolean;
  phoneField: boolean;
  messageField: boolean;
  passwordField: boolean;
  confirmPasswordField: boolean;
}

export function ProfileForm({
  description,
  emailField,
  nameField,
  phoneField,
  messageField,
  passwordField,
  confirmPasswordField,
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
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 bg-slate-50 p-10 w-[400px] lg:w-[600px] rounded-2xl">
        {nameField && (
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputWithLabel name={true} />
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
                  <InputWithLabel email={true} />
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
                  <InputWithLabel phone={true} />
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
                  <InputWithLabel message={true} />
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
                  <InputWithLabel password={true} />
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
                  <InputWithLabel confirmPassword={true} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <Button className="my-4" type="submit">Submit</Button>
      </form>
    </Form>
  );
}
