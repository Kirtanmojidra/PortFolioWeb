import React,{useState,useEffect} from "react";
import { motion } from "framer-motion";
import DjangoLogo from "../assets/django.png";
import MainLogo from "../assets/971.jpg";
import RestapiLogo from "../assets/restapi.png";
import CssLogo from "../assets/css.jpg";
import HtmlLogo from "../assets/html.png";
import JavascriptLogo from "../assets/javascript.png";
import ReactLogo from "../assets/react.png";
import TailwindLogo from "../assets/tailwind.png";
import NodejsLogo from "../assets/nodejs.png";
import PythonLogo from "../assets/python.png";
import MongodbLogo from "../assets/monogodb.png";
import PostgressLogo from "../assets/postgress.png";
import MysqlLogo from "../assets/mysql.png";
import GitLogo from "../assets/git.png";

const MainContent = () => {
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
    <main
      id="main-content"
      className="flex-1 overflow-hidden w-screen bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <section
        id="hero"
        className=" min-h-screen flex items-center overflow-hidden transition-all duration-700 ease-in-out"
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
                className="text-xl text-gray-300 max-w-full"
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
  );
};

export default MainContent;
