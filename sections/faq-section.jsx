'use client';
import SectionTitle from '@/components/section-title';
import { ChevronDownIcon } from 'lucide-react';
import { useState } from 'react';
import { motion } from "framer-motion";

export default function FaqSection() {
    const [isOpen, setIsOpen] = useState(false);
    const data = [
        {
            question: 'Do I need technical knowledge to work with Null Labz?',
            answer: "No. We guide you through the entire process from idea to deployment even if you have no technical background.",
        },
        {
            question: 'What kind of projects do you work on?',
            answer: 'We specialize in IoT devices, embedded systems, robotics, and full product development including hardware and software.',
        },
        {
            question: 'Can you help turn my idea into a real product?',
            answer: 'Yes. We take your idea through design, prototyping, development, and make it ready for real world use.',
        },
        {
            question: 'Do you provide both hardware and software development?',
            answer: 'Yes. We offer complete solutions including firmware, hardware design, cloud integration, and mobile/web applications.',
        },
        {
            question: 'Do you support post deployment maintenance?',
            answer: "Yes. We provide support, updates, and improvements after deployment if required.",
        },
        {
            question: 'Can you build and deliver the physical product to my location?',
            answer: 'Yes. Once your product is fully built and tested, we handle international shipping and delivery to your location.',
        },
                {
            question: 'Still have questions?',
            answer: 'Feel free to reach out at contact@nullabz.com — we"re here to help.',
        },
    ];

    return (
        <section className='mt-32'>
            <SectionTitle title="FAQ's" description="Got questions about building your product? Here are answers to help you get started." />
            <div className='mx-auto mt-12 space-y-4 w-full max-w-xl'>
                {data.map((item, index) => (
                    <motion.div key={index} className='flex flex-col glass rounded-md'
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: `${index * 0.15}`, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <h3 className='flex cursor-pointer hover:bg-white/10 transition items-start justify-between gap-4 p-4 font-medium' onClick={() => setIsOpen(isOpen === index ? null : index)}>
                            {item.question}
                            <ChevronDownIcon className={`size-5 transition-all shrink-0 duration-400 ${isOpen === index ? 'rotate-180' : ''}`} />
                        </h3>
                        <p className={`px-4 text-sm/6 transition-all duration-400 overflow-hidden ${isOpen === index ? 'pt-2 pb-4 max-h-80' : 'max-h-0'}`}>{item.answer}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}