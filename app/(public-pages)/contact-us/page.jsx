import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Null Labz. Have an idea or project in mind? We help turn ideas into functional, deployable IoT and embedded systems products.",
  openGraph: {
    title: "Contact Us | Null Labz",
    description:
      "Get in touch with Null Labz. Have an idea or project in mind? Let's talk and bring it to life.",
    url: "https://nullabz.com/contact-us",
  },
  alternates: {
    canonical: "https://nullabz.com/contact-us",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-20 flex items-center justify-center">
      <div className="w-full max-w-3xl">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-white/70">
            Have an idea or project in mind? Let's talk and bring it to life.
          </p>
        </div>

        {/* Glass Form */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl">
          <ContactForm />
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