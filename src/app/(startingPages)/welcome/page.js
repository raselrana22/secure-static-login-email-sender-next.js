import React from 'react';
import Link from 'next/link';

export default function Welcome() {
    return (
        <div className="text-center w-full h-screen bg-slate-300">
            <h1 className="font-semibold text-black pt-10 mx-3 mb-4 text-3xl md:text-4xl lg:text-5xl">
                Welcome to Our Website
            </h1>
            <div className='text-center'>
                <p className="text-black text-sm px-3 md:text-base lg:text-lg mb-6">
                    To access our awesome features, please log in or create an account.
                </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center">
                <Link href="/login">
                    <button className="w-[100px] bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 rounded mb-3 md:mb-0 md:mr-2">
                        Log In
                    </button>
                </Link>
                <Link href="/signup">
                    <button className="w-[100px] bg-green-500 hover:bg-green-600 text-white font-semibold p-2 rounded">
                        Sign Up
                    </button>
                </Link>
            </div>
        </div>
    );
}
