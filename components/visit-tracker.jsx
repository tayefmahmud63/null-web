'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function VisitTracker() {
    const pathname = usePathname();

    useEffect(() => {
        // Don't track admin pages
        if (pathname.startsWith('/admin')) return;

        fetch('/api/visit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                page: pathname,
                referrer: document.referrer || 'direct',
            }),
        }).catch(() => {}); // fail silently
    }, [pathname]);

    return null; // renders nothing
}