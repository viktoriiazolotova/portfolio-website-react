import React from 'react'

import css from '..//assets/css.png'
import github from '..//assets/github.png'
import html from '..//assets/html.png'
import javascript from '..//assets/javascript.png'
import nextjs from '..//assets/nextjs.png'
import node from '..//assets/node.png'
import reactImage from '..//assets/reactImage.png'

const Experience = () => {
    const skills = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500',
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500',
        },
        {
            id: 4,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-600',
        },
        {
            id: 5,
            src: nextjs,
            title: 'Next js',
            style: 'shadow-white',
        },
        {
            id: 6,
            src: node,
            title: 'Node',
            style: 'shadow-orange-500',
        },
        {
            id: 7,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-400',
        },
    ]
    return (
        <div
            name="experience"
            className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <h3 className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Experience
                    </h3>
                    <p className="py-6">
                        These are the technologies I have worked on
                    </p>

                    <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center px-12 sm:px-0">
                        {skills.map(({ id, src, title, style }) => (
                            <div
                                key={id}
                                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                            >
                                <img
                                    src={src}
                                    alt={`logo of ${title}`}
                                    className="w-20 mx-auto"
                                />
                                <p className="mt-4">{title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
