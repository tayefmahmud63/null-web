'use client';
import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CallToAction() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle | sending | success | error | duplicate

    const handleSubscribe = async () => {
        if (!email) return;
        setStatus('sending');

        try {
            const res = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            if (res.status === 409) {
                setStatus('duplicate');
            } else if (res.ok) {
                setStatus('success');
                setEmail('');
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <motion.div
            className="flex flex-col max-w-5xl mt-40 px-4 mx-auto items-center justify-center text-center py-16 rounded-xl glass"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        >
            <button className="btn glass py-1 px-3 text-xs">
                Stay in the Loop
            </button>

            <motion.h2
                className="text-2xl md:text-4xl font-medium mt-2"
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                Join Our Newsletter
            </motion.h2>

            <motion.p
                className="mt-4 text-sm/7 max-w-md"
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 70, mass: 1 }}
            >
                Get weekly newsletter and stay updated with our latest builds, ideas, and IoT innovations.
            </motion.p>

            <motion.div
                className="flex flex-col sm:flex-row items-center gap-2 mt-8 w-full max-w-md"
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === 'sending' || status === 'success'}
                    className="w-full sm:flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur 
                               border border-white/20 text-white placeholder:text-white/60 
                               outline-none focus:border-primary disabled:opacity-60"
                />
                <button
                    onClick={handleSubscribe}
                    disabled={status === 'sending' || status === 'success'}
                    className="w-full sm:w-auto btn glass rounded-lg flex items-center 
                               justify-center gap-2 px-4 py-3 disabled:opacity-60 
                               disabled:cursor-not-allowed"
                >
                    {status === 'sending' ? 'Subscribing...' : 'Subscribe'}
                    <ArrowRightIcon className="size-4" />
                </button>
            </motion.div>

            {/* Feedback messages */}
            {status === 'success' && (
                <p className="text-green-400 text-sm mt-3">
                    ✅ You're subscribed! Welcome aboard.
                </p>
            )}
            {status === 'duplicate' && (
                <p className="text-yellow-400 text-sm mt-3">
                    ⚠️ This email is already subscribed.
                </p>
            )}
            {status === 'error' && (
                <p className="text-red-400 text-sm mt-3">
                    ❌ Something went wrong. Please try again.
                </p>
            )}
        </motion.div>
    );
}