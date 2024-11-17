import blogWebsiteImage from "../assets/projects/BlogWebsiteProject.png";
import cocktailCreatorImage from "../assets/projects/CocktailCreatorProject.png";
import simonGameImage from "../assets/projects/SimonProject.png";
// import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I'm Kshitij, a passionate software developer with a knack for creating efficient and engaging web applications. Currently pursuing a B.Tech in Engineering Physics at Delhi Technological University, I've developed a strong foundation in problem-solving and full-stack development. With experience in frameworks like React, Node.js, and databases like PostgreSQL and MongoDB, I love bringing ideas to life through clean and scalable code.

Beyond programming, I'm a curious learner who enjoys exploring how technology can be used for good. My projects, from building a dynamic Cocktail Creator app to developing a feature-rich Blog Website, reflect my commitment to blending functionality with a great user experience. In my free time, I enjoy music, evening walks, and discovering new ways to grow as a developer.`;

export const EXPERIENCES = [
    {
        year: "May 2024 - July 2024",
        role: "Junior Software Developer",
        company: "Growth Marketers",
        description: `Developed CRM modules using JavaScript, React, Node.js with Express, ensuring smooth data flow.Integrated Google OAuth for secure login, performed testing and debugging to enhance software quality.
`,
        technologies: ["Javascript", "React.js", "Node.js", "PostgreSQL"],
    },

];

export const PROJECTS = [
    {
        title: "Cocktail Creator",
        image: cocktailCreatorImage, // Replace with the actual image reference
        description:
            "A dynamic web app that uses an external API to display drink recipes and information, featuring real-time data rendering and search functionality.",
        technologies: ["Node.js", "Express", "EJS", "Axios"],
    },
    {
        title: "Blog Website",
        image: blogWebsiteImage, // Replace with the actual image reference
        description:
            "A full CRUD application for creating, updating, and deleting blog posts, with efficient data storage and retrieval using PostgreSQL.",
        technologies: ["React", "Node.js", "PostgreSQL", "HTML", "CSS"],
    },
    {
        title: "Simon Game",
        image: simonGameImage, // Replace with the actual image reference
        description:
            "An interactive pattern-matching memory game, built with engaging animations and sound effects for a fun user experience.",
        technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
    },
];

export const CONTACT = {
    address: "Delhi, India",
    phoneNo: "+91 8287159748",
    email: "kshitij.durgesh@gmail.com",
};