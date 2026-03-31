import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export const metadata = {
    title: 'Null Labz',
    description: 'Complete Embedded Solution',
    appleWebApp: {
        title: 'Null Labz',
    },
};

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
