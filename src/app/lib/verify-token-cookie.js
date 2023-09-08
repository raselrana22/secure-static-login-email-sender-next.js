import { NextResponse } from "next/server";
import { verifyToken } from "./jwt-manager";

export async function verifyTokenCookie(request) {
    try {
        const token = request.cookies.get('token');
        const payload = await verifyToken(token['value']);
        return payload;
    }
    catch (e) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
}
