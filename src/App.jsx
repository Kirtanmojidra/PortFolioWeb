import { useState, useEffect, use } from 'react'
import { motion } from 'framer-motion';
import './App.css'
import './index.css'
import CssLogo from './assets/css.jpg'
import HtmlLogo from './assets/html.png'
import JavascriptLogo from './assets/javascript.png'
import ReactLogo from './assets/react.png'
import TailwindLogo from './assets/tailwind.png'
import NodejsLogo from './assets/nodejs.png'
import PythonLogo from './assets/python.png'
import MongodbLogo from './assets/monogodb.png'
import PostgressLogo from './assets/postgress.png'
import MysqlLogo from './assets/mysql.png'
import RestapiLogo from './assets/restapi.png'
import ToolkitLogo from './assets/toolkit.jpg'
import FrontendLogo from './assets/frontend.webp'
import BackendLogo from './assets/backend.png'
import GitLogo from './assets/git.png'
import MainLogo from './assets/971.jpg'
import AboutLogo from './assets/about.avif'
import DjangoLogo from './assets/django.png'

function App() {
  // const [count, setCount] = useState(0);
  const positions = ["A Developer", "A Designer", "A Web Developer", 'Frontend Developer', 'React Wizard', 'UI/UX Enthusiast', 'Code Artist']
  const logos = [CssLogo, JavascriptLogo, MongodbLogo, NodejsLogo, ReactLogo, GitLogo, HtmlLogo, PythonLogo, MysqlLogo, PostgressLogo, DjangoLogo];
  const loopedLogos = [...logos, ...logos];
  const [text, setText] = useState('');
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

    if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % positions.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <>
      {/* <!-- Main content area --> */}
      <header className="fixed w-full top-0 bg-sky-500/20 backdrop-blur-lg shadow-md py-4 z-50 justify-center">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* <!-- Logo --> */}
          <a href="#hero" className="flex items-center text-xl font-bold text-white">
            <span className="text-sky-500">&lt;/&gt;</span> KirtanMojidra
          </a>

          {/* <!-- Desktop Navigation --> */}
          <nav className="hidden md:flex space-x-6 text-white">
            <a href="#hero" className="nav-link hover:text-orange-500 ">Home</a>
            <a href="#about" className="nav-link hover:text-orange-500 ">About</a>
            <a href="#skills" className="nav-link hover:text-orange-500 ">Skills</a>
            <a href="#projects" className="nav-link hover:text-orange-500 ">Projects</a>
            <a href="#contact" className="nav-link hover:text-orange-500 ">Contact</a>
            <a href="#resume" className="btn-outline hover:text-orange-500 ">Resume</a>
          </nav>

          {/* <!-- Mobile Menu Button --> */}
          <button id="menu-btn" className="md:hidden">
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>

        {/* <!-- Mobile Menu (hidden by default) --> */}
        <div id="menu" className="hidden md:hidden flex flex-col space-y-4 mt-4 px-4">
          <a href="#hero" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="#resume" className="btn-outline">Resume</a>
        </div>
      </header>
      <div className='px-2 md:px-[100px] bg-slate-900'>
        <main id="main-content" className="flex-1 relative ">
          <section id="hero md:pt-0"
            className="relative min-h-screen flex items-center bg-slate-900/90 overflow-hidden transition-colors duration-300">
            {/* <!-- Content --> */}
            <div className="container mx-auto px-6 lg:px-8 relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-12">

                {/* <!-- Text Content --> */}
                <div className="w-full lg:w-1/2 order-2 lg:order-1 space-y-6 animate-fadeIn mt-8 lg:mt-0">
                  <span
                    className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                    Full-Stack Developer
                  </span>

                  <h1 className="text-white text-4xl md:text-6xl font-semibold font-serif">Hi, I'm <span className="text-orange-600"> Kirtan </span> and <br />
                    I'm <span id="typed-text" className=" text-blue-500">
                      {text}
                      </span><span className='animate-pulse font-serif font-bold'>|</span></h1>

                  <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                    I build beautiful, responsive websites and applications with clean code and exceptional user experiences.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a href="#projects"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-sky-600/40 border border-sky-500 shadow-black/50 shadow-lg hover:shadow-sky-500/50 hover:bg-sky-700 text-white font-medium transition-all hover:scale-105 hover:shadow-lg">
                      View My Work
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" />
                      </svg>
                    </a>
                    <a href="#contact"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white bg-orange-500/50 border shadow-lg shadow-black/40 border-orange-500 hover:scale-105 hover:shadow-orange-500/50 hover:bg-orange-500/80 font-medium transition-all">
                      Contact Me
                    </a>
                  </div>

                  {/* <!-- Tech Stack Section (optional small icons) --> */}
                  <div className="flex items-center pt-6 gap-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Tech Stack:</p>
                    <div className="overflow-hidden w-full bg-transparent py-6">
                      <motion.div
                        className="flex w-max gap-10"
                        animate={{ x: ['0%', '-50%'] }}
                        transition={{
                          repeat: Infinity,
                          duration: 30,
                          ease: 'linear',
                        }}
                      >
                        {loopedLogos.map((logo, index) => (
                          <div key={index} className="flex-shrink-0">
                            <img src={logo} alt={`logo-${index}`} className="h-12 object-contain rounded-md" />
                          </div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* <!-- Image Content --> */}

                <div className="w-full lg:w-1/2 order-1 lg:order-2 relative"><motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                  <div
                    className="hidden md:block md:relative z-10 rounded-2xl shadow-2xl shadow-blue-500/50 overflow-hidden border border-blue-500 dark:border-neutral-800">
                    <img
                      src={MainLogo}
                      alt="Professional developer working" className="w-full h-auto object-cover" />
                  </div>
                </motion.div>

                  {/* <!-- Floating Badge: Available for Hire --> */}
                  <div
                    className="absolute top-5 -right-5 z-20 bg-white/80 dark:bg-neutral-800 p-3 rounded-xl shadow-lg rotate-3 hidden md:flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Available for hire</span>
                  </div>

                  {/* <!-- Floating Badge: 5+ Years Experience --> */}
                  {/* <div
                    className="absolute -bottom-6 -left-6 z-20 bg-white/80 dark:bg-neutral-800 p-3 rounded-xl shadow-lg -rotate-2 hidden md:flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="currentColor"
                      viewBox="0 0 20 20">
                      <path
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zM7 13h6a1 1 0 110 2H7a1 1 0 110-2z"
                        clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">5+ years experience</span>
                  </div> */}

                  {/* <!-- Background Blurred Patterns --> */}
                  <div className="absolute -inset-4 -z-10 bg-blue-50 dark:bg-blue-900/20 rounded-3xl transform -rotate-3"></div>
                  <div className="absolute -inset-4 -z-20 bg-indigo-50 dark:bg-indigo-900/20 rounded-3xl transform rotate-3">
                  </div>
                </div>

              </div>
            </div>
          </section>
          {/* <!-- Scroll down indicator --> */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
            <a href="#about" className="p-2 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </main>
        <section id="about" className="py-20 bg-slate-900/90">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">

            {/*<!-- Section Header -->*/}
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 shadow-lg rounded-full text-lg font-medium mb-4">
                About Me
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Passionate Developer Building Digital Solutions
              </h2>
              <p className="max-w-2xl mx-auto text-gray-400 text-lg">
                I create modern, responsive websites and applications with a focus on performance, accessibility, and user
                experience.
              </p>
            </div>
            {/*<!-- Main Content -->*/}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* <!-- Left Column - Profile Image --> */}
              <div className="relative">
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={AboutLogo}
                    alt="Professional software developer" className="w-full h-auto object-cover" />
                </div>
                {/* <!-- Background Decorations --> */}
                <div className="absolute -bottom-6 -right-6 h-40 w-40 bg-blue-50 rounded-full -z-10"></div>
                <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 h-24 w-24 bg-yellow-50 rounded-full -z-10">
                </div>
                {/* <!-- Floating Tag --> */}
                <div className="absolute top-6 -right-4 bg-white/80 py-2 px-4 shadow-lg rounded-lg z-20">
                  <p className="text-sm font-medium text-gray-800">
                    <span className="text-green-600 font-bold pr-2">🟢</span>Available for hire
                  </p>
                </div>
              </div>
              {/* <!-- Right Column - About Text Content --> */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-sky-500">Who I Am</h3>
                <p className="text-white">
                  I'm a full-stack developer with expertise in building modern web applications. My passion lies in
                  transforming complex problems into elegant, efficient solutions.
                </p>
                {/* <!-- Skills Cards --> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  {/* <!-- Front-End --> */}
                  <div className="bg-sky-500/5 p-6 rounded-lg border border-sky-300/40 shadow-lg backdrop:blur-sm shadow-sky-500/50 hover:shadow-lg hover:scale-105 hover:shadow-black/40 transition-all">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <i className="fas fa-code text-blue-600"></i>
                      </div>
                      <h4 className="font-bold text-white">Front-End</h4>
                    </div>
                    <p className="text-white">
                      Expertise in React, Vue, and modern JS frameworks with a strong focus on responsive design.
                    </p>
                  </div>
                  {/* <!-- Back-End --> */}
                  <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-300/40 shadow-lg backdrop:blur-sm shadow-orange-500/50 hover:shadow-lg hover:scale-105 hover:shadow-black/40 transition-all">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <i className="fas fa-server text-green-600"></i>
                      </div>
                      <h4 className="font-bold text-white">Back-End</h4>
                    </div>
                    <p className="text-white">
                      Building robust APIs and services using Node.js, Python, and SQL/NoSQL databases.
                    </p>
                  </div>
                  {/* <!-- UX Design --> */}
                  <div className="bg-fuchsia-500/5 p-6 rounded-lg border border-fuchsia-300/40 shadow-lg backdrop:blur-sm shadow-fuchsia-500/50 hover:shadow-lg hover:scale-105 hover:shadow-black/40 transition-all">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <i className="fas fa-pencil-ruler text-purple-600"></i>
                      </div>
                      <h4 className="font-bold text-white">UX Design</h4>
                    </div>
                    <p className="text-white">
                      Creating intuitive interfaces with user-centered design principles and usability testing.
                    </p>
                  </div>
                  {/* <!-- Performance --> */}
                  <div className="bg-rose-500/10 p-6 rounded-lg border border-rose-300/40 shadow-lg backdrop:blur-sm shadow-rose-500/50 hover:shadow-lg hover:scale-105 hover:shadow-black/40 transition-all">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                        <i className="fas fa-tachometer-alt text-red-600"></i>
                      </div>
                      <h4 className="font-bold text-white">Performance</h4>
                    </div>
                    <p className="text-white">
                      Optimizing applications for speed and efficiency with modern best practices and tools.
                    </p>
                  </div>
                </div>
                {/* <!-- Work Process Overview --> */}
                <div className="mt-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">My Approach</h3>
                  <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">

                    {/* <!-- Step 1: Discovery --> */}
                    <div className="flex-1 relative">
                      <div
                        className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold absolute -left-2 top-0">
                        1
                      </div>
                      <div className="pl-10 border-l-2 border-blue-200 pb-8 ml-2">
                        <h4 className="font-bold text-gray-900 mb-2">Discovery</h4>
                        <p className="text-gray-200 text-sm">Understanding your goals and requirements through consultation.</p>
                      </div>
                    </div>

                    {/* <!-- Step 2: Planning --> */}
                    <div className="flex-1 relative">
                      <div
                        className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold absolute -left-2 top-0">
                        2
                      </div>
                      <div className="pl-10 border-l-2 border-blue-200 pb-8 ml-2">
                        <h4 className="font-bold text-gray-900 mb-2">Planning</h4>
                        <p className="text-gray-200 text-sm">Creating prototypes and technical specifications for your project.
                        </p>
                      </div>
                    </div>

                    {/* <!-- Step 3: Execution --> */}
                    <div className="flex-1 relative">
                      <div
                        className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold absolute -left-2 top-0">
                        3
                      </div>
                      <div className="pl-10 border-l-2 border-blue-200 ml-2">
                        <h4 className="font-bold text-gray-900 mb-2">Execution</h4>
                        <p className="text-gray-200 text-sm ">Developing with clean code practices and regular feedback cycles.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* <!-- Call To Action --> */}
                <div className="mt-8">
                  <a href="#contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-sky-600/40 border border-sky-500 shadow-black/50 shadow-lg hover:shadow-sky-500/50 hover:bg-sky-700 text-white font-medium transition-all hover:scale-105 hover:shadow-lg">
                    Get In Touch
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="py-16 bg-slate-900/90 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-3">Skills &amp; Expertise</h2>
              <p className="text-lg text-neutral-300 max-w-2xl mx-auto">My technical toolkit and proficiencies that drive
                successful web development projects.</p>
            </div>

            {/* <!-- Skills Categories --> */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {/* <!-- Frontend Development --> */}

                <div className="bg-white/5 border border-slate-100/20 backdrop-blur-lg shadow-lg overflow-hidden shadow-white/10 rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-black/30">
                  <div className="flex items-start mb-4">
                    <img
                      src={FrontendLogo}
                      alt="Frontend Development" className="w-28 h-20 object-cover rounded-lg mr-4" />
                    <div>
                      <h3 className="text-xl font-bold">Frontend Development</h3>
                      <p className="text-neutral-400">Interactive and responsive interfaces</p>
                    </div>
                  </div>
                  <div className='grid grid-cols-2 md:grid-cols-3 '>
                    <div className='flex mx-1 my-1'>
                      <img src={HtmlLogo} className='h-10 w-10 rounded-md' />
                      <h1 className='pt-[5.5px] pl-1'>HTML</h1>
                    </div>
                    <div className='flex mx-1 my-1'>
                      <img src={CssLogo} className='h-10 w-10  rounded-md' />
                      <h1 className='pt-[5.5px] pl-1'>CSS</h1>
                    </div>
                    <div className='flex mx-1 my-1'>
                      <img src={JavascriptLogo} className='h-10 w-10 ' />
                      <h1 className='pt-[5.5px] pl-1'>JavaScript</h1>
                    </div>
                    <div className='flex mx-1 my-1'>
                      <img src={TailwindLogo} className='h-10 w-10 rounded-md' />
                      <h1 className='pt-[5.5px] pl-1'>Tailwind</h1>
                    </div>
                    <div className='flex mx-1 my-1'>
                      <img src={ReactLogo} className='h-10 w-10 rounded-md' />
                      <h1 className='pt-[5.5px] pl-1'>ReactJS</h1>
                    </div>
                  </div>
                </div>
                {/*<!-- Backend Development -->*/}
                <div className="bg-white/5 border border-slate-100/20  backdrop-blur-lg shadow-lg overflow-hidden shadow-white/10 rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-black/30">
                  <div className="flex items-start mb-4">
                    <img
                      src={BackendLogo}
                      alt="Backend Development" className="w-28 h-20 object-cover rounded-lg mr-4" />
                    <div>
                      <h3 className="text-xl font-bold">Backend Development</h3>
                      <p className="text-neutral-400">Robust server-side solutions</p>
                    </div>
                  </div>
                  {/* BackEnd skills */}
                  <div className='grid grid-cols-2 md:grid-cols-3 '>
                    <div className='flex mx-1 my-1'>
                      <img src={NodejsLogo} className='h-10 w-10  rounded-md' />
                      <h1 className='pt-[5.5px] pl-1'>NodeJS</h1>
                    </div>
                    <div className='flex mx-1 my-1'>
                      <img src={PythonLogo} className='h-10 w-10 rounded-md' />
                      <h1 className='pt-[5.5px] pl-1'>Python</h1>
                    </div>
                    <div className='flex mx-1 my-1'>
                      <img src={MongodbLogo} className='h-10 w-14 rounded-md bg-cover' />
                      <h1 className='pt-[5.5px] pl-1'>MongoDB</h1>
                    </div>
                    <div className='flex mx-1 my-1'>
                      <img src={PostgressLogo} className='h-10 w-10 rounded-md' />
                      <h1 className='pt-[5.5px] pl-1'>PostGress</h1>
                    </div>
                    <div className='flex mx-1 my-1'>
                      <img src={MysqlLogo} className='h-10 w-10 rounded-md' />
                      <h1 className='pt-[5.5px] pl-1'>MYSQL</h1>
                    </div>

                  </div>
                </div>

                {/*<!-- Tools & Workflow -->*/}
                <div className="bg-white/5 border border-slate-100/20 backdrop-blur-lg shadow-lg overflow-hidden shadow-white/10 rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-black/30">
                  <div className="flex items-start mb-4">
                    <img
                      src={ToolkitLogo}
                      alt="Tools and Workflow" className="w-28 h-20 object-cover rounded-lg mr-4" />
                    <div>
                      <h3 className="text-xl font-bold">Tools &amp; Workflow</h3>
                      <p className="text-neutral-400">Efficient development process</p>
                    </div>
                  </div>
                  {/* Tools As Skill */}
                  <div className='grid grid-cols-2 md:grid-cols-3 '>
                    <div className='flex mx-1 my-1'>
                      <img src={GitLogo} className='h-10 w-10 rounded-md' />
                      <h1 className='pt-[5.5px] pl-1'>Git</h1>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* <!-- CTA --> */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-3">Need a developer with these skills?</h3>
              <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">Let's discuss how my expertise can bring your project to
                life with clean code and modern design.</p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-sky-600/40 border border-sky-500 shadow-black/50 shadow-lg hover:shadow-sky-500/50 hover:bg-sky-700 text-white font-medium transition-all hover:scale-105 hover:shadow-lg">
                Contact Me
              </a>
            </div>
          </div>
        </section>
        <section id="projects" className="py-16 bg-slate-900/90 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-3">Projects</h2>
              <p className="text-lg text-neutral-300 max-w-2xl mx-auto">Showcasing my latest web development work and
                technical expertise.</p>
            </div>

            {/*<!-- Featured Project -->*/}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="mb-20">
                <div className="rounded-xl overflow-hidden bg-black/20 shadow-xl shadow-black/30 border border-sky-500/50">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative h-72 md:h-auto">
                      <img
                        src="https://images.unsplash.com/photo-1581094651181-35942459ef62?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8c29mdHdhcmUlMkJkZXZlbG9wbWVudCUyQnByb2plY3QlMkJzaG93Y2FzZXxlbnwwfHx8fDE3NDU4NDgyNzh8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                        alt="VR Experience Platform" className="w-full h-full object-cover" />
                      <div
                        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-neutral-900/70 to-transparent flex items-center md:hidden">
                        <div className="px-6">
                          <span className="bg-indigo-600/10 text-white text-xs py-1 px-2 rounded-full">Featured Project</span>
                          <h3 className="text-2xl font-bold mt-2">VR Experience Platform</h3>
                        </div>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <span className="bg-indigo-600/30 text-white text-xs py-1 px-2 rounded-full w-fit hidden md:block">Featured
                        Project</span>
                      <h3 className="text-2xl text-sky-500/90 font-bold mt-2 hidden md:block">VR Experience Platform</h3>
                      <p className="text-neutral-300 my-4">A cutting-edge virtual reality platform designed for immersive
                        learning experiences. Built with React, Three.js, and WebXR API.</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-3 py-1 bg-sky-500/20 text-sky-500 rounded-full text-sm">React</span>
                        <span className="px-3 py-1 bg-sky-500/20 text-sky-500 rounded-full text-sm">Three.js</span>
                        <span className="px-3 py-1 bg-sky-500/20 text-sky-500 rounded-full text-sm">WebXR</span>
                        <span className="px-3 py-1 bg-sky-500/20 text-sky-500 rounded-full text-sm">Firebase</span>
                      </div>
                      <div className="flex gap-4">
                        <a href="#"
                          className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors">
                          <span>View Demo</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                          </svg>
                        </a>
                        <a href="#"
                          className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors">
                          <span>Source Code</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
              <div className="bg-sky-800/5  border border-sky-500/30 shadow-sky-500/10 rounded-xl overflow-hidden shadow-lg group hover:scale-105 transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1580983559367-0dc2f8934365?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NXx8c29mdHdhcmUlMkJkZXZlbG9wbWVudCUyQnByb2plY3QlMkJzaG93Y2FzZXxlbnwwfHx8fDE3NDU4NDgyNzh8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                    alt="Performance Analytics Dashboard"
                    className="w-full h-full object-cover transition-transform duration-500 " />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-xl font-bold">Performance Analytics Dashboard</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-neutral-300 mb-4">Interactive analytics dashboard with real-time data visualization and
                    customizable reports.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-emerald-500/30 shadow-lg text-emerald-200 rounded-full text-xs">Vue.js</span>
                    <span className="px-3 py-1 bg-sky-500/30 shadow-lg text-sky-200 rounded-full text-xs">D3.js</span>
                    <span className="px-3 py-1 bg-orange-500/30 text-orange-300 shadow-lg rounded-full text-xs">Node.js</span>
                  </div>
                  <div className="flex justify-between">
                    <a href="#"
                      className="text-indigo-400 hover:text-indigo-300 text-sm inline-flex items-center gap-1 transition-colors">
                      <span>Live Demo</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                        </path>
                      </svg>
                    </a>
                    <a href="#"
                      className="text-indigo-400 hover:text-indigo-300 text-sm inline-flex items-center gap-1 transition-colors">
                      <span>GitHub</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- More Projects Button --> */}
            <div className="text-center mt-12">
              <button
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-sky-600/40 border border-sky-500 shadow-black/50 shadow-lg hover:shadow-sky-500/50 hover:bg-sky-700 text-white font-medium transition-all hover:scale-105 hover:shadow-lg">
                View All Projects
              </button>
            </div>

            {/* <!-- Project Showcase --> */}
            <div className="mt-20">
              <div className="bg-sky-900/10 border border-sky-500/50 shadow-lg shadow-black/30 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Responsive Design Across Devices</h3>
                    <p className="text-neutral-300 mb-6">My projects are built with a mobile-first approach, ensuring perfect
                      functionality and aesthetics on all screen sizes.</p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-indigo-600 p-1 rounded-full mt-1 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7">
                            </path>
                          </svg>
                        </div>
                        <p className="text-neutral-300">Fluid layouts that adapt seamlessly to any screen size</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-indigo-600 p-1 rounded-full mt-1 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7">
                            </path>
                          </svg>
                        </div>
                        <p className="text-neutral-300">Touch-friendly interactions for mobile users</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-indigo-600 p-1 rounded-full mt-1 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7">
                            </path>
                          </svg>
                        </div>
                        <p className="text-neutral-300">Performance optimization for faster loading on mobile networks</p>
                      </div>
                    </div>
                    <button className="mt-8 px-6 py-2 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-sky-600/40 border border-sky-500 shadow-black/50 shadow-lg hover:shadow-sky-500/50 hover:bg-sky-700 text-white font-medium transition-all hover:scale-105 hover:shadow-lg">
                      Learn About My Process
                    </button>
                  </div>
                  <div className="relative h-80">
                    <img
                      src="https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8d2ViJTJCZGV2ZWxvcGVyJTJCd29ya3NwYWNlJTJCd2l0aCUyQm11bHRpcGxlJTJCc2NyZWVuc3xlbnwwfHx8fDE3NDU4NDgyNzh8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                      alt="Responsive design showcase" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    <div
                      className="absolute -bottom-4 -right-4 h-32 w-32 md:h-40 md:w-40 rounded-lg overflow-hidden border-4 border-neutral-800">
                      <img
                        src="https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8bW9iaWxlJTJCcmVzcG9uc2l2ZSUyQndlYiUyQmRlc2lnbiUyQmV4YW1wbGV8ZW58MHx8fHwxNzQ1ODQ4Mjc5fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                        alt="Mobile view" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Call to Action --> */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-3">Have a project in mind?</h3>
              <p className="text-neutral-300 mb-8 max-w-xl mx-auto">Let's collaborate to build something amazing together. I'm
                ready to bring your ideas to life with clean code and modern design.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  className="py-3 px-8 inline-flex items-center justify-center rounded-lg bg-sky-600/40 border border-sky-500 shadow-black/50 shadow-lg hover:shadow-sky-500/50 hover:bg-sky-700 text-white font-medium transition-all hover:scale-105 hover:shadow-lg">
                  Start a Project
                </button>
                <button
                  className="py-3 px-8 inline-flex items-center justify-center rounded-lg bg-orange-600/40 border border-orange-500 shadow-black/50 shadow-lg hover:shadow-orange-500/50 hover:bg-orange-700 text-white font-medium transition-all hover:scale-105 hover:shadow-lg">
                  View My Resume
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="py-16 bg-slate-900/90 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-3">Contact</h2>
              <p className="text-lg text-neutral-300 max-w-2xl mx-auto">Let's discuss how I can help bring your digital ideas
                to life.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 w-full justify-center">
            {/* <!-- Contact Information --> */}
            <div className="lg:space-x-8 col-span-2 block md:flex  py-10">
              <div className="bg-black/20 border border-sky-500/30 shadow-black/30 rounded-xl p-8 shadow-lg w-full flex justify-center items-center overflow-hidden grid-cols-1">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-indigo-600 p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                          </path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">Email</h4>
                        <a href="mailto:contact@example.com"
                          className="text-indigo-400 hover:text-indigo-300 transition-colors">kirtanmojidra01@gmail.com</a>
                      </div>
                    </div>


                    <div className="flex items-start">
                      <div className="bg-indigo-600 p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                          </path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">Location</h4>
                        <p className="text-neutral-300">Ahemdabad,Gujarat,India</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
                  <img
                    src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8bW9kZXJuJTJCY29udGFjdCUyQmZvcm0lMkJmb3IlMkJkZXZlbG9wZXIlMkJwb3J0Zm9saW98ZW58MHx8fHwxNzQ1ODQ4NjY5fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                    alt="Contact background" className="w-full h-full object-cover rounded-full" />
                </div>
              </div>

              {/* <!-- Social Links --> */}
              <div className="bg-black/20 border border-sky-500/30 rounded-xl p-8 shadow-lg h-full w-full grid-cols-1">
                <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                  <a href="#"
                    className="flex flex-col items-center justify-center border border-sky-500/50 bg-sky-700/10 p-4 rounded-lg hover:bg-sky-600/20 transition-colors">
                    <div className="bg-indigo-600 p-3 rounded-full mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z">
                        </path>
                      </svg>
                    </div>
                    <span className="text-sm">Instagram</span>
                  </a>
                  <a href="#"
                    className="flex flex-col items-center justify-center border border-sky-500/50 bg-sky-700/10 p-4 rounded-lg hover:bg-sky-600/20 transition-colors">
                    <div className="bg-indigo-600 p-3 rounded-full mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z">
                        </path>
                      </svg>
                    </div>
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a href="#"
                    className="flex flex-col items-center justify-center border border-sky-500/50 bg-sky-700/10 p-4 rounded-lg hover:bg-sky-600/20 transition-colors">
                    <div className="bg-indigo-600 p-3 rounded-full mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z">
                        </path>
                      </svg>
                    </div>
                    <span className="text-sm">GitHub</span>
                  </a>
                  <a href="#"
                    className="flex flex-col items-center justify-center border border-sky-500/50 bg-sky-700/10 p-4 rounded-lg hover:bg-sky-600/20 transition-colors">
                    <div className="bg-indigo-600 p-3 rounded-full mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z">
                        </path>
                      </svg>
                    </div>
                    <span className="text-sm">Twitter</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
          {/* <!-- Availability Card --> */}
          <div className="bg-neutral-400/10 border shadow-lg border-white/50 backdrop:blur-lg rounded-xl p-8">
            <div className="flex items-start">
              <img
                src="https://images.unsplash.com/photo-1481535668376-4c3ab7d84e7d?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8bW9kZXJuJTJCY29udGFjdCUyQmZvcm0lMkJmb3IlMkJkZXZlbG9wZXIlMkJwb3J0Zm9saW98ZW58MHx8fHwxNzQ1ODQ4NjY5fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                alt="Availability" className="w-16 h-16 rounded-full object-cover mr-4" />
              <div>
                <h3 className="text-lg font-bold">Currently Available for Work</h3>
                <p className="text-neutral-400 mt-1">Open to freelance projects and full-time opportunities</p>
                <div className="mt-4">
                  <span
                    className="inline-flex items-center bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    Available Now
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section id="footer" className="bg-neutral-900 text-white py-12">
        <div className="container mx-auto px-4">
          {/* <!-- Main Footer Content --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* <!-- About Column --> */}
            <div>
              <h3 className="text-xl font-bold mb-4">About Me</h3>
              <p className="text-neutral-300 mb-4">Passionate software developer creating modern, responsive, and
                user-friendly web applications with cutting-edge technologies.</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-neutral-300 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-7c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm7 7h-2v-3c0-.552-.448-1-1-1s-1 .448-1 1v3h-2v-6h2v1.242c.412-.566 1.251-.95 2.165-.95 1.546 0 2.835 1.043 2.835 2.85v2.858z">
                    </path>
                  </svg>
                </a>
                <a href="#" className="text-neutral-300 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z">
                    </path>
                  </svg>
                </a>
                <a href="#" className="text-neutral-300 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z">
                    </path>
                  </svg>
                </a>
                <a href="#" className="text-neutral-300 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z">
                    </path>
                  </svg>
                </a>
              </div>
            </div>

            {/* <!-- Quick Links --> */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-neutral-300">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* <!-- Contact Info --> */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                    </path>
                  </svg>
                  <a href='mailto:kirtanmojidra01@gmail.com' type='email' className='hover:text-blue-500/80'>kirtanmojidra01@gmail.com</a>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>Ahemdabad,Gujrat,India</span>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- Divider --> */}
          <div className="border-t border-neutral-700 my-8"></div>

          {/* <!-- Footer Bottom --> */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1581093808268-7a25a3625207?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NXx8c29mdHdhcmUlMkJkZXZlbG9wZXIlMkJwb3J0Zm9saW8lMkJmb290ZXJ8ZW58MHx8fHwxNzQ1ODQ4NzY5fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                alt="Developer workspace" className="h-16 w-16 rounded-full object-cover" />
            </div>
            <div className="text-center md:text-left text-neutral-400 text-sm">
              <p>© 2023 Developer Portfolio. All rights reserved.</p>
              <p>Designed with <span className="text-red-500">❤</span> and modern web technologies.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <a href="#"
                className="inline-block px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded transition-colors">Back
                to Top</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default App
