import Link from "next/link";

export default function About() {
    return (
        <div className='bg-white'>
            <div className="container mx-auto p-8">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold mb-4">About Us</h1>
                <p className="text-gray-600 mb-6 text-justify">
                    {`Tech. Education is a leading online learning platform dedicated to providing high-quality courses on a wide range of tech-related topics. Our mission is to empower individuals to acquire new skills and knowledge to succeed in the ever-evolving tech industry.`}
                </p>
                <div className="bg-slate-200 p-8 rounded-lg shadow-md">
                    <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-gray-600 mb-4 text-justify">
                        {`At Tech. Education, we believe that education is the key to unlocking opportunities and improving lives. Our mission is to make tech education accessible to everyone, regardless of their background or location.`}
                    </p>

                    <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4">Why Choose Us?</h2>
                    <ul className="list-disc pl-6 text-gray-600 mb-4 text-justify">
                        <li>{`Wide range of high-quality courses`}</li>
                        <li>{`Expert instructors with industry experience`}</li>
                        <li>{`Flexible learning options to fit your schedule`}</li>
                        <li>{`Community support and networking opportunities`}</li>
                    </ul>
                    <Link href={'/contact'}>
                        <h2 className='text-2xl font-semibold mb-2 hover:underline hover:text-blue-500'>Contact Us</h2>
                    </Link>
                    <div className="text-gray-600">
                        {`If you have any questions or feedback, please don't hesitate to contact us. We'd love to hear from you.`}
                    </div>
                </div>
            </div>
        </div>
    );
}
