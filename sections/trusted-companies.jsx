'use client';
import { motion } from "framer-motion";

export default function TrustedCompanies() {
    const logos = [
        '/assets/company-logo-1.svg',
        '/assets/company-logo-2.svg',
        '/assets/company-logo-3.svg',
        '/assets/company-logo-4.svg',
        '/assets/company-logo-5.svg',
        '/assets/company-logo-6.svg',
    ];

    return (
        <motion.section
            className="mt-14"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 70,
                mass: 1
            }}
        >
            <p className="py-6 mt-14 text-center">
                Trusted by companies around the world
            </p>

            <div
                className="flex flex-nowrap items-center justify-center gap-8 max-w-5xl w-full mx-auto py-4 overflow-hidden"
                id="logo-container"
            >
                {logos.map((logo, index) => (
                    <img
                        key={index}
                        src={logo}
                        alt="logo"
                        className="h-7 w-auto max-w-xs flex-shrink-0"
                    />
                ))}
            </div>
        </motion.section>
    );
}