'use client';
import { LinkedinIcon, FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
    const links = [
        { name: 'Terms of Service', href: '#' },
        { name: 'Privacy Policy', href: '#p' },
        { name: 'Security', href: '#' },
   
    ];
    return (
        <motion.footer className="flex flex-col items-center px-4 md:px-16 lg:px-24 justify-center w-full pt-16 mt-40 glass border-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <a href="https://nullabz.com">
                <Image src='/assets/logo.svg' alt='logo' className='h-8.5 w-auto' width={205} height={48} />
            </a>

            <div className="flex flex-wrap items-center justify-center gap-8 py-8">
                {links.map((link, index) => (
                    <Link key={index} href={link.href} className='transition hover:text-gray-300'>
                        {link.name}
                    </Link>
                ))}
            </div>
            <div className="flex items-center gap-6 pb-6">
                <a href="https://bd.linkedin.com/company/null-labz" className="hover:-translate-y-0.5 text-gray-200 transition-all duration-300">
                    <LinkedinIcon />
                </a>
                 <a href="#" className="hover:-translate-y-0.5 text-gray-200 transition-all duration-300">
                    <YoutubeIcon />
                </a>                                  
                <a href="https://www.facebook.com/null.labz" className="hover:-translate-y-0.5 text-gray-200 transition-all duration-300">
                    <FacebookIcon />
                </a>
                <a href="https://www.instagram.com/null.labz" className="hover:-translate-y-0.5 text-gray-200 transition-all duration-300">
                    <InstagramIcon />
                </a>
                <a href="#" className="hover:-translate-y-0.5 text-gray-200 transition-all duration-300">
                    <TwitterIcon />
                </a>
            
            </div>
            <hr className="w-full border-white/20 mt-6" />
            <div className="flex flex-col md:flex-row items-center w-full justify-between gap-4 py-4">
                <p>Don't Think, Let's Build</p>
                <p>Copyright © 2026 <a href="https://www.nullabz.com">Null Labz</a>. All rights reservered.</p>
            </div>
        </motion.footer>
    );
};