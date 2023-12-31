import React from 'react'
// import chatLogApplication from '../assets/portfolio/chatLogApplication.png'
import inspirationBoard from '../assets/portfolio/inspirationBoard.png'
import kittyWonderland from '../assets/portfolio/kittyWonderland.jpeg'
import petCareExchange from '../assets/portfolio/petCareExchange.png'
import portfolioV1 from '../assets/portfolio/portfolioV1.png'
import taskList from '../assets/portfolio/taskList.jpeg'
import weatherReport from '../assets/portfolio/weatherReport.png'
import PortfolioItem from './PortfolioItem'

const Portfolio = () => {
    const portfolio = [
        {
            id: 0,
            src: kittyWonderland,
            title: 'Kitty Wonderland',
            codeLink: 'https://github.com/viktoriiazolotova/react-memory-game',
            demoLink: 'https://kitty-wonderland.netlify.app/',
        },

        {
            id: 1,
            src: petCareExchange,
            title: 'PetCareExchange',
            codeLink:
                'https://github.com/viktoriiazolotova/front-end-pet-care-exchange',
            demoLink: 'https://pet-care-exchange-react.web.app/',
        },
        {
            id: 2,
            src: inspirationBoard,
            title: 'Inspiration Board',
            codeLink:
                'https://github.com/viviantomato/front-end-inspiration-board',
            demoLink: 'https://youtu.be/XN-w03iGvuE',
        },
        {
            id: 3,
            src: portfolioV1,
            title: 'Portfolio v1',
            codeLink:
                'https://github.com/viktoriiazolotova/personal-portfolio-site',
            demoLink: 'https://viktoriiazolotova.github.io/',
        },

        // {
        //     id: 3,
        //     src: chatLogApplication,
        //     title: 'Chat Log Applicatipn',
        //     codeLink: 'https://github.com/viktoriiazolotova/react-chatlog',
        //     demoLink: 'https://youtu.be/_ltbp0X-VV4',
        // },
        {
            id: 4,
            src: weatherReport,
            title: 'Weather Report',
            codeLink: 'https://github.com/viktoriiazolotova/weather-report',
            demoLink: 'https://youtu.be/uQP-OOaRVFY',
        },
        {
            id: 5,
            src: taskList,
            title: 'Todo List API',
            codeLink: 'https://github.com/viktoriiazolotova/task-list-api',
            demoLink: 'https://github.com/viktoriiazolotova/task-list-api',
        },
    ]

    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full pb-12"
        >
            <div className="max-w-screen-max-lg lg:p-16 md:p-8 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <h3 className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </h3>
                    <p className="py-6">Check out some of my work right here</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolio.map(({ id, src, title }) => (
                        <PortfolioItem
                            key={id + 1}
                            src={src}
                            id={id}
                            portfolio={portfolio}
                            title={title}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio
