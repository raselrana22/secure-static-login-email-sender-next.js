import { NextResponse } from "next/server";
import { verifyTokenCookie } from "./app/lib/verify-token-cookie";

export async function middleware(request) {

    // if (request.nextUrl.pathname.startsWith('/home')) {
    //     try {
    //         // Verify the token cookie
    //         const verified = await verifyTokenCookie(request);
    //         if (verified) {
    //             console.log('The token verified');
    //             return NextResponse.next();
    //         } else {
    //             return NextResponse.redirect(new URL('/login', request.url))
    //         }

    //     } catch (error) {
    //         console.log(error);
    //     }
    // } else {
    //     return NextResponse.redirect(new URL('/login', request.url))
    // }
}