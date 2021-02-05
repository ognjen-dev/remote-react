import React from 'react'
import HeroIcons from './HeroIcons.jsx'
import Logo from '../Images/stock-logo.png'
import BackGround from '../Images/pozadina.png'
import './Hero.css'

const Hero = () => {
    return (
        <div> 
            <div className="absolute inset-0 z-negative lg:opacity-100 opacity-100 md:-my-96">
                <img src={BackGround} className="object-cover w-full h-full"/>
            </div>
            <div className="p-2 md:z-40 z-40">
                <div>
                    <div className="flex md:items-center sm:flex sm:flex-row md:flex md:justify-between">
                        <div className="flex-1 min-w-0">
                            <div className="flex md:flex">
                                <button type="button" className="hidden mr-2 md:block inline-flex sm:inline-flex items-center px-4 py-3 border border-white rounded-md shadow-sm text-sm font-medium text-white bg-none hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2">
                                    RSS
                                </button>
                                <button type="button" className="hidden md:block inline-flex sm:inline-flex items-center px-4 py-3 border border-white rounded-md shadow-sm text-sm font-medium text-white bg-none hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2">
                                    API
                                </button>
                            </div>
                        </div>
                        <div className="flex md:mt-0 md:ml-4 sm:max-w-6x1 sm:ml-4 sm:mt-0">
                            <button type="button" className="transform hover:scale-105 motion-reduce:transform-none ml-3 inline-flex items-center px-4 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Find a job
                            </button>
                        </div>
                    </div>
                    <div className="flex m-10 sm:flex sm:flex-row flex-row justify-center">
                        <img src={Logo} />
                    </div>
                    <div className="flex sm:flex sm:flex-row flex-row justify-center sm:justify-center my-12 sm:my-12">
                        <div className="max-w-lg md:w-full md:max-w-xs lg:max-w-xs">
                            <label htmlFor="search" className="sr-only">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <input id="search" name="search" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Search" type="search"/>
                            </div>
                        </div>
                    </div>
                    <div className="lg:p-42 lg:my-10">
                    </div>
                    <div className="md:flex md:justify-center flex justify-center md:pt-4 lg:pt-16">
                        <HeroIcons />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
