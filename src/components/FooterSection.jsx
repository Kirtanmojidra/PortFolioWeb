import React from "react";

const FooterSection = () => {
    return (
        <footer className="bg-neutral-900 text-white pt-20 pb-10 w-screen overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Top Section with Logo and Newsletter */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between mb-16 gap-10">
                    {/* Logo and Tagline */}
                    <div className="flex flex-col items-center lg:items-start max-w-md">
                        <div className="flex items-center mb-4">
                            <div className="h-12 w-12 rounded-full bg-amber-500 flex items-center justify-center">
                                <span className="font-bold text-xl text-black">KM</span>
                            </div>
                            <h2 className="text-2xl font-bold ml-3">Kirtan Mojidra</h2>
                        </div>
                        <p className="text-neutral-400 text-center lg:text-left">
                            Building exceptional digital experiences with modern web technologies.
                            Let's create something amazing together.
                        </p>
                    </div>

                    
                </div>

                {/* Middle Section with Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-5 text-amber-400">Navigation</h3>
                        <ul className="space-y-3">
                            <li><a href="#home" className="text-neutral-400 hover:text-amber-400 transition-colors duration-300">Home</a></li>
                            <li><a href="#about" className="text-neutral-400 hover:text-amber-400 transition-colors duration-300">About</a></li>
                            <li><a href="#projects" className="text-neutral-400 hover:text-amber-400 transition-colors duration-300">Projects</a></li>
                            <li><a href="#skills" className="text-neutral-400 hover:text-amber-400 transition-colors duration-300">Skills</a></li>
                            <li><a href="#contact" className="text-neutral-400 hover:text-amber-400 transition-colors duration-300">Contact</a></li>
                        </ul>
                    </div>


                    {/* Technologies */}
                    <div>
                        <h3 className="text-lg font-semibold mb-5 text-amber-400">Technologies</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-neutral-400 hover:text-amber-400 transition-colors duration-300">React</a></li>
                            <li><a href="#" className="text-neutral-400 hover:text-amber-400 transition-colors duration-300">Next.js</a></li>
                            <li><a href="#" className="text-neutral-400 hover:text-amber-400 transition-colors duration-300">TailwindCSS</a></li>
                            <li><a href="#" className="text-neutral-400 hover:text-amber-400 transition-colors duration-300">Node.js</a></li>
                            <li><a href="#" className="text-neutral-400 hover:text-amber-400 transition-colors duration-300">MongoDB</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-5 text-amber-400">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center text-neutral-400 ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                <a href="mailto:kirtanmojidra01@gmail.com" className="hover:text-amber-400 transition-colors duration-300">
                                    kirtanmojidra01@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center text-neutral-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <span>Ahmedabad, Gujarat, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent mb-8"></div>

                {/* Copyright and Back to Top */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-neutral-500 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} Kirtan Mojidra. All rights reserved.
                    </p>

                    <div className="flex items-center justify-center">
                        <p className="text-neutral-500 text-sm mr-8">
                            Crafted with <span className="text-red-500">❤</span> using React & TailwindCSS
                        </p>

                        <a
                            href="#top"
                            className="group flex absolute right-3 animate-bounce items-center justify-center h-10 w-10 bg-neutral-800 hover:bg-amber-500 rounded-full transition-all duration-300"
                            aria-label="Back to top"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-amber-400 group-hover:text-black transition-colors duration-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterSection