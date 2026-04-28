// app/api/newsletter/route.js
import { supabaseAdmin } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            );
        }

        const { error } = await supabaseAdmin
            .from('newsletter')
            .insert([{ email }]);

        if (error) {
            // Handle duplicate email
            if (error.code === '23505') {
                return NextResponse.json(
                    { error: 'Email already subscribed' },
                    { status: 409 }
                );
            }
            throw error;
        }

        return NextResponse.json(
            { success: true, message: 'Subscribed successfully!' },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: 'Something went wrong' },
            { status: 500 }
        );
    }
}