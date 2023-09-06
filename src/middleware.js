import { NextResponse } from "next/server";

export async function middleware(request) {
    if (request.nextUrl.pathname.startsWith('/login')) {
        console.log('This is login middleware')
        return NextResponse.next();
    }
}