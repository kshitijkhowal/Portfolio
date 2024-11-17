import React, { useEffect, useRef } from "react"
import Typed from "typed.js"
import {HERO_CONTENT} from "../constants/index.js"
import profilePic from "../assets/bgKshitij_blue.jpg"



const hero = () => {
    const typedElementRef = useRef(null);

    useEffect(() => {
        // Options for the Typed.js initialization
        const options = {
            strings: ["Node Developer.", "React Developer.", "Full Stack Web Developer."],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true,
        };

        // Create the Typed instance and pass the ref
        const typed = new Typed(typedElementRef.current, options);

        // Clean up the Typed instance on unmount
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Kshitij Khowal</h1>

                        <span className="text-4xl tracking-tight">I am a</span>
                        <div className="w-auto">
                            <span ref={typedElementRef} className="w-auto bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            </span>
                        </div>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <img src={profilePic} alt="Kshitij Khowal" className="transition-transform duration-300 hover:scale-105 rounded-2xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default hero
