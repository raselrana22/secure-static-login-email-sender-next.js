import { NextResponse } from "next/server";
import { verifyTokenCookie } from "./app/lib/verify-token-cookie";

export async function middleware(request) {
    // if (request.nextUrl.pathname.startsWith('/')) {
    //     console.log('root path');
    //     return NextResponse.next();
    // }
    // if (request.nextUrl.pathname.startsWith('/login')) {
    //     console.log('login path');
    //     return NextResponse.next();
    // }
    if (request.nextUrl.pathname.startsWith('/home')) {
        try {
            // Verify the token cookie
            const verified = await verifyTokenCookie(request);

            if (verified.ok) {
                return NextResponse.next();
            } else {
                return NextResponse.redirect(new URL('/login', request.url))
            }

        } catch (error) {
            console.log(error);
        }
    }
}