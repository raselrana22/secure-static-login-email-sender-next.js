import { NextResponse } from "next/server";

export async function middleware(request, response) {
    return NextResponse.next();
}