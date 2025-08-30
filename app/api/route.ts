import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import User from '@/models/user';


// const hashedPassword = await bcrypt.hash(password, 10);


export async function POST(req: Request) {
    try {
        await connectDB();
        const body = await req.json();
        const newEvent = await User.create(body);
        return NextResponse.json(newEvent, { status: 201 });
    } catch (error) {
                if (error instanceof Error) {
                    return NextResponse.json({ error: error.message }, { status: 500 });
                }
                return NextResponse.json({error: 'Unknown Error'});
    }
}

export async function GET() {
    try {
        await connectDB();
        const events = await User.find({});
        return NextResponse.json(events);
    } catch (error) {
               if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({error: 'Unknown Error'});
    }
}