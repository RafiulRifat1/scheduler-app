import { NextResponse } from "next/server";
import User from "@/models/user";
import { connectDB } from "@/lib/mongodb";


export async function POST(req: Request) {
    try {
        await connectDB();
        const body = await req.json();
        const {uid, name, email, image} = body;
        const user = await User.create({uid, name, email, image});
        return NextResponse.json(user);

    } catch(error) {
        return NextResponse.json({ error: error.message });
    }
}

 export async function GET() {
    try {
        await connectDB();
        const users =  await User.find({});
        return NextResponse.json(users)
    } catch (error) {
        return NextResponse.json({error: error.message});
    }
 }