import React from 'react'
import profilePicture from '../assets/profilePicture.png'
import { Link } from 'react-scroll'
import { MdKeyboardArrowRight } from 'react-icons/md'

const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white ">
                        I'm a Full Stack Developer
                    </h2>
                    <p className="text-blue-500 text-xl py-4 max-w-md">
                        I enjoy building applications that solve real-world
                        problems and using data to gain insights and drive
                        decision-making.
                    </p>
                    <div>
                        <Link
                            to="portfolio"
                            smooth
                            duration={500}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                        >
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <MdKeyboardArrowRight
                                    size={25}
                                    className="ml-1"
                                />
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img
                        className="rounded-3xl mx-auto w-2/3"
                        src={profilePicture}
                        alt="my profile"
                    ></img>
                </div>
            </div>
        </div>
    )
}

export default Home
