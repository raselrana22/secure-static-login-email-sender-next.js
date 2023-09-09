export default function Contact() {
    return (
        <div className='bg-slate-300 flex items-center'>
            <div className="w-full md:w-2/3 lg:w-1/2 p-4 shadow-lg mx-auto py-8">
                <div className='w-full rounded-t-lg p-4 bg-rose-100'>
                    <h1 className="text-lg md:text-2xl lg:text-4xl font-semibold mb-4">Contact Us</h1>
                    <p className="text-gray-600 mb-4">
                        {`If you have any questions or need assistance, please don't hesitate to contact us. We are here to help!`}
                    </p>
                </div>

                <div className="w-full bg-rose-100 p-4 rounded-b-lg shadow-md">
                    <h2 className="text-lg md:text-2xl font-semibold mb-2">Get in Touch</h2>

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
            </div>
        </div>
    );
}
