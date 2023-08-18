import React from 'react'
import PropTypes from 'prop-types'

const PortfolioItem = ({ id, src, portfolio, altTitle }) => {
    const handleLinkClick = (id, linkCategory) => {
        const link =
            linkCategory === 'demo'
                ? portfolio[id].demoLink
                : portfolio[id].codeLink

        if (link) {
            window.open(link, '_blank')
        }
    }
    return (
        <div key={id + 1} className="shadow-md shadow-gray-600 rounded-lg">
            <img
                src={src}
                alt={altTitle}
                className="rounded-md duration-200 hover:scale-105 h-3/4 w-full"
            ></img>

            <div className="flex items-center justify-center">
                <button
                    onClick={() => handleLinkClick(id, 'demo')}
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                    Demo
                </button>
                <button
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    onClick={() => handleLinkClick(id, 'code')}
                >
                    Code
                </button>
            </div>
        </div>
    )
}

PortfolioItem.propTypes = {
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    portfolio: PropTypes.arrayOf(
        PropTypes.shape({
            demoLink: PropTypes.string,
            codeLink: PropTypes.string,
        })
    ).isRequired,
}

export default PortfolioItem
