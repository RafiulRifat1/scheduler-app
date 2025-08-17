import { NextResponse } from 'next/server';
import { connecteDB } from '@/lib/mongodb';
// import User from '@/models/user';
// import bcrypt from 'bcryptjs';

// const hashedPassword = await bcrypt.hash(password, 10);


export async function POST(req: Request) {
    try {
        await connecteDB();
        const body = await req.json();
        const newEvent = await Event.create(body);
        return NextResponse.json(newEvent);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create event' });
    }
}

export async function GET(req: Request) {
    try {
        await connecteDB();
        const events = await Event.find({});
        return NextResponse.json(events);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch events' });
    }
}