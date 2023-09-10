import React from 'react';
import Link from 'next/link';

export default function Notice() {
    return (
        <div className="text-center w-full h-screen bg-slate-300">
            <h1 className="text-3xl font-semibold pt-10 mb-4">Access Restricted</h1>
            <p className="text-black mb-6">
                To access our website, please log in or create an account.
            </p>
            <div className="flex flex-col md:flex-row justify-center mb-4">
                <Link href="/login">
                    <button className="w-[100px] bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 rounded mb-3 mr-3">
                        Log In
                    </button>
                </Link>
                <Link href="/signup">
                    <button className="w-[100px] bg-green-500 hover:bg-green-600 text-white font-semibold p-2 rounded mb-3 mr-3">
                        Sign Up
                    </button>
                </Link>
            </div>
            <p className="text-black">
                If you already have an account, please log in. Otherwise, sign up to access our website.
            </p>
            <div className="mt-8">
                <Link href="/">
                    <button className="bg-slate-500 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded">
                        Go to Homepage
                    </button>
                </Link>
            </div>
        </div>
    );
}
