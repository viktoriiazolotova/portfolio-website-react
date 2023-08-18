import React from 'react'
import chatLogApplication from '../assets/portfolio/chatLogApplication.png'
import inspirationBoard from '../assets/portfolio/inspirationBoard.png'
import petCareExchange from '../assets/portfolio/petCareExchange.png'
import portfolioV1 from '../assets/portfolio/portfolioV1.png'
import taskList from '../assets/portfolio/taskList.jpeg'
import weatherReport from '../assets/portfolio/weatherReport.png'
import PortfolioItem from './PortfolioItem'

const Portfolio = () => {
    const portfolio = [
        {
            id: 0,
            src: petCareExchange,
            altTitle: 'petCareExchange',
            codeLink:
                'https://github.com/viktoriiazolotova/front-end-pet-care-exchange',
            demoLink: 'https://pet-care-exchange-react.web.app/',
        },
        {
            id: 1,
            src: inspirationBoard,
            altTitle: 'two notebooks, pen and green leaf',
            codeLink:
                'https://github.com/viviantomato/front-end-inspiration-board',
            demoLink: 'https://youtu.be/OP01blcyxxc',
        },
        {
            id: 2,
            src: portfolioV1,
            altTitle: 'portfolio',
            codeLink:
                'https://github.com/viktoriiazolotova/personal-portfolio-site',
            demoLink: 'https://viktoriiazolotova.github.io/',
        },
        {
            id: 3,
            src: taskList,
            altTitle: 'todo list',
            codeLink: 'https://github.com/viktoriiazolotova/task-list-api',
            demoLink: 'https://github.com/viktoriiazolotova/task-list-api',
        },
        {
            id: 4,
            src: chatLogApplication,
            altTitle: 'chat log',
            codeLink: 'https://github.com/viktoriiazolotova/react-chatlog',
            demoLink: 'https://youtu.be/_ltbp0X-VV4',
        },
        {
            id: 5,
            src: weatherReport,
            altTitle: 'weather report',
            codeLink: 'https://github.com/viktoriiazolotova/weather-report',
            demoLink: 'https://youtu.be/uQP-OOaRVFY',
        },
    ]

    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
        >
            <div className="max-w-screen-max-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <h3 className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </h3>
                    <p className="py-6">Check out some of my work right here</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolio.map(({ id, src, altTitle }) => (
                        <PortfolioItem
                            key={id + 1}
                            src={src}
                            id={id}
                            portfolio={portfolio}
                            altTitle={altTitle}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio
