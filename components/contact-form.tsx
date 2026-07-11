"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  company: z.string().optional(),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm({
  subjectPlaceholder = "How can we help?",
}: {
  subjectPlaceholder?: string;
}) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSent(true);
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
        <CheckCircle size={40} className="text-[#34a853]" />
        <h3
          className="text-xl font-medium text-[#202124]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Message sent
        </h3>
        <p className="text-sm text-[#5f6368] max-w-xs">
          We'll get back to you within one business day.
        </p>
      </div>
    );
  }

  const field =
    "w-full bg-white border border-[#dadce0] rounded-lg px-4 py-3 text-sm text-[#202124] placeholder:text-[#80868b] focus:outline-none focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8]/30 transition-all";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            {...register("name")}
            placeholder="Your name"
            className={field}
          />
          {errors.name && (
            <p className="text-xs text-[#d93025] mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <input
            {...register("email")}
            placeholder="Email address"
            type="email"
            className={field}
          />
          {errors.email && (
            <p className="text-xs text-[#d93025] mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div>
        <input
          {...register("company")}
          placeholder="Company (optional)"
          className={field}
        />
      </div>
      <div>
        <input
          {...register("subject")}
          placeholder={subjectPlaceholder}
          className={field}
        />
        {errors.subject && (
          <p className="text-xs text-[#d93025] mt-1">{errors.subject.message}</p>
        )}
      </div>
      <div>
        <textarea
          {...register("message")}
          placeholder="Tell us about your project or question..."
          rows={5}
          className={`${field} resize-none`}
        />
        {errors.message && (
          <p className="text-xs text-[#d93025] mt-1">{errors.message.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="btn-pill btn-primary px-6 py-3 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : "Send message"}
        <Send size={15} />
      </button>
    </form>
  );
}
