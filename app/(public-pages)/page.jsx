

import { Metadata } from 'next'; // optional, just for type hints
import CallToAction from '@/sections/call-to-action';
import FaqSection from '@/sections/faq-section';
import Features from '@/sections/features';
import HeroSection from '@/sections/hero-section';
import PricingPlans from '@/sections/pricing-plans';
import Testimonials from '@/sections/testimonials';
import TrustedCompanies from '@/sections/trusted-companies';
import WorkflowSteps from '@/sections/workflow-steps';

export const metadata = {
    title: 'Null Labz | IoT & Embedded Systems Development',
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
        title: 'Null Labz | IoT & Embedded Systems Development',
        description:
            'We design, prototype, and deploy IoT and embedded systems built for real-world performance.',
        url: 'https://nullabz.com',
        siteName: 'Null Labz',
        images: [
            {
                url: 'https://nullabz.com/og-image.jpg', // add a real OG image
                width: 1200,
                height: 630,
                alt: 'Null Labz - IoT & Embedded Systems',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Null Labz | IoT & Embedded Systems Development',
        description:
            'Custom IoT and embedded systems built for real-world performance.',
        images: ['https://nullabz.com/og-image.jpg'],
    },
    alternates: {
        canonical: 'https://nullabz.com',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function Page() {
    return (
        <main className='px-4'>
            <HeroSection />
            <TrustedCompanies />
            <Features />
            <WorkflowSteps />
            <PricingPlans />
            <Testimonials />
            <CallToAction />
            <FaqSection />
        </main>
    );
}