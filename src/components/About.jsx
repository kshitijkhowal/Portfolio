import React from 'react'
import aboutImg from "../assets/bgKshitij_blue.jpg"
import {ABOUT_TEXT} from "../constants/index"

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className='my-20 text-center text-4xl'>About <span className="text-neutral-500">Me</span></h2>
            <div className="flex flex-wrap">
                {/* <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className="flex items-center justify-center">
                        <img className="rounded-2xl maxw-l" src={aboutImg} alt="" />
                    </div>
                </div> */}
                    <div className="w-full lg:w">
                        <div className="flex justify-center lg:justify-start">
                            <p className="my-2 maxw-xl py-6">{ABOUT_TEXT}</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default About
