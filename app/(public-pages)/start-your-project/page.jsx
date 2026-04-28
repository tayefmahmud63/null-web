import StartProjectForm from './StartProjectForm';

export const metadata = {
    title: 'Start Your Project',
    description:
        'Ready to build? Share your idea, project stage, and goals with Null Labz — we turn concepts into functional, market-ready IoT and embedded systems products.',
    openGraph: {
        title: 'Start Your Project | Null Labz',
        description: "Share your idea with Null Labz and we'll help turn it into a real, market-ready product.",
        url: 'https://nullabz.com/start-your-project',
    },
    alternates: {
        canonical: 'https://nullabz.com/start-your-project',
    },
};

export default function StartProjectPage() {
    return (
        <main className="min-h-screen px-6 py-20 flex items-center justify-center">
            <div className="w-full max-w-3xl">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold mb-4">Start Your Project</h1>
                    <p className="text-white/70">
                        Tell us about your idea, current stage, and goals — we'll help turn
                        it into a real, market-ready product.
                    </p>
                </div>

                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl">
                    <StartProjectForm />
                </div>

                <p className="text-center text-white/60 mt-6 text-sm">
                    Prefer email? Reach us at{" "}
                    <a href="mailto:contact@nullabz.com" className="underline hover:text-white">
                        contact@nullabz.com
                    </a>
                </p>
            </div>
        </main>
    );
}