import { NextResponse } from "next/server";
import { verifyTokenCookie } from "./app/lib/verify-token-cookie";

export async function middleware(request) {
    try {
        // Verify the token cookie
        // add the header in verifyTokenCookie function
        const verified = await verifyTokenCookie(request);

        if (verified.ok) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(new URL('/login', request.url))
        }

    } catch (error) {
        console.log(error);
    }

    /* When I attempted to use a try and catch block to check the 
     destination path and verified that it was working correctly locally,
     I encountered issues when deploying to Vercel.As a result,
    I had to comment out this code.*/
    // return NextResponse.next();
}

// The destination path after login
export const config = {
    matcher: ['/home/:path*', '/profile/:path*', '/contact/:path*', '/about/:path*', '/logout/:path*'],
}
