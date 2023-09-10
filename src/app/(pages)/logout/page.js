'use client'

import React from 'react';
import { useRouter } from 'next/navigation';

export default function LogoutConfirmation() {
    const router = useRouter();

    const handleConfirmLogout = async () => {
        const response = await fetch('/api/logout', {
            method: 'GET',
        });
        const res = await response.json();
        if (res.status === 'success') {
            // alert('Logout successful');
            router.replace('/welcome');
        }
    };


    const handleCancelLogout = () => {
        router.replace('/home');
    };

    return (
        <div className="w-full md:h-screen flex items-center justify-center bg-slate-300">
            <div className="lg:w-1/2 p-4">
                <div className="bg-white p-8 shadow-md rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Logout Confirmation</h2>
                    <p className="text-gray-700 mb-4">
                        Are you sure you want to logout? You will be redirected to the login page.
                    </p>
                    <div className="flex justify-between">
                        <button
                            onClick={handleCancelLogout}
                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-300"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleConfirmLogout}
                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
