import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import logo from '../assets/KK_initials.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const Navbar = () => {
    return (
        <motion.nav
            className="mb-20 flex items-center justify-between py-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            {/* Logo Section */}
            <a href="./">
            <div className="flex flex-shrink-0 items-center">
                <motion.img
                    src={logo}
                    alt="Kshitij Khowal Logo"
                    className="mx-2 w-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                />
            </div>
            </a>

            {/* Social Icons Section */}
            <motion.div
                className="m-8 flex items-center justify-center gap-4 text-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <motion.a
                    href="https://www.linkedin.com/in/kshitijkhowal"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaLinkedin />
                </motion.a>
                <motion.a
                    href="https://github.com/kshitijkhowal"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaGithub />
                </motion.a>
                <motion.a
                    href="https://leetcode.com/kshitijkhowal"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <SiLeetcode />
                </motion.a>
                <motion.a
                    href="https://www.geeksforgeeks.org/user/kshitijdq4nk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <SiGeeksforgeeks />
                </motion.a>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;
