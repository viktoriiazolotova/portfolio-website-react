import React from 'react'

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <h3 className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </h3>
                </div>
                <p className="text-xl mt-20">
                    I am deeply passionate about building applications that have
                    a tangible impact on solving real-world problems. For me,
                    software development goes beyond just writing code – it's
                    about creating solutions that address challenges faced by
                    individuals and communities. Whether it's enhancing user
                    experiences, streamlining processes, or improving
                    accessibility, I thrive on the opportunity to make a
                    positive difference through technology.
                </p>
                <br />
                <p className="text-xl">
                    If I am not coding 💻 , you can find me hiking 🥾 , camping
                    🏕️ , snowboarding 🏂 , or playing with my cat 🐈‍ .
                </p>
            </div>
        </div>
    )
}

export default About
