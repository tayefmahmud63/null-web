"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowRightIcon } from "lucide-react";

const EMAILJS_SERVICE_ID  = "service_4gunwfa";
const EMAILJS_TEMPLATE_ID = "template_p2c47kr";
const EMAILJS_PUBLIC_KEY  = "6f_i7GjBZTngzXHeE";

export default function ContactForm() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

      {/* Name */}
      <input
        type="text"
        name="from_name"
        placeholder="Your Name"
        required
        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                   text-white placeholder:text-white/60 outline-none 
                   focus:border-primary"
      />

      {/* Email */}
      <input
        type="email"
        name="from_email"
        placeholder="Your Email"
        required
        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                   text-white placeholder:text-white/60 outline-none 
                   focus:border-primary"
      />

      {/* Message */}
      <textarea
        rows="5"
        name="message"
        placeholder="Tell us about your project..."
        required
        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                   text-white placeholder:text-white/60 outline-none 
                   focus:border-primary resize-none"
      />

      {/* Feedback */}
      {status === "success" && (
        <p className="text-green-400 text-sm text-center">
          ✅ Message sent! We'll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm text-center">
          ❌ Something went wrong. Please try again or email us directly.
        </p>
      )}

      {/* Button */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn rounded-lg flex items-center justify-center gap-2 px-6 py-3 w-full
                   disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
        <ArrowRightIcon className="size-4" />
      </button>

    </form>
  );
}