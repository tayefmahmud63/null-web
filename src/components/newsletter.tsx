"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function Newsletter() {
  const words = [
    {
      text: "Join",
    },
    {
      text: "Our",
    },
    {
      text: "Newsletter",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="section flex flex-col items-center justify-center px-4">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base max-w-xl text-center">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth
        words={words}
        className="w-[85%] mx-auto md:w-auto justify-center"
        textClassName="text-2xl sm:text-3xl md:text-4xl"
      />
      <div className="flex w-full max-w-md flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-4 justify-center md:justify-center mx-auto">
        <button className="w-full md:w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-full md:w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
          Signup
        </button>
      </div>
    </div>
  );
}
