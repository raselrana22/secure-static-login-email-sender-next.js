import { NextResponse } from "next/server";
import { createTokenCookie } from "@/app/lib/create-token-cookie";

// This function for login
export async function POST(request) {
    try {
        const jsonBody = await request.json();
        const email = jsonBody['email'];
        const password = jsonBody['password'];

        // Data Checking 
        if (email === "rasel.learn22@gmail.com" && password === "123") {
            let Cookie = await createTokenCookie(email);
            return NextResponse.json(
                { status: "success", message: "Request completed" },
                { status: 200, }
            );
        } else {
            return NextResponse.json(
                { status: "error", message: "The email or password is incorrect" },
                { status: 401 } // Unauthorized
            );
        }
    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json(
            { status: "error", message: "An error occurred during login" },
            { status: 500 } // Internal Server Error
        );
    }
}
