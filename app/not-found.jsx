
import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
            <h1 className="text-8xl font-bold mb-4">404</h1>
            <p className="text-white/70 text-lg mb-8">
                Oops — this page doesn't exist.
            </p>
            <Link
                href="/"
                className="btn glass py-3 px-6"
            >
                Back to Home
            </Link>
        </main>
    );
}