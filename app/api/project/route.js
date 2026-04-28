import { supabaseAdmin } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { name, email, stage, type, details, timeline, budget } = await request.json();

        if (!name || !email) {
            return NextResponse.json(
                { error: 'Name and email are required' },
                { status: 400 }
            );
        }

        const { error } = await supabaseAdmin
            .from('projects')
            .insert([{ name, email, stage, type, details, timeline, budget }]);

        if (error) throw error;

        return NextResponse.json(
            { success: true, message: 'Project submitted!' },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: 'Something went wrong' },
            { status: 500 }
        );
    }
}