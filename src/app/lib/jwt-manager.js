import { SignJWT } from "jose";
import { jwtVerify } from "jose";


const JWT_ALGORITHM = 'HS256';
/**
 * Creates a JSON Web Token (JWT) with the provided email.
 *
 * @param {string} email - The email to include in the JWT.
 * @returns {Promise<string>} The JWT token.
 * @throws {Error} If there is an issue creating the JWT.
 */
export async function createToken(email) {
    // Validate the email parameter
    if (!email || typeof email !== 'string') {
        throw new Error('Invalid email parameter');
    }

    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        const token = await new SignJWT({ email })
            .setProtectedHeader({ alg: JWT_ALGORITHM })
            .setIssuedAt()
            .setIssuer(process.env.JWT_ISSUER)
            .setExpirationTime(process.env.JWT_EXPIRATION_TIME)
            .sign(secret);

        return token;
    } catch (error) {
        throw new Error('Failed to create JWT token');
    }
}

/**
 * Verifies and decodes a JSON Web Token (JWT) using the provided token and secret.
 *
 * @param {string} token - The JWT to verify and decode.
 * @returns {Promise<Object>} The decoded payload of the JWT.
 * @throws {Error} If there is an issue verifying or decoding the JWT.
 */
export async function verifyToken(token) {
    // Validate the token parameter
    if (!token || typeof token !== 'string') {
        throw new Error('Invalid token parameter');
    }

    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        const decoded = await jwtVerify(token, secret);
        return decoded.payload;
    } catch (error) {
        throw new Error('Failed to verify or decode JWT token');
    }
}
