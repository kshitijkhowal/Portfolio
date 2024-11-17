import React, { useState } from 'react';
// Programming Languages
import { SiC, SiCplusplus, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
// Frameworks & Libraries
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiJquery, SiTailwindcss, SiBootstrap } from "react-icons/si";
// Tools & Technologies
import { SiMongodb, SiPostgresql, SiWindows, SiLatex, SiPostman, SiCanva, SiGit } from "react-icons/si";

const Technologies = () => {
    return (
        <div className="border-b border-neutral-900 pb-8 overflow-x-hidden">
            <h2 className='my-20 text-center text-4xl ml-8'><span className="text-neutral-500">My</span> Skills</h2>

            {/* Programming Languages */}
            <div className="mb-12 ml-8">
                <h3 className="text-3xl text-left text-purple-400 mb-6">Programming Languages</h3>
                <div className="flex flex-wrap items-center gap-4">
                    {renderCard(SiC, "C")}
                    {renderCard(SiCplusplus, "C++")}
                    {renderCard(SiJavascript, "JavaScript", "text-yellow-500", "border-yellow-500")}
                    {renderCard(SiHtml5, "HTML5", "text-orange-600", "border-orange-600")}
                    {renderCard(SiCss3, "CSS3", "text-blue-500", "border-blue-500")}
                </div>
            </div>

            {/* Frameworks & Libraries */}
            <div className="mb-12 ml-8">
                <h3 className="text-3xl text-left text-purple-400 mb-6">Frameworks & Libraries</h3>
                <div className="flex flex-wrap items-center gap-4">
                    {renderCard(RiReactjsLine, "ReactJS", "text-cyan-400", "border-cyan-400")}
                    {renderCard(TbBrandNextjs, "NextJS", "text-gray-800", "border-gray-800")}
                    {renderCard(FaNodeJs, "NodeJS", "text-green-500", "border-green-500")}
                    {renderCard(SiExpress, "ExpressJS", "text-gray-600", "border-gray-600")}
                    {renderCard(SiJquery, "jQuery", "text-blue-400", "border-blue-400")}
                    {renderCard(SiTailwindcss, "Tailwind CSS", "text-teal-400", "border-teal-400")}
                    {renderCard(SiBootstrap, "Bootstrap", "text-purple-600", "border-purple-600")}
                </div>
            </div>

            {/* Tools & Technologies */}
            <div className="ml-8">
                <h3 className="text-3xl text-left text-purple-400 mb-6">Tools & Technologies</h3>
                <div className="flex flex-wrap items-center gap-4">
                    {renderCard(SiPostgresql, "PostgreSQL", "text-blue-600", "border-blue-600")}
                    {renderCard(SiMongodb, "MongoDB", "text-green-600", "border-green-600")}
                    {renderCard(SiWindows, "Windows", "text-blue-700", "border-blue-700")}
                    {renderCard(SiLatex, "LaTeX", "text-green-800", "border-green-800")}
                    {renderCard(SiPostman, "Postman", "text-orange-500", "border-orange-500")}
                    {renderCard(SiCanva, "Canva", "text-blue-400", "border-blue-400")}
                    {renderCard(SiGit, "Git", "text-red-600", "border-red-600")}
                </div>
            </div>
        </div>
    );
};

const renderCard = (Icon, name, colorClass = "", borderColorClass = "") => {
    const [flipped, setFlipped] = useState(false);

    const handleMouseEnter = () => {
        setFlipped(true);
        setTimeout(() => {
            setFlipped(false);
        }, 2000); // 3 seconds delay before reverting
    };

    const cardStyles = {
        perspective: "1000px",
    };
    const cardInnerStyles = {
        position: "relative",
        width: "100%",
        height: "100%",
        transformStyle: "preserve-3d",
        transition: "transform 0.6s",
        transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
    };
    const cardFrontBackStyles = {
        position: "absolute",
        width: "100%",
        height: "100%",
        backfaceVisibility: "hidden",
        borderRadius: "12px",
    };
    const cardBackStyles = {
        ...cardFrontBackStyles,
        transform: "rotateY(180deg)",
        backgroundColor: "#1A1A1A", // Dark background for the back side
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "4px solid", // Add a border
    };

    return (
        <div className="group relative w-24 h-24" style={cardStyles} onMouseEnter={handleMouseEnter}>
            <div className="card-inner" style={cardInnerStyles}>
                {/* Front Side */}
                <div className={`card-front flex items-center justify-center border-4 border-neutral-800 p-4 ${colorClass}`} style={cardFrontBackStyles}>
                    <Icon className={`text-7xl ${colorClass}`} />
                </div>
                {/* Back Side */}
                <div className={`card-back text-white text-lg ${borderColorClass}`} style={cardBackStyles}>
                    {name}
                </div>
            </div>
        </div>
    );
};

export default Technologies;
