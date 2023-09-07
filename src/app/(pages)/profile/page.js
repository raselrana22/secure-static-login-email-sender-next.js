import React from 'react';
import Image from 'next/image';
import user from '@/app/data/user';

const Profile = () => {
    return (
        <div>
            <div className="bg-blue-400 p-8">
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <Image
                                src={user.imageUrl}
                                alt={`${user.name}'s profile`}
                                width={300}
                                height={300}
                            />
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                User Profile
                            </div>
                            <h2 className="mt-2 text-2xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-3xl">
                                {user.name}
                            </h2>
                            <div className="mt-2">
                                <div className="text-gray-600">Email: {user.email}</div>
                                <div className="text-gray-600">Location: {user.location}</div>
                                <div className="text-gray-600">Bio: {user.bio}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-8">
                <h1 className="text-4xl font-semibold text-center mb-8">Enrolled Courses</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {user.coursesEnrolled.map((course) => (
                        <div key={course.id} className="bg-white p-4 rounded-lg shadow-md transition duration-300 transform hover:scale-105 hover:shadow-lg">
                            <Image
                                src={course.imageUrl}
                                alt={course.title}
                                width={200}
                                height={180}
                            />
                            <h2 className="text-xl font-semibold">{course.title}</h2>
                            <p className="text-gray-600">Instructor: {course.instructor}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;
