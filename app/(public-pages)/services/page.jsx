// app/(public-pages)/services/page.jsx
// Remove 'use client'

import CallToAction from '@/sections/call-to-action';
import FaqSection from '@/sections/faq-section';
import Features from '@/sections/features';
import WorkflowSteps from '@/sections/workflow-steps';
import PricingPlans from '@/sections/pricing-plans';

export const metadata = {
    title: 'Services',
    description:
        'Explore Null Labz services — IoT system design, embedded firmware development, hardware prototyping, and custom electronics built for real-world deployment.',
    keywords: [
        'IoT services',
        'embedded firmware',
        'hardware prototyping',
        'electronics design',
        'Null Labz services',
    ],
    openGraph: {
        title: 'Services | Null Labz',
        description:
            'IoT system design, embedded firmware, and hardware prototyping services by Null Labz.',
        url: 'https://nullabz.com/services',
    },
    alternates: {
        canonical: 'https://nullabz.com/services',
    },
};

export default function Page() {
    return (
        <main className='px-4'>
            <Features />
            <WorkflowSteps />
            <PricingPlans />
            <CallToAction />
            <FaqSection />
        </main>
    );
}