import React from 'react'
import LeftSide from './LeftSide.jsx'
import RightSide from './RightSide.jsx'
import HeaderBox from './HeaderBox.jsx'
import Footer from './Footer.jsx'

const Hire = () => {
    return (
        <div className="">
            <HeaderBox />

            <div className="lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col">

                <div className="lg:max-w-6xl md:w-full lg:p-12 mx-2">
                    <LeftSide />
                </div>

                <div className="border-l border-r border-b lg:w-3/5">
                    <RightSide />
                </div>
            
            </div>
            <div>
                    <Footer />
            </div>

        </div>
    )
}

export default Hire
