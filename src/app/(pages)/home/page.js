import Link from 'next/link';
import Image from 'next/image';
import placeHolderImageData from '@/app/utils/placeholder-image';

import courses from '@/app/data/course';

export default function MyHome() {
    return (
        <div className="bg-slate-300">
            <div className="container mx-auto py-8">
                <h1 className='font-semibold text-center mb-8 first-letter
                text-xl md:text-2xl lg:text-4xl'>Explore Our Courses</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {courses.map((course) => (
                        <div key={course.id} className="bg-white p-4 rounded-lg shadow-md transition duration-300 transform hover:scale-105 hover:shadow-lg
                        flex flex-col items-center text-center">
                            <Image
                                src={course.imageUrl}
                                alt={course.title}
                                width={500}
                                height={500}
                                placeholder='blur'
                                blurDataURL={`data: image/jpg, ${placeHolderImageData}`}
                            />
                            <h2 className="text-xl font-semibold">{course.title}</h2>
                            <p className="text-black">Instructor: {course.instructor}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}