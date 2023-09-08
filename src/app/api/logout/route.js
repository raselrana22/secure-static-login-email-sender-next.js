import { NextResponse } from "next/server";
import { cookies } from 'next/headers'

export async function GET(request) {
    cookies().delete('token')
    return NextResponse.json(
        { status: 'success', message: "Request Completed" }
    );
}
