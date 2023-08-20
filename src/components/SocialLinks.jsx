import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    Linkedn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/viktoriiazolotova/',
            style: 'rounded-tr-md',
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/viktoriiazolotova',
        },
        {
            id: 3,
            child: (
                <>
                    Email <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:viktoriiazolotova@gmail.com',
        },
    ]

    return (
        <div>
            <ul className="flex flex-row justify-center text-blue-500 bg-gray-800">
                {links.map(({ id, child, href, style, download }) => (
                    <li
                        key={id}
                        className={`w-40 h-14 px-4 ${style} hover:scale-105 duration-200 p-3 cursor-pointer`}
                    >
                        <a
                            className="flex justify-between items-center w-full px-4"
                            href={href}
                            download={download}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
            <p className="p-10 text-md text-center text-bold text-white bg-gray-800">
                Build by Viktoriia Zolotova 2023
            </p>
        </div>
    )
}

export default SocialLinks
