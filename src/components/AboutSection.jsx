import React from 'react';
import { motion } from 'framer-motion';
import AboutLogo from '../assets/about.avif'
const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 relative w-screen overflow-hidden bg-gradient-to-b from-black to-gray-900"
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
              className="mt-12 flex justify-center"
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
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
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
  );
};

export default AboutSection;
