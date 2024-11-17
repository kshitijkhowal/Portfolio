import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { HERO_CONTENT } from "../constants/index.js";
import profilePic from "../assets/bgKshitij_blue.jpg";
import { FaEnvelope, FaDownload } from "react-icons/fa"; // Importing icons

const Hero = () => {
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
        <div className="border-b border-neutral-900 pb-8 lg:pb-16">
            <div className="flex flex-wrap">
                {/* Text Section */}
                <div className="w-full lg:w-1/2 px-6 lg:px-12">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-8 text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-thin tracking-tight lg:mt-16">
                            Kshitij Khowal
                        </h1>
                        <span className="text-2xl sm:text-3xl lg:text-4xl tracking-tight">I am a</span>
                        <div className="w-auto">
                            <span
                                ref={typedElementRef}
                                className="w-auto bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-3xl lg:text-4xl tracking-tight text-transparent"
                            ></span>
                        </div>

                        {/* Enhanced Buttons */}
                        <div className="mt-8 flex flex-col  gap-4 sm:gap-6 py-8 justify-items-center">
                            <a
                                href="mailto:kshitijkhowal@example.com"
                                className="flex items-center justify-center gap-3 px-4 sm:px-6 py-2 sm:py-3 text-white bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
                            >
                                <FaEnvelope className="text-lg sm:text-xl" /> Contact Me
                            </a>
                            <a
                                href="/path/to/your_resume.pdf"
                                download
                                className="flex items-center justify-center gap-3 px-4 sm:px-6 py-2 sm:py-3 text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
                            >
                                <FaDownload className="text-lg sm:text-xl" /> Download Resume
                            </a>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full lg:w-1/2 px-6 lg:px-12 lg:p-8">
                    <div className="flex justify-center">
                        <img
                            src={profilePic}
                            alt="Profile picture of Kshitij Khowal"
                            className="transition-transform duration-300 hover:scale-105 rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
