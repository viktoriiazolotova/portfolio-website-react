import React from 'react'

const Contact = () => {
    return (
        <div
            name="contact"
            className="w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
        >
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <h3 className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Contact
                    </h3>
                    <p className="py-6">
                        Submit the form below to get in touch with me
                    </p>
                </div>

                <div className="flex justify-center items-center">
                    <form
                        action="https://getform.io/f/5e4369eb-f424-4d4c-9328-b962eb7e9972"
                        method="POST"
                        className=" flex flex-col w-full md:w-1/2"
                    >
                        <label class="hidden" for="name">
                            Your name
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        ></input>
                        <label class="hidden" for="email">
                            Your email
                        </label>
                        <input
                            id="email"
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        ></input>
                        <label class="hidden" for="message">
                            Your message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="10"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                            placeholder="Enter your message"
                        ></textarea>
                        <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                            Let's talk
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
