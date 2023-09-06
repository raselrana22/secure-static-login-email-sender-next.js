export default function extractTokenFromCookieObject(cookieObject) {
    if (cookieObject && typeof cookieObject === 'object' && cookieObject['Set-Cookie']) {
        const setCookieString = cookieObject['Set-Cookie'];
        // Split the setCookieString to get the token value
        const tokenValue = setCookieString.split(';')[0].split('=')[1];
        return tokenValue;
    }
    return null; // Return null if the cookieObject is not valid
}


