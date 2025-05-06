import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";
import "./index.css";
import CssLogo from "./assets/css.jpg";
import HtmlLogo from "./assets/html.png";
import JavascriptLogo from "./assets/javascript.png";
import ReactLogo from "./assets/react.png";
import TailwindLogo from "./assets/tailwind.png";
import NodejsLogo from "./assets/nodejs.png";
import PythonLogo from "./assets/python.png";
import MongodbLogo from "./assets/monogodb.png";
import PostgressLogo from "./assets/postgress.png";
import MysqlLogo from "./assets/mysql.png";
import RestapiLogo from "./assets/restapi.png";
import ToolkitLogo from "./assets/toolkit.jpg";
import FrontendLogo from "./assets/frontend.webp";
import BackendLogo from "./assets/backend.png";
import GitLogo from "./assets/git.png";
import MainLogo from "./assets/971.jpg";
import AboutLogo from "./assets/about.avif";
import DjangoLogo from "./assets/django.png";
import ollamachatui from "./assets/ollamachatui.png";
import BlogToHeaven from "./assets/blogtoheaven.png";

function App() {
  const positions = [
    "A Developer",
    "A Designer",
    "A Web Developer",
    "Frontend Developer",
    "React Wizard",
    "UI/UX Enthusiast",
    "Code Artist",
  ];
  const logos = [
    CssLogo,
    JavascriptLogo,
    MongodbLogo,
    NodejsLogo,
    ReactLogo,
    GitLogo,
    HtmlLogo,
    PythonLogo,
    MysqlLogo,
    PostgressLogo,
    DjangoLogo,
  ];
  const loopedLogos = [...logos, ...logos];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 50;
  const deletingSpeed = 50;
  const pause = 1000;

  useEffect(() => {
    const currentWord = positions[wordIndex % positions.length];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setText((prev) => currentWord.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % positions.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <>
      <header className="fixed w-full top-0 bg-black/60 backdrop-blur-lg shadow-md py-4 z-50 justify-center">
        <div className="container mx-auto flex justify-between items-center px-4">
          <a
            href="#hero"
            className="flex items-center text-xl font-bold text-white"
          >
            <span className="text-sky-500">&lt;/&gt;</span> KirtanMojidra
          </a>
          <nav className="hidden md:flex space-x-6 text-white">
            <a href="#hero" className="nav-link hover:text-orange-500">
              Home
            </a>
            <a href="#about" className="nav-link hover:text-orange-500">
              About
            </a>
            <a href="#skills" className="nav-link hover:text-orange-500">
              Skills
            </a>
            <a href="#projects" className="nav-link hover:text-orange-500">
              Projects
            </a>
            <a href="#contact" className="nav-link hover:text-orange-500">
              Contact
            </a>
            <a href="#resume" className="btn-outline hover:text-orange-500">
              Resume
            </a>
          </nav>
          <button id="menu-btn" className="md:hidden">
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
        <div
          id="menu"
          className="hidden md:hidden flex flex-col space-y-4 mt-4 px-4"
        >
          <a href="#hero" className="nav-link">
            Home
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#skills" className="nav-link">
            Skills
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
          <a href="#resume" className="btn-outline">
            Resume
          </a>
        </div>
      </header>
      <div className="">
        <main
          id="main-content"
          className="flex-1 relative overflow-hidden w-full bg-gradient-to-br from-black via-gray-900 to-black"
        >
          <section
            id="hero"
            className="relative min-h-screen flex items-center overflow-hidden transition-all duration-700 ease-in-out"
          >
            <div className="container mx-auto px-6 lg:px-8 relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="w-full lg:w-1/2 order-2 lg:order-1 space-y-6 mt-8 lg:mt-0">
                  <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-block px-3 py-1 bg-gradient-to-r from-amber-400 to-amber-600 text-gray-900 rounded-full text-sm font-medium shadow-lg"
                  >
                    Full-Stack Developer
                  </motion.span>
                  <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-white text-4xl md:text-6xl font-semibold font-serif"
                  >
                    Hi, I'm{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                      Kirtan
                    </span>{" "}
                    and <br />
                    I'm{" "}
                    <span
                      id="typed-text"
                      className="bg-gradient-to-r from-teal-400 to-emerald-500 text-transparent bg-clip-text"
                    >
                      {text}
                    </span>
                    <span className="animate-pulse font-serif font-bold text-amber-400">
                      |
                    </span>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-300 max-w-2xl overflow-hidden whitespace-nowrap border-r-4 border-r-amber-400"
                  >
                    I build beautiful, responsive websites and applications with
                    clean code and exceptional user experiences.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 pt-4"
                  >
                    <a
                      href="#projects"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-700 border border-amber-600 shadow-lg hover:shadow-amber-500/30 text-gray-900 font-medium transition-all hover:scale-110 hover:shadow-lg transform duration-300"
                    >
                      View My Work
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" />
                      </svg>
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white bg-gradient-to-r from-purple-500 to-purple-700 border border-purple-600 shadow-lg hover:shadow-purple-500/30 font-medium transition-all transform duration-300"
                    >
                      Contact Me
                    </a>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex items-center pt-6 gap-4"
                  >
                    <p className="text-sm text-gray-400">Tech Stack:</p>
                    <div className="overflow-hidden w-full bg-transparent py-6">
                      <motion.div
                        className="flex w-max gap-10"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                          repeat: Infinity,
                          duration: 30,
                          ease: "linear",
                        }}
                      >
                        {loopedLogos.map((logo, index) => (
                          <div key={index} className="flex-shrink-0">
                            <img
                              src={logo}
                              alt={`logo-${index}`}
                              className="h-12 object-contain rounded-md transition-transform transform hover:scale-110 filter brightness-90 hover:brightness-110"
                            />
                          </div>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
                <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <div className="hidden md:block md:relative z-10 rounded-2xl shadow-2xl shadow-amber-500/20 overflow-hidden border border-gray-700 transform transition-transform hover:scale-105">
                      <img
                        src={MainLogo}
                        alt="Professional developer working"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="absolute top-5 -right-5 z-20 bg-gray-800/80 p-3 rounded-xl shadow-lg shadow-amber-500/10 rotate-3 hidden md:flex items-center gap-2 backdrop-blur-sm border border-gray-700"
                  >
                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                    <span className="text-sm font-medium text-amber-400">
                      Available for hire
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="absolute -inset-4 -z-10 bg-gradient-to-r from-purple-900/20 to-purple-600/20 rounded-3xl transform -rotate-3 animate-float"
                  ></motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    className="absolute -inset-4 -z-20 bg-gradient-to-r from-amber-900/20 to-amber-600/20 rounded-3xl transform rotate-3 animate-float"
                  ></motion.div>
                </div>
              </div>
            </div>
            {/* Subtle particle effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-20 left-10 w-4 h-4 rounded-full bg-amber-500 opacity-20 animate-pulse"></div>
              <div className="absolute top-40 right-20 w-3 h-3 rounded-full bg-purple-500 opacity-20 animate-pulse"></div>
              <div className="absolute bottom-40 left-1/4 w-5 h-5 rounded-full bg-teal-500 opacity-10 animate-pulse"></div>
              <div className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-pink-500 opacity-10 animate-pulse"></div>
            </div>
          </section>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce"
          >
            <a
              href="#about"
              className="p-2 rounded-full bg-gray-800 text-amber-400 shadow-lg shadow-amber-500/10 transform transition-transform hover:scale-110 border border-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </motion.div>
        </main>
        <section
          id="about"
          className="py-24 relative overflow-hidden bg-gradient-to-b from-black to-gray-900"
        >
          {/* Subtle golden accent lines */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>

          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-amber-900/40 to-amber-700/40 text-amber-400 rounded-full text-sm font-medium mb-4 border border-amber-600/30 shadow-inner shadow-amber-900/20">
                About Me
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-gray-200 to-white text-transparent bg-clip-text">
                  Passionate Developer
                </span>
                <span className="h-fit block mt-1 bg-gradient-to-r from-amber-400 to-amber-600 text-transparent bg-clip-text py-1.5">
                  Creating Digital Excellence
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
                I craft exquisite digital experiences with meticulous attention
                to detail, focusing on performance, accessibility, and
                sophisticated user interfaces.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Column - Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:col-span-5 relative"
              >
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                  <img
                    src={AboutLogo}
                    alt="Professional software developer"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Decorative elements around image */}
                <div className="absolute -top-4 -left-4 h-24 w-24 border border-amber-700/30 rounded-full -z-10"></div>
                <div className="absolute -bottom-6 -right-8 h-40 w-40 border border-purple-700/30 rounded-full -z-10"></div>

                {/* Status badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute top-8 -right-6 bg-gray-900/90 py-2 px-4 shadow-lg rounded-lg z-20 backdrop-blur-sm border border-amber-600/30"
                >
                  <p className="text-sm font-medium flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                    <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-transparent bg-clip-text font-semibold">
                      Available for hire
                    </span>
                  </p>
                </motion.div>
              </motion.div>

              {/* Right Column - Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="lg:col-span-7 space-y-8"
              >
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                  The Art of Development
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  As a full-stack developer with a passion for excellence, I
                  transform complex challenges into elegant, efficient
                  solutions. My work combines technical expertise with creative
                  vision to deliver exceptional digital experiences that exceed
                  expectations.
                </p>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 shadow-lg hover:shadow-amber-900/20 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-400/20 to-amber-600/20 flex items-center justify-center group-hover:from-amber-400/30 group-hover:to-amber-600/30 transition-all duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-amber-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          />
                        </svg>
                      </div>
                      <h4 className="font-bold text-xl text-white group-hover:text-amber-400 transition-colors duration-300">
                        Front-End Mastery
                      </h4>
                    </div>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      Expert craftsmanship in React, Vue, and modern JavaScript
                      frameworks with meticulous attention to responsive design
                      and user experience.
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 shadow-lg hover:shadow-purple-900/20 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400/20 to-purple-600/20 flex items-center justify-center group-hover:from-purple-400/30 group-hover:to-purple-600/30 transition-all duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-purple-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
                          />
                        </svg>
                      </div>
                      <h4 className="font-bold text-xl text-white group-hover:text-purple-400 transition-colors duration-300">
                        Back-End Excellence
                      </h4>
                    </div>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      Building sophisticated APIs and services using Node.js,
                      Python, and advanced database architectures for optimal
                      performance.
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 shadow-lg hover:shadow-teal-900/20 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-400/20 to-teal-600/20 flex items-center justify-center group-hover:from-teal-400/30 group-hover:to-teal-600/30 transition-all duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-teal-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                          />
                        </svg>
                      </div>
                      <h4 className="font-bold text-xl text-white group-hover:text-teal-400 transition-colors duration-300">
                        UI/UX Design
                      </h4>
                    </div>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      Creating intuitive interfaces with sophisticated
                      user-centered design principles and comprehensive
                      usability testing methodologies.
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 shadow-lg hover:shadow-rose-900/20 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-rose-400/20 to-rose-600/20 flex items-center justify-center group-hover:from-rose-400/30 group-hover:to-rose-600/30 transition-all duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-rose-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <h4 className="font-bold text-xl text-white group-hover:text-rose-400 transition-colors duration-300">
                        Performance Optimization
                      </h4>
                    </div>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      Engineering applications for exceptional speed and
                      efficiency, employing cutting-edge techniques and tools
                      for optimal user experience.
                    </p>
                  </motion.div>
                </div>

                {/* Development Process */}
                <div className="mt-14 relative">
                  <h3 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                    My Development Philosophy
                  </h3>

                  {/* Vertical line for the timeline */}
                  <div className="absolute left-0 top-16 bottom-0 w-px bg-gradient-to-b from-amber-600/70 via-amber-400/50 to-amber-600/30"></div>

                  <div className="space-y-10 relative">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="pl-8 relative"
                    >
                      <div className="absolute left-0 top-0 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 shadow-lg shadow-amber-500/30 flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-900">
                          1
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        Discovery & Vision
                      </h4>
                      <p className="text-gray-400">
                        Comprehensive consultation to understand your goals,
                        challenges, and unique requirements, establishing a
                        clear vision for success.
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="pl-8 relative"
                    >
                      <div className="absolute left-0 top-0 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 shadow-lg shadow-amber-500/30 flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-900">
                          2
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        Strategic Architecture
                      </h4>
                      <p className="text-gray-400">
                        Creating sophisticated prototypes and technical
                        specifications, laying the foundation for a robust and
                        scalable solution.
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="pl-8 relative"
                    >
                      <div className="absolute left-0 top-0 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 shadow-lg shadow-amber-500/30 flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-900">
                          3
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        Precision Development
                      </h4>
                      <p className="text-gray-400">
                        Executing with meticulous attention to detail, employing
                        clean code practices and maintaining regular feedback
                        cycles for refinement.
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Call to Action */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mt-12 flex"
                >
                  <a
                    href="#contact"
                    className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-lg bg-black text-white shadow-md transition-all duration-500"
                  >
                    <div className="absolute inset-0 w-0 bg-gradient-to-r from-amber-600 to-amber-500 transition-all duration-300 ease-out group-hover:w-full"></div>
                    <span className="relative flex items-center font-medium transition-colors duration-300 group-hover:text-gray-900">
                      Connect With Me
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Background decorative elements */}
          <div className="absolute bottom-10 right-10 opacity-20">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M40 0L40 80" stroke="url(#grad1)" strokeWidth="2" />
              <path d="M0 40L80 40" stroke="url(#grad1)" strokeWidth="2" />
              <defs>
                <linearGradient
                  id="grad1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#D4A017" stopOpacity="0" />
                  <stop offset="50%" stopColor="#D4A017" />
                  <stop offset="100%" stopColor="#D4A017" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </section>

        <section
          id="skills"
          className="py-24 bg-gradient-to-b from-black via-slate-950 to-slate-900 text-white"
        >
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold h-fit block mt-1 bg-gradient-to-r from-amber-400 to-amber-600 text-transparent bg-clip-text py-1.5">
                Skills & Expertise
              </h2>
              <div className="w-48 mt-2 h-1 bg-gradient-to-r from-amber-500 to-amber-300 mx-auto mb-6"></div>
              <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
                My technical toolkit and proficiencies that drive successful web
                development projects.
              </p>
            </div>

            {/* Skills Grid */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {/* Frontend Development Card */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-amber-500/20 backdrop-blur-xl rounded-xl p-8 shadow-xl shadow-amber-900/10 transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-800/20 group">
                  <div className="flex items-start mb-6">
                    <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 mr-5 shadow-lg shadow-amber-600/20">
                      <div className="w-full h-full rounded-md bg-slate-900 flex items-center justify-center overflow-hidden">
                        <img
                          src={FrontendLogo}
                          alt="Frontend Development"
                          className="w-16 h-16 object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                        Frontend Development
                      </h3>
                      <p className="text-neutral-400">
                        Interactive and responsive interfaces
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex items-center bg-slate-800/70 rounded-lg p-2 transition-all hover:bg-slate-700">
                      <img
                        src={HtmlLogo}
                        className="h-8 w-8 rounded-md mr-2"
                        alt="HTML"
                      />
                      <h1 className="text-neutral-200">HTML</h1>
                    </div>
                    <div className="flex items-center bg-slate-800/70 rounded-lg p-2 transition-all hover:bg-slate-700">
                      <img
                        src={CssLogo}
                        className="h-8 w-8 rounded-md mr-2"
                        alt="CSS"
                      />
                      <h1 className="text-neutral-200">CSS</h1>
                    </div>
                    <div className="flex items-center bg-slate-800/70 rounded-lg p-2 transition-all hover:bg-slate-700">
                      <img
                        src={JavascriptLogo}
                        className="h-8 w-8 mr-2"
                        alt="JavaScript"
                      />
                      <h1 className="text-neutral-200">JavaScript</h1>
                    </div>
                    <div className="flex items-center bg-slate-800/70 rounded-lg p-2 transition-all hover:bg-slate-700">
                      <img
                        src={TailwindLogo}
                        className="h-8 w-8 rounded-md mr-2"
                        alt="Tailwind"
                      />
                      <h1 className="text-neutral-200">Tailwind</h1>
                    </div>
                    <div className="flex items-center bg-slate-800/70 rounded-lg p-2 transition-all hover:bg-slate-700">
                      <img
                        src={ReactLogo}
                        className="h-8 w-8 rounded-md mr-2"
                        alt="ReactJS"
                      />
                      <h1 className="text-neutral-200">ReactJS</h1>
                    </div>
                  </div>
                </div>

                {/* Backend Development Card */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-amber-500/20 backdrop-blur-xl rounded-xl p-8 shadow-xl shadow-amber-900/10 transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-800/20 group">
                  <div className="flex items-start mb-6">
                    <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 mr-5 shadow-lg shadow-amber-600/20">
                      <div className="w-full h-full rounded-md bg-slate-900 flex items-center justify-center overflow-hidden">
                        <img
                          src={BackendLogo}
                          alt="Backend Development"
                          className="w-16 h-16 object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                        Backend Development
                      </h3>
                      <p className="text-neutral-400">
                        Robust server-side solutions
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex items-center bg-slate-800/70 rounded-lg p-2 transition-all hover:bg-slate-700">
                      <img
                        src={NodejsLogo}
                        className="h-8 w-8 rounded-md mr-2"
                        alt="NodeJS"
                      />
                      <h1 className="text-neutral-200">NodeJS</h1>
                    </div>
                    <div className="flex items-center bg-slate-800/70 rounded-lg p-2 transition-all hover:bg-slate-700">
                      <img
                        src={PythonLogo}
                        className="h-8 w-8 rounded-md mr-2"
                        alt="Python"
                      />
                      <h1 className="text-neutral-200">Python</h1>
                    </div>
                    <div className="flex items-center bg-slate-800/70 rounded-lg p-2 transition-all hover:bg-slate-700">
                      <img
                        src={MongodbLogo}
                        className="h-8 w-10 rounded-md mr-2"
                        alt="MongoDB"
                      />
                      <h1 className="text-neutral-200">MongoDB</h1>
                    </div>
                    <div className="flex items-center bg-slate-800/70 rounded-lg p-2 transition-all hover:bg-slate-700">
                      <img
                        src={PostgressLogo}
                        className="h-8 w-8 rounded-md mr-2"
                        alt="PostGress"
                      />
                      <h1 className="text-neutral-200">PostgreSQL</h1>
                    </div>
                    <div className="flex items-center bg-slate-800/70 rounded-lg p-2 transition-all hover:bg-slate-700">
                      <img
                        src={MysqlLogo}
                        className="h-8 w-8 rounded-md mr-2"
                        alt="MYSQL"
                      />
                      <h1 className="text-neutral-200">MYSQL</h1>
                    </div>
                  </div>
                </div>

                {/* Tools & Workflow Card */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-amber-500/20 backdrop-blur-xl rounded-xl p-8 shadow-xl shadow-amber-900/10 transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-800/20 group">
                  <div className="flex items-start mb-6">
                    <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 mr-5 shadow-lg shadow-amber-600/20">
                      <div className="w-full h-full rounded-md bg-slate-900 flex items-center justify-center overflow-hidden">
                        <img
                          src={ToolkitLogo}
                          alt="Tools and Workflow"
                          className="w-16 h-16 object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                        Tools & Workflow
                      </h3>
                      <p className="text-neutral-400">
                        Efficient development process
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex items-center bg-slate-800/70 rounded-lg p-2 transition-all hover:bg-slate-700">
                      <img
                        src={GitLogo}
                        className="h-8 w-8 rounded-md mr-2"
                        alt="Git"
                      />
                      <h1 className="text-neutral-200">Git</h1>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <div className="mt-20 text-center">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-amber-200 via-amber-100 to-amber-300 bg-clip-text text-transparent">
                Need a developer with these skills?
              </h3>
              <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how my expertise can bring your project to life
                with clean code and modern design.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 border border-amber-400 shadow-xl hover:shadow-amber-500/50 text-white font-medium transition-all duration-300 hover:scale-105 group"
              >
                <span className="mr-2">Contact Me</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="py-24 bg-gradient-to-b from-slate-900 via-black to-slate-950 text-white"
        >
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-600 text-transparent bg-clip-text p-1.5">
                Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-300 mx-auto mb-6"></div>
              <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
                Showcasing my latest web development work and technical
                expertise.
              </p>
            </div>

            {/* Featured Project 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="mb-24">
                <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl shadow-amber-900/10 border border-amber-500/20 group transform transition duration-500 hover:shadow-amber-800/20">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative h-80 md:h-auto overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30 z-10"></div>
                      <img
                        src={BlogToHeaven}
                        alt="BlogToHaven – Full-Stack Blogging Platform"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 z-20">
                        <span className="bg-gradient-to-r from-amber-600 to-amber-500 text-white text-xs py-1 px-3 rounded-full shadow-lg">
                          Featured Project
                        </span>
                      </div>
                    </div>
                    <div className="p-10 flex flex-col justify-center">
                      <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-400 to-amber-600 text-transparent bg-clip-text p-1">
                        BlogToHaven Full-Stack Blogging Platform
                      </h3>
                      <p className="text-neutral-300 my-5 leading-relaxed">
                        Designed and developed BlogToHaven, a full-stack
                        blogging platform aimed at empowering writers to
                        publish, share, and engage with content across various
                        categories.
                      </p>
                      <div className="flex flex-wrap gap-3 mb-8">
                        <span className="px-4 py-1.5 bg-amber-500/10 text-amber-300 border border-amber-500/30 rounded-full text-sm font-medium">
                          HTML, JS, CSS
                        </span>
                        <span className="px-4 py-1.5 bg-amber-500/10 text-amber-300 border border-amber-500/30 rounded-full text-sm font-medium">
                          Django
                        </span>
                        <span className="px-4 py-1.5 bg-amber-500/10 text-amber-300 border border-amber-500/30 rounded-full text-sm font-medium">
                          Jinja
                        </span>
                        <span className="px-4 py-1.5 bg-amber-500/10 text-amber-300 border border-amber-500/30 rounded-full text-sm font-medium">
                        PostgreSQL
                        </span>
                      </div>
                      <div className="flex gap-6">
                        <a
                          href="https://blogtoheaven.onrender.com/"
                          className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors font-medium group/link"
                        >
                          <span>View Demo</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 transition-transform duration-300 group-hover/link:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            ></path>
                          </svg>
                        </a>
                        <a
                          href="https://github.com/Kirtanmojidra/BlogToHeaven"
                          className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors font-medium group/link"
                        >
                          <span>Source Code</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 transition-transform duration-300 group-hover/link:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Featured Project 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className="mb-24">
                <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl shadow-amber-900/10 border border-amber-500/20 group transform transition duration-500 hover:shadow-amber-800/20">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative h-80 md:h-auto overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30 z-10"></div>
                      <img
                        src={ollamachatui}
                        alt="Ollama Chat UI - FrontEnd"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 z-20">
                        <span className="bg-gradient-to-r from-amber-600 to-amber-500 text-white text-xs py-1 px-3 rounded-full shadow-lg">
                          Featured Project
                        </span>
                      </div>
                    </div>
                    <div className="p-10 flex flex-col justify-center">
                      <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-400 to-amber-600 text-transparent bg-clip-text p-1">
                        Ollama Chat UI - FrontEnd
                      </h3>
                      <p className="text-neutral-300 my-5 leading-relaxed">
                        Developed a custom chat interface for Ollama that allows
                        users to run and interact with AI models locally and
                        completely offline.
                      </p>
                      <div className="flex flex-wrap gap-3 mb-8">
                        <span className="px-4 py-1.5 bg-amber-500/10 text-amber-300 border border-amber-500/30 rounded-full text-sm font-medium">
                          ReactJS
                        </span>
                        <span className="px-4 py-1.5 bg-amber-500/10 text-amber-300 border border-amber-500/30 rounded-full text-sm font-medium">
                          Redux
                        </span>
                      </div>
                      <div className="flex gap-6">
                        <a
                          href="#"
                          className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors font-medium group/link"
                        >
                          <span>Source Code</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 transition-transform duration-300 group-hover/link:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* View All Projects Button */}
            <div className="text-center mt-12">
              <button className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 border border-amber-400 shadow-xl hover:shadow-amber-500/50 text-white font-medium transition-all duration-300 hover:scale-105 group">
                <span className="mr-2">View All Projects</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>

            {/* Responsive Design Feature */}
            <div className="mt-24">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-amber-500/20 shadow-2xl shadow-amber-900/10 rounded-2xl p-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-amber-200 to-amber-300 bg-clip-text text-transparent">
                        Responsive Design Across Devices
                      </h3>
                      <p className="text-neutral-300 mb-8 leading-relaxed">
                        My projects are built with a mobile-first approach,
                        ensuring perfect functionality and aesthetics on all
                        screen sizes.
                      </p>
                      <div className="space-y-5">
                        <div className="flex items-start">
                          <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-1.5 rounded-full mt-1 mr-4 shadow-lg shadow-amber-600/20">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                          </div>
                          <p className="text-neutral-200 font-light">
                            Fluid layouts that adapt seamlessly to any screen
                            size
                          </p>
                        </div>
                        <div className="flex items-start">
                          <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-1.5 rounded-full mt-1 mr-4 shadow-lg shadow-amber-600/20">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                          </div>
                          <p className="text-neutral-200 font-light">
                            Touch-friendly interactions for mobile users
                          </p>
                        </div>
                        <div className="flex items-start">
                          <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-1.5 rounded-full mt-1 mr-4 shadow-lg shadow-amber-600/20">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                          </div>
                          <p className="text-neutral-200 font-light">
                            Performance optimization for faster loading on
                            mobile networks
                          </p>
                        </div>
                      </div>
                      <button className="mt-10 px-8 py-4 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 border border-amber-400 shadow-xl hover:shadow-amber-500/50 text-white font-medium transition-all duration-300 hover:scale-105 group">
                        <span className="mr-2">Learn About My Process</span>
                        <svg
                          className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="relative h-96 md:h-auto">
                      <div className="relative z-10 h-full">
                        <img
                          src="https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8d2ViJTJCZGV2ZWxvcGVyJTJCd29ya3NwYWNlJTJCd2l0aCUyQm11bHRpcGxlJTJCc2NyZWVuc3xlbnwwfHx8fDE3NDU4NDgyNzh8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                          alt="Responsive design showcase"
                          className="w-full h-full object-cover rounded-xl shadow-2xl shadow-amber-900/10 border border-amber-500/20"
                        />
                      </div>
                      <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-xl overflow-hidden border-4 border-slate-900 shadow-2xl z-20">
                        <img
                          src="https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8bW9iaWxlJTJCcmVzcG9uc2l2ZSUyQndlYiUyQmRlc2lnbiUyQmV4YW1wbGV8ZW58MHx8fHwxNzQ1ODQ4Mjc5fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                          alt="Mobile view"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -left-4 -top-4 h-20 w-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-xl z-20">
                        <span className="text-white font-bold text-xl">
                          100%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Call to Action */}
            <div className="mt-24 text-center">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-amber-200 via-amber-100 to-amber-300 bg-clip-text text-transparent">
                Have a project in mind?
              </h3>
              <p className="text-neutral-300 mb-10 max-w-2xl mx-auto">
                Let's collaborate to build something amazing together. I'm ready
                to bring your ideas to life with clean code and modern design.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="py-4 px-8 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 border border-amber-400 shadow-xl hover:shadow-amber-500/50 text-white font-medium transition-all duration-300 hover:scale-105 group">
                  <span className="mr-2">Start a Project</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
                <button className="py-4 px-8 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-slate-800 to-slate-700 border border-amber-500/30 shadow-xl hover:shadow-amber-500/20 text-white font-medium transition-all duration-300 hover:scale-105 group">
                  <span className="mr-2">View My Resume</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section - Dark Luxury Theme */}
        <section
          id="contact"
          className="py-20 bg-gradient-to-b from-black to-neutral-900 text-white"
        >
          <div className="container mx-auto px-6 max-w-7xl">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
                Contact
              </h2>
              <div className="w-40 h-2 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto mb-6"></div>
              <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
                Let's discuss how I can help bring your digital ideas to life.
              </p>
            </div>

            {/* Contact Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info Card */}
              <div className="bg-neutral-900/80 backdrop-blur-lg border border-amber-600/40 rounded-xl p-10 shadow-xl shadow-amber-900/40">
                <h3 className="text-3xl font-bold mb-6 flex items-center">
                  <span className="w-3 h-8 bg-amber-500 rounded-sm mr-4"></span>
                  Contact Information
                </h3>

                <div className="space-y-8">
                  {/* Email */}
                  <div className="flex items-center group">
                    <div className="bg-gradient-to-br from-amber-600 to-amber-800 p-4 rounded-lg mr-6 shadow-md shadow-amber-900/50 group-hover:shadow-amber-600/60 transition-all duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-neutral-400 uppercase tracking-wider">
                        Email
                      </p>
                      <a
                        href="mailto:kirtanmojidra01@gmail.com"
                        className="text-amber-400 hover:text-amber-300 transition-colors text-lg"
                      >
                        kirtanmojidra01@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center group">
                    <div className="bg-gradient-to-br from-amber-600 to-amber-800 p-4 rounded-lg mr-6 shadow-md shadow-amber-900/50 group-hover:shadow-amber-600/60 transition-all duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-neutral-400 uppercase tracking-wider">
                        Location
                      </p>
                      <p className="text-white text-lg">
                        Ahmedabad, Gujarat, India
                      </p>
                    </div>
                  </div>

                  {/* Availability Badge */}
                  <div className="mt-10 pt-8 border-t border-amber-900/70">
                    <div className="flex items-center">
                      <div className="relative mr-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center shadow-lg shadow-amber-900/50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-neutral-900 rounded-full"></span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">
                          Available for Work
                        </h4>
                        <p className="text-sm text-neutral-400">
                          Open to freelance projects and full-time opportunities
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Connect Card */}
              <div className="bg-neutral-900/80 backdrop-blur-lg border border-amber-600/40 rounded-xl p-10 shadow-xl shadow-amber-900/40">
                <h3 className="text-3xl font-bold mb-6 flex items-center">
                  <span className="w-3 h-8 bg-amber-500 rounded-sm mr-4"></span>
                  Connect With Me
                </h3>

                <div className="grid grid-cols-2 gap-8">
                  {/* Instagram */}
                  <a
                    href="#"
                    className="group flex items-center p-5 bg-neutral-800/70 border border-neutral-700 hover:border-amber-600/50 rounded-lg transition-all duration-300 hover:bg-neutral-800"
                  >
                    <div className="bg-gradient-to-br from-pink-500 to-amber-600 p-3 rounded-lg mr-5 shadow-md group-hover:shadow-pink-500/40 transition-all duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.849 0-3.204 0-3.584-.012-4.85-.07-3.252-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.07 4.849-.07zm0 2.163c-3.259 0-3.667.014-4.947.072-2.142.097-3.064.984-3.064 2.777 0 .245.011 2.074.011 3.987 0 1.835-.011 3.607-.011 3.917 0 2.086 1.208 3.097 3.064 3.097 1.327 0 3.627.012 4.947.012 1.32 0 3.62-.012 4.947-.012 1.856 0 3.064-1.011 3.064-3.097 0-.31-.011-2.082-.011-3.917 0-1.913.011-3.742.011-3.987 0-1.793-.922-2.68-3.064-2.777-1.28-.058-1.688-.072-4.947-.072zm0 3.672c-2.173 0-3.935 1.762-3.935 3.935s1.762 3.935 3.935 3.935 3.935-1.762 3.935-3.935-1.762-3.935-3.935-3.935zm0 6.486c-1.41 0-2.551-1.141-2.551-2.551s1.141-2.551 2.551-2.551 2.551 1.141 2.551 2.551-1.141 2.551-2.551 2.551zm4.194-7.639c-.508 0-.92.412-.92.919s.412.92.92.92.92-.413.92-.92-.413-.919-.92-.919z"></path>
                      </svg>
                    </div>
                    <span className="text-sm text-neutral-400 group-hover:text-white transition-colors">
                      Instagram
                    </span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="#"
                    className="group flex items-center p-5 bg-neutral-800/70 border border-neutral-700 hover:border-amber-600/50 rounded-lg transition-all duration-300 hover:bg-neutral-800"
                  >
                    <div className="bg-gradient-to-br from-blue-600 to-amber-800 p-3 rounded-lg mr-5 shadow-md group-hover:shadow-blue-500/40 transition-all duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-.552-.448-1-1-1s-1 .448-1 1v8.399h-2v-6h2v1.242c.412-.566 1.251-.95 2.165-.95 1.546 0 2.835 1.043 2.835 2.85v2.858h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                      </svg>
                    </div>
                    <span className="text-sm text-neutral-400 group-hover:text-white transition-colors">
                      LinkedIn
                    </span>
                  </a>

                  {/* GitHub */}
                  <a
                    href="#"
                    className="group flex items-center p-5 bg-neutral-800/70 border border-neutral-700 hover:border-amber-600/50 rounded-lg transition-all duration-300 hover:bg-neutral-800"
                  >
                    <div className="bg-gradient-to-br from-neutral-600 to-amber-800 p-3 rounded-lg mr-5 shadow-md group-hover:shadow-neutral-500/40 transition-all duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                      </svg>
                    </div>
                    <span className="text-sm text-neutral-400 group-hover:text-white transition-colors">
                      GitHub
                    </span>
                  </a>

                  {/* Twitter */}
                  <a
                    href="#"
                    className="group flex items-center p-5 bg-neutral-800/70 border border-neutral-700 hover:border-amber-600/50 rounded-lg transition-all duration-300 hover:bg-neutral-800"
                  >
                    <div className="bg-gradient-to-br from-blue-400 to-amber-600 p-3 rounded-lg mr-5 shadow-md group-hover:shadow-blue-500/40 transition-all duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                      </svg>
                    </div>
                    <span className="text-sm text-neutral-400 group-hover:text-white transition-colors">
                      Twitter
                    </span>
                  </a>
                </div>

                {/* Contact CTA */}
                <div className="mt-10 pt-8 border-t border-amber-900/70">
                  <a
                    href="mailto:kirtanmojidra01@gmail.com"
                    className="block w-full py-5 bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white text-center rounded-lg font-medium text-lg transition-all duration-300 shadow-lg shadow-amber-900/40 hover:shadow-amber-900/60"
                  >
                    Send Me a Message
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section - Dark Luxury Theme */}
        <footer className="bg-black text-white py-16">
          <div className="container mx-auto px-6 max-w-7xl">
            {/* Footer Top */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              {/* About Column */}
              <div>
                <h3 className="text-3xl font-bold mb-5 flex items-center">
                  <span className="w-2 h-6 bg-amber-500 rounded-sm mr-3"></span>
                  About Me
                </h3>
                <p className="text-neutral-300 text-lg mb-6 leading-relaxed">
                  Passionate software developer creating modern, responsive, and
                  user-friendly web applications with cutting-edge technologies.
                </p>
                <div className="flex space-x-5 mt-6">
                  {/* Social Icons */}
                  <a
                    href="#"
                    className="bg-neutral-800 hover:bg-neutral-700 p-3 rounded-lg transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-7c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm7 7h-2v-3c0-.552-.448-1-1-1s-1 .448-1 1v3h-2v-6h2v1.242c.412-.566 1.251-.95 2.165-.95 1.546 0 2.835 1.043 2.835 2.85v2.858z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-neutral-800 hover:bg-neutral-700 p-3 rounded-lg transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links Column */}
              <div>
                <h3 className="text-3xl font-bold mb-5 flex items-center">
                  <span className="w-2 h-6 bg-amber-500 rounded-sm mr-3"></span>
                  Quick Links
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="#home"
                    className="text-lg text-neutral-300 hover:text-amber-400 transition-colors"
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    className="text-lg text-neutral-300 hover:text-amber-400 transition-colors"
                  >
                    About
                  </a>
                  <a
                    href="#projects"
                    className="text-lg text-neutral-300 hover:text-amber-400 transition-colors"
                  >
                    Projects
                  </a>
                  <a
                    href="#skills"
                    className="text-lg text-neutral-300 hover:text-amber-400 transition-colors"
                  >
                    Skills
                  </a>
                  <a
                    href="#contact"
                    className="text-lg text-neutral-300 hover:text-amber-400 transition-colors"
                  >
                    Contact
                  </a>
                </div>
              </div>

              {/* Contact Info Column */}
              <div>
                <h3 className="text-3xl font-bold mb-5 flex items-center">
                  <span className="w-2 h-6 bg-amber-500 rounded-sm mr-3"></span>
                  Contact Info
                </h3>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-center text-neutral-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-3 text-amber-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <a
                      href="mailto:kirtanmojidra01@gmail.com"
                      className="hover:text-amber-400 transition-colors"
                    >
                      kirtanmojidra01@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center text-neutral-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-3 text-amber-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                    <span>Ahmedabad, Gujarat, India</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent my-8"></div>

            {/* Footer Bottom */}
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Logo */}
              <div className="mb-6 md:mb-0">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center shadow-lg shadow-amber-900/40">
                  <span className="text-2xl font-bold">KM</span>
                </div>
              </div>

              {/* Copyright */}
              <div className="text-center md:text-left text-sm text-neutral-400">
                <p>© 2025 Developer Portfolio. All rights reserved.</p>
                <p className="mt-2">
                  Designed with <span className="text-red-500">❤</span> and
                  modern web technologies.
                </p>
              </div>

              {/* Back to Top */}
              <div className="mt-6 md:mt-0">
                <a
                  href="#"
                  className="text-sm px-5 py-4 bg-gradient-to-r from-amber-500/20 to-amber-700/20 hover:from-amber-500/30 hover:to-amber-700/30 border border-amber-500/30 text-amber-300 rounded-lg transition-colors flex items-center"
                >
                  <span>Back to Top</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
