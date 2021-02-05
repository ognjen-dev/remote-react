import React from 'react'

const HeroIcon = () => {
    return (
        <div className="md:flex md:justify-center flex justify-center md:pt-4 lg:pt-16">
            <div className="md:flex flex md:flex-col flex-col md:p-6 p-6 text-center md:text-center">
                <svg className="h-8 w-8 text-gray-400 text-center self-center justify-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                </svg>
                <div>
                    text
                </div>
            </div>
        </div>
    )
}

export default HeroIcon
