// app/api/contact/route.js
import { supabaseAdmin } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        const { error } = await supabaseAdmin
            .from('contacts')
            .insert([{ name, email, message }]);

        if (error) throw error;

        return NextResponse.json(
            { success: true, message: 'Message received!' },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: 'Something went wrong' },
            { status: 500 }
        );
    }
}