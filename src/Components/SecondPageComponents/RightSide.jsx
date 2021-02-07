import React from 'react'
import SmallAd from './SmallAd.jsx'
import Review from './Review.jsx'

const RightSide = () => {
    return (
        <div>
            <div className="border-b pb-10 mt-3 flex flex-col items-center">
                <p className="w-full lg:w-full text-l text-center text-gray-400">
                    Business Name is the most popular remote job board in Montenegro trusted by thousands of remote workers and companies. Such as
                </p>
                <p className="text-center text-xs text-gray-400 mt-16">
                    Logo Row
                </p>
                <p className="text-center text-xs text-gray-400 mt-16">
                    Logo Row
                </p>
                <p className="text-center text-xs text-gray-400 mt-16">
                    Logo Row
                </p>
            </div>
                <SmallAd />
                <SmallAd />
                <SmallAd />
                <Review />
                <Review />
                <Review />
                <Review />
        </div>
    )
}

export default RightSide
