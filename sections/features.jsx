import SectionTitle from "@/components/section-title";
import { CircuitBoard, EthernetPort, Drill } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Features() {

    const refs = useRef([]);

    const featuresData = [
        {
            icon: CircuitBoard,
            title: "Embedded Systems Development",
            description: "Custom firmware and hardware for real world deployment.",
        },
        {
            icon: EthernetPort,
            title: "IoT Infrastructure & Unlimited Intregation",
            description: "Seamless intregation using MQTT, APIs, and scalable cloud systems.",
        },
        {
            icon: Drill,
            title: "Rapid Prototyping & Market Ready Deployment",
            description: "Quickly transform ideas into functional prototypes and deployable products.",
        }
    ];

    return (
        <section className="mt-32">
            <SectionTitle
                title="What We Deliver"
                description="We design, prototype, and deploy IoT and embedded systems built for real world performance."
            />

            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 px-6">
                {featuresData.map((feature, index) => (
                    <motion.div
                        key={index}
                        ref={(el) => (refs.current[index] = el)}
                        className="hover:-translate-y-0.5 p-6 rounded-xl space-y-4 glass max-w-80 w-full"
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: index * 0.15,
                            type: "spring",
                            stiffness: 320,
                            damping: 70,
                            mass: 1
                        }}
                        onAnimationComplete={() => {
                            const card = refs.current[index];
                            if (card) {
                                card.classList.add("transition", "duration-300");
                            }
                        }}
                    >
                        <feature.icon className="size-8.5" />
                        <h3 className="text-base font-medium text-white">
                            {feature.title}
                        </h3>
                        <p className="text-gray-100 line-clamp-2 pb-2">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
