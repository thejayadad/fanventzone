import React from 'react'
import { FaQuestionCircle, FaCog, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import {} from "react-icons/fi"

const Footer = () => {
  return (

<footer className="w-full py-8 border-t-1 border-primary">
    <div className="max-w-screen-xl px-4 mx-auto">
        <ul className="flex flex-wrap justify-between max-w-screen-md mx-auto text-lg font-light">
            <li className="my-2">
                <a className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="#">
                    FAQ
                </a>
            </li>
            <li className="my-2">
                <a className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="#">
                    Configuration
                </a>
            </li>
            <li className="my-2">
                <a className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="#">
                    Github
                </a>
            </li>
            <li className="my-2">
                <a className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="#">
                    LinkedIn
                </a>
            </li>
        </ul>
        <div className="pt-8 flex max-w-xs mx-auto items-center justify-between">
            <a href="#" className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                <FaQuestionCircle size={20} />
            </a>
            <a href="#" className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                <FaCog size={20} />
            </a>
            <a href="#" className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                <FaGithub size={20} />
            </a>
            <a href="#" className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                <FaLinkedin size={20} />
            </a>
        </div>
        <div className="text-center text-gray-500 dark:text-gray-200 pt-10 sm:pt-12 font-light flex items-center justify-center">
            By Thejayadad
        </div>
    </div>
</footer>

  )
}

export default Footer