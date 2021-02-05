import React from 'react'
import Job from './Job.jsx'
import Adspace from './Adspace.jsx'

const Jobs = () => {
    return (
        <div className="md:px-22 lg:px-44">
            <div className="md:flex flex md:flex-col flex-col md:items-center items-center">
                <Adspace />
                <ul className="divide-y divide-gray-200 w-4/5">
                    <Job />
                    <Job />
                    <Job />
                    <Job />
                    <Job />
                    <Job />
                </ul>
            </div>
        </div>
    )
}

export default Jobs
