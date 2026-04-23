'use client';
import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function CallToAction() {
    return (
        <motion.div className="flex flex-col max-w-5xl mt-40 px-4 mx-auto items-center justify-center text-center py-16 rounded-xl glass"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        >

                                <button className="btn glass py-1 px-3 text-xs">
                       Stay in the Loop
                    </button>
            <motion.h2 className="text-2xl md:text-4xl font-medium mt-2"
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                Join Our Newsletter
            </motion.h2>
            <motion.p className="mt-4 text-sm/7 max-w-md"
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 70, mass: 1 }}
            >
                Get weekly newsletter and stay updated with our latest builds, ideas, and IoT innovations.
            </motion.p>
<motion.div
  className="flex items-center gap-2 mt-8 max-w-md w-full"
  initial={{ y: 80, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
>
  <input
    type="email"
    placeholder="Enter your email"
    className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur border border-white/20 text-white placeholder:text-white/60 outline-none focus:border-primary"
  />

  <button className="btn glass rounded-lg flex items-center gap-2 px-4 py-3">
    Subscribe
    <ArrowRightIcon className="size-4" />
  </button>
</motion.div>
        </motion.div>
    );
};