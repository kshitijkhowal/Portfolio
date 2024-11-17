import React from 'react'
import logo from "../assets/KK_initials.png"
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";

const navbar = () => {
    return (
        <nav className="mb-20 flex item-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img src={logo} alt="" className="mx-2 w-10" />
                
            </div>
            <div className="m-8 flex item-center justify-center gap-4 text-2xl">
                <FaLinkedin />
                <FaGithub />
                <SiLeetcode />
                <SiGeeksforgeeks />
            </div>
        </nav>
    )
}

export default navbar
