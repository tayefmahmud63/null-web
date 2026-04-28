// app/api/visit/route.js
import { supabaseAdmin } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        const { page, referrer } = body;

        // Get IP
        const ip =
            request.headers.get('x-forwarded-for')?.split(',')[0] ||
            request.headers.get('x-real-ip') ||
            'unknown';

        // Get location from IP using free API
        let country = 'unknown';
        let city = 'unknown';
        if (ip !== 'unknown' && ip !== '::1') {
            try {
                const geo = await fetch(`http://ip-api.com/json/${ip}`);
                const geoData = await geo.json();
                country = geoData.country || 'unknown';
                city = geoData.city || 'unknown';
            } catch {
                // geo lookup failed, continue anyway
            }
        }

        // Get device & browser from user agent
        const ua = request.headers.get('user-agent') || '';
        const device = /mobile/i.test(ua) ? 'mobile' : 'desktop';
        const browser = ua.includes('Chrome')
            ? 'Chrome'
            : ua.includes('Firefox')
            ? 'Firefox'
            : ua.includes('Safari')
            ? 'Safari'
            : ua.includes('Edge')
            ? 'Edge'
            : 'Other';

        const { error } = await supabaseAdmin.from('visits').insert([
            { page, ip, country, city, device, browser, referrer },
        ]);

        if (error) throw error;

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: 'Something went wrong' },
            { status: 500 }
        );
    }
}