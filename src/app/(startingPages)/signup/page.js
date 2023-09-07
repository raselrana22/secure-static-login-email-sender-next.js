import React from 'react';
import Link from 'next/link';

export default function Welcome() {
    return (
        <div className="text-center w-full h-screen bg-slate-300">
            <h1 className="text-3xl font-semibold pt-10 mb-4">Welcome to Our Website</h1>
            <p className="text-gray-600 mb-6">
                To access our awesome features, please log in or create an account.
            </p>
            <div className="flex justify-center">
                <Link href={'/login'}>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2">
                        Log In
                    </button>
                </Link>
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                    Sign Up
                </button>
            </div>
        </div>
    );
}
