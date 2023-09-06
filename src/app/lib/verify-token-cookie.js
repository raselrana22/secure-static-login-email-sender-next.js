import { NextResponse } from "next/server";
import { verifyToken } from "./jwt-manager";


export async function verifyTokenCookie(request) {
    try {
        const token = request.cookies.get('token');
        const payload = await verifyToken(token['value']);

        const requestHeaders = new Headers(request.headers);
        requestHeaders.set('email', payload['email']);

        return NextResponse.next({
            request: { headers: requestHeaders },
        })
    }
    catch (e) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
}
