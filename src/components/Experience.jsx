import React from 'react'
import api from '..//assets/api.png'
import css from '..//assets/css.png'
import django from '..//assets/django.png'
import expressjs from '../assets/expressjs.png'
import flask from '../assets/flask.png'
import github from '..//assets/github.png'
import html from '..//assets/html.png'
import javascript from '..//assets/javascript.png'
import jest from '..//assets/jest.png'
import cypress from '..//assets/cypress.png'
import node from '..//assets/node.png'
import postgres from '..//assets/postgresql.png'
import python from '..//assets/python.png'
import reactImage from '..//assets/reactImage.png'
import redux from '..//assets/redux.png'

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
            src: node,
            title: 'Node JS',
            style: 'shadow-green-500',
        },

        {
            id: 5,
            src: expressjs,
            title: 'Express JS',
            style: 'shadow-yellow-500',
        },
        {
            id: 6,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-600',
        },
        {
            id: 7,
            src: redux,
            title: 'Redux',
            style: 'shadow-purple-600',
        },
        {
            id: 8,
            src: cypress,
            title: 'Cypress',
            style: 'shadow-green-400',
        },
        {
            id: 9,
            src: jest,
            title: 'Jest',
            style: 'shadow-red-400',
        },

        {
            id: 10,
            src: python,
            title: 'Python',
            style: 'shadow-blue-400',
        },

        {
            id: 11,
            src: flask,
            title: 'Flask',
            style: 'shadow-gray-400',
        },
        {
            id: 12,
            src: django,
            title: 'Django',
            style: 'shadow-green-600',
        },
        {
            id: 13,
            src: postgres,
            title: 'PostgreSQL',
            style: 'shadow-white',
        },

        {
            id: 14,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-400',
        },
        {
            id: 15,
            src: api,
            title: 'REST API',
            style: 'shadow-blue-400',
        },
    ]
    return (
        <div
            name="experience"
            className="bg-gradient-to-b from-gray-800 to-black w-full lg:h-screen md:max-h-screen"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <h3 className="text-4xl font-bold border-b-4 border-gray-500 mt-2 p-2 inline">
                        Experience
                    </h3>
                    <p className="py-6">
                        These are the technologies I have worked on
                    </p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
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
    )
}

export default Experience
