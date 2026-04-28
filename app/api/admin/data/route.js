import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET(request) {
    // Verify auth
    const token = request.cookies.get('admin_token')?.value;
    if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    try {
        const secret = new TextEncoder().encode(process.env.ADMIN_PASSWORD);
        await jwtVerify(token, secret);
    } catch {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Fetch all data
const [contactsRes, newsletterRes, visitsRes, projectsRes] = await Promise.all([
    supabaseAdmin.from('contacts').select('*').order('created_at', { ascending: false }),
    supabaseAdmin.from('newsletter').select('*').order('created_at', { ascending: false }),
    supabaseAdmin.from('visits').select('*').order('created_at', { ascending: false }).limit(500),
    supabaseAdmin.from('projects').select('*').order('created_at', { ascending: false }),
]);

    const projects = projectsRes.data || [];
    const contacts = contactsRes.data || [];
    const newsletter = newsletterRes.data || [];
    const visits = visitsRes.data || [];

    // Compute stats
    const topPages = Object.entries(
        visits.reduce((acc, v) => {
            acc[v.page] = (acc[v.page] || 0) + 1;
            return acc;
        }, {})
    )
        .map(([page, count]) => ({ page, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

    const topCountries = Object.entries(
        visits.reduce((acc, v) => {
            acc[v.country] = (acc[v.country] || 0) + 1;
            return acc;
        }, {})
    )
        .map(([country, count]) => ({ country, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

    const devices = Object.entries(
        visits.reduce((acc, v) => {
            acc[v.device] = (acc[v.device] || 0) + 1;
            return acc;
        }, {})
    ).map(([device, count]) => ({ device, count }));

    const browsers = Object.entries(
        visits.reduce((acc, v) => {
            acc[v.browser] = (acc[v.browser] || 0) + 1;
            return acc;
        }, {})
    ).map(([browser, count]) => ({ browser, count }));

    return NextResponse.json({
        stats: {
            totalVisits: visits.length,
            uniquePages: new Set(visits.map((v) => v.page)).size,
            totalContacts: contacts.length,
            totalNewsletter: newsletter.length,
            totalProjects: projects.length,
            topPages,
            topCountries,
            devices,
            browsers,
            
        },
        contacts,
        newsletter,
        visits,
        projects,
    });
}