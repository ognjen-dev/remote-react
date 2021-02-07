import React from 'react'

const Footer = () => {
    return (
        <div className="h-14 border-t fixed left-0 bottom-0 bg-white w-full flex justify-end">
            <button className="ml-3 px-5 my-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <p className="">Sticky Footer</p>
            </button>
        </div>
    )
}

export default Footer
