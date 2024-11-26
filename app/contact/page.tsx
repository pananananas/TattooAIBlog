"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "sonner";
import * as z from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/app/components/ui/form";
import { usePostHog } from "posthog-js/react";

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(50, { message: "Name must not exceed 50 characters" }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .min(5, { message: "Email must be at least 5 characters" })
    .max(100, { message: "Email must not exceed 100 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const posthog = usePostHog();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  if (!GOOGLE_SCRIPT_URL) {
    throw new Error(
      "Google Script URL is not defined in environment variables"
    );
  }

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      posthog.capture(`subscribe_begin`, {
        name: data.name,
        email: data.email,
      });

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Important for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Show success message
      toast("Thank you for subscribing!");

      // Reset the form
      form.reset();
    } catch (error) {
      toast(
        "An error occurred while submitting the form. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-md mx-auto py-8">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Stay Updated
      </h1>

      <div className="mb-6">
        <p className="text-muted-foreground">
          Leave your contact information to receive updates about our blog,
          product launches and features.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="your.email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className="w-full bg-emerald-700 text-gray-200"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Subscribe for Updates"}
          </Button>
        </form>
      </Form>
    </section>
  );
}
