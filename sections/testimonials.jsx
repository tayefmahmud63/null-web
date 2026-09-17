'use client';
import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";
import { useRef } from "react";


export default function Testimonials() {

    const ref = useRef([]);
    const data = [
        {
            review: 'Tayef took on a very complicated and nuanced project, and delivered an excellent quality result.',
            name: 'Canada',
            about: 'Escape IoT',
            rating: 5,
            image: '/assets/escape_iot_client.webp',
        },
        {
            review: 'Helped me research various solutions in our consultation sessions. Simply a great collaboration. Thanks!',
            name: 'Turkey',
            about: 'Balfaqih Studio',
            rating: 5,
            image: '/assets/balfaqih_studio_client.webp',
        },

        {
            review: 'Helped us bring our vision to life. Their team took our concept for a smart wristband and turned it into a working prototype',
            name: 'Bangladesh',
            about: 'Attention Network',
            rating: 5,
            image: '/assets/attention_network_client.webp',
        },
        {
            review: "They explained everything in a way that made technical things easy.",
            name: 'Bangladesh',
            about: 'Cenco Lifestyle',
            rating: 5,
            image: '/assets/cenco_client.webp',
        },
        {
            review: 'Expert level skills in Linux and embedded systems and delivered a solution that was truly out of the box',
            name: 'Australia',
            about: '2nds IT Pty Ltd',
            rating: 5,
            image: '/assets/profile.webp',
        },
        {
            review: "Team Null Labz understood our idea quickly and turned it into a reliable IoT solution.",
            name: 'Bangladesh',
            about: 'UVTR InfoTech',
            rating: 5,
            image: '/assets/uvtr_client.webp',
        },

    ];
    return (
        <section className="mt-32 flex flex-col items-center">
            <SectionTitle
                title="Here's What Our Clients Say's"
                description="Feedback's from clients we've helped turn ideas into functional, market ready products."
            />
            <div className='mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {data.map((item, index) => (
                    <motion.div key={index} className='w-full max-w-88 space-y-5 rounded-lg glass p-5 hover:-translate-y-1'
                        initial={{ y: 150, opacity: 0 }}
                        ref={(el) => (ref.current[index] = el)}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: `${index * 0.15}`, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                        onAnimationComplete={() => {
                            const card = ref.current[index];
                            if (card) {
                                card.classList.add("transition", "duration-300");
                            }
                        }}
                    >
                        <div className='flex items-center justify-between'>
                            <p className="font-medium">{item.about}</p>
                            <img className='size-10 rounded-full' src={item.image} alt={item.name} />
                        </div>
                        <p className='line-clamp-3'>“{item.review}”</p>
                        <p className='text-gray-300'>
                            - {item.name}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}