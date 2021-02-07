import React from 'react'
import Logo from '../../Images/stock-logo.png'
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'

const HeaderBox = () => {
    return (
        <div className="pt-1">
            <div className="flex lg:flex lg:p-2 lg:items-center border-b lg:justify-between p-0 justify-center">
                <div className="">
                    <img src={Logo} />
                </div>
                <div className="hidden md:block lg:-ml-44 font-bold text-lg">
                    Hire Remotely
                </div>
                <div className="">
                    <button type="button" className="transform hover:scale-105 motion-reduce:transform-none ml-3 px-4 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <Link to="/">Start now!</Link>
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default HeaderBox
