// app/(public-pages)/layout.js

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import VisitTracker from '@/components/visit-tracker';


import { Syne, DM_Mono } from 'next/font/google'
const syne = Syne({ subsets: ['latin'], variable: '--font-syne' })
const dmMono = DM_Mono({ subsets: ['latin'], weight: ['300','400','500'], variable: '--font-dm-mono' })

export const metadata = {
    metadataBase: new URL('https://nullabz.com'),
    title: {
        default: 'Null Labz',
        template: '%s | Null Labz',
    },
    description:
        'We design, prototype, and deploy IoT and embedded systems built for real-world performance. Custom firmware, hardware, and software solutions.',
    keywords: [
        'IoT development',
        'embedded systems',
        'custom firmware',
        'hardware prototyping',
        'Null Labz',
        'Dhaka',
        'Bangladesh',
    ],
    openGraph: {
        siteName: 'Null Labz',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Null Labz - IoT & Embedded Systems',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Null Labz | IoT & Embedded Systems Development',
        description:
            'Custom IoT and embedded systems built for real-world performance.',
        images: ['/og-image.jpg'],
    },
    appleWebApp: {
        title: 'Null Labz',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function Layout({ children }) {
    return (
        <>
            <VisitTracker />
            <Navbar />
            {children}
            <Footer />
        </>
    );
}