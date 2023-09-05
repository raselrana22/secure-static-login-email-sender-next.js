import { createToken } from "./jwt-manager";

export async function createTokenCookie(email) {
    console.log(email);
    let token = await createToken(email);
    const maxAgeInSeconds = parseInt(process.env.JWT_EXPIRATION_TIME, 10); // Convert to seconds
    return {
        'Set-Cookie': `token=${token}; Max-Age=${maxAgeInSeconds}; Secure; HttpOnly; Path=/; SameSite=Strict`
    };
}