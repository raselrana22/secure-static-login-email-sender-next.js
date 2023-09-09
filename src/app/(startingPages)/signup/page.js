'use client'

import { useState } from 'react';
import Link from 'next/link'; // Import Link from next/link

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your registration logic here
    };

    return (
        <div className='w-full h-screen  bg-slate-300'>
            <div className='flex items-center justify-center pt-10'>
                <div className="bg-white p-8 shadow-md rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                    {/* Notice to go to the login page */}
                    <div className="mt-4 text-center text-gray-600">
                        Already have an account?{' '}
                        <Link href="/login">
                            <p className="text-blue-500 hover:underline">Log in here</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
