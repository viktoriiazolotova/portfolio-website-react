import React from 'react'
import chatLogApplication from '../assets/portfolio/chatLogApplication.png'
import inspirationBoard from '../assets/portfolio/inspirationBoard.png'
import petCareExchange from '../assets/portfolio/petCareExchange.png'
import portfolioV1 from '../assets/portfolio/portfolioV1.png'
import taskList from '../assets/portfolio/taskList.jpeg'
import weatherReport from '../assets/portfolio/weatherReport.png'

const Portfolio = () => {
    const portfolio = [
        {
            id: 1,
            src: petCareExchange,
            codeLink: 'https://github.com/viktoriiazolotova',
            demoLink: 'https://github.com/viktoriiazolotova',
        },
        {
            id: 2,
            src: inspirationBoard,
            codeLink: '',
            demoLink: '',
        },
        {
            id: 3,
            src: portfolioV1,
            codeLink: '',
            demoLink: '',
        },
        {
            id: 4,
            src: taskList,
            codeLink: '',
            demoLink: '',
        },
        {
            id: 5,
            src: chatLogApplication,
            codeLink: '',
            demoLink: '',
        },
        {
            id: 6,
            src: weatherReport,
            codeLink: '',
            demoLink: '',
        },
    ]

    const openDemoLink = (id) => {
        console.log('it clicked here', portfolio[id])
        const demoLink = portfolio[id].demoLink
        // const githubUrl = 'https://github.com/viktoriiazolotova' // Replace with your GitHub repository URL
        window.open(demoLink, '_blank')
    }
    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
        >
            <div className="max-w-screen-max-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolio.map(({ id, src }) => (
                        <div
                            key={id}
                            className="shadow-md shadow-gray-600 rounded-lg"
                        >
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105"
                            ></img>

                            <div className="flex items-center justify-center">
                                <button
                                    onClick={() => openDemoLink(id)}
                                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                                >
                                    Demo
                                </button>
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                    Code
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio
