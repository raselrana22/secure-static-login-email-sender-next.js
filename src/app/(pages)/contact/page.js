export default function Contact() {
    return (
        <div className='flex content-center'>
            <main className="container mx-auto py-8">
                <div className='w-3/2'>
                    <h1 className="text-4xl font-semibold mb-4">Contact Us</h1>
                    <p className="text-gray-600 mb-6">
                        {`If you have any questions or need assistance, please don't hesitate to contact us. We are here to help!`}
                    </p>
                </div>

                <div className="w-2/3 bg-slate-300 p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>

                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                required
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}
