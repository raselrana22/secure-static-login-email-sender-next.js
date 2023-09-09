// utils/authentication.js

// Statically stored user credentials (for demonstration purposes)
const users = [
    { email: 'user@example.com', password: '1234' },
    { email: 'rasel.learn22@gmail.com', password: 'rana_RASEL' },
];

export function authenticateUser(email, password) {
    const user = users.find((user) => {
        return user.email === email && user.password === password
    });
    return user;
    // return undefine if no element found
}
