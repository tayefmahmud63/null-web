import { ArrowRightIcon } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-20 flex items-center justify-center">
      <div className="w-full max-w-3xl">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-white/70">
            Have an idea or project in mind? Let’s talk and bring it to life.
          </p>
        </div>

        {/* Glass Form */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl">

          <form className="space-y-6">

            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                         text-white placeholder:text-white/60 outline-none 
                         focus:border-primary"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                         text-white placeholder:text-white/60 outline-none 
                         focus:border-primary"
            />

            {/* Message */}
            <textarea
              rows="5"
              placeholder="Tell us about your project..."
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                         text-white placeholder:text-white/60 outline-none 
                         focus:border-primary resize-none"
            />

            {/* Button */}
            <button className="btn rounded-lg flex items-center justify-center gap-2 px-6 py-3 w-full">
              Send Message
              <ArrowRightIcon className="size-4" />
            </button>

          </form>

        </div>

        {/* Extra Info */}
        <p className="text-center text-white/60 mt-6 text-sm">
          Or email us directly at{" "}
          <a
            href="mailto:contact@nullabz.com"
            className="underline hover:text-white"
          >
            contact@nullabz.com
          </a>
        </p>

      </div>
    </main>
  );
}