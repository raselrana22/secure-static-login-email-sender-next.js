import { NextResponse } from "next/server";
import { verifyTokenCookie } from "./app/lib/verify-token-cookie";

export async function middleware(request) {
    try {
        // Verify the token cookie
        // for my code simplicity add header in verifyTokenCookie function
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

export const config = {
    matcher: ['/home/:path*', '/profile/:path*', '/contact/:path*', '/about/:path*', '/logout/:path*'],
}
