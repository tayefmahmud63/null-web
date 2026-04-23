// app/(public-pages)/careers/page.jsx

export const metadata = {
    title: 'Careers',
    description:
        'Join the Null Labz team. We build IoT and embedded systems that solve real-world problems. Check out open positions and grow with us.',
    openGraph: {
        title: 'Careers | Null Labz',
        description:
            'Join the Null Labz team and help build the future of IoT and embedded systems.',
        url: 'https://nullabz.com/careers',
    },
    alternates: {
        canonical: 'https://nullabz.com/careers',
    },
};

export default function CareersPage() {
    return (
        <main className="min-h-screen px-6 py-20 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Careers</h1>
            <p className="text-white/70">
                Currently No Vacancy Is Available
            </p>
        </main>
    );
}