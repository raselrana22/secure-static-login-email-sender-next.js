import Link from 'next/link';
import Image from 'next/image';

import courses from '@/app/data/course';

export default function MyHome() {
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto py-8">
                <h1 className="text-4xl font-semibold text-center mb-8">Explore Our Courses</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {courses.map((course) => (
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
}
