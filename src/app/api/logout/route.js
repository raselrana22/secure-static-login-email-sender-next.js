import { NextResponse } from "next/server";
import { cookies } from 'next/headers'

export async function GET(request) {
    // Delete the 'token' cookie from the request
    cookies().delete('token')
    return NextResponse.json(
        { status: 'success', message: "Request Completed" }
    );
}
