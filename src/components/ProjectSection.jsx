import React from 'react';
import { motion } from 'framer-motion';
import ollamachatui from "../assets/ollamachatui.png";
import BlogToHeaven from "../assets/blogtoheaven.png";

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-slate-900 via-black to-slate-950 text-white w-screen overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-600 text-transparent bg-clip-text p-1.5">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-300 mx-auto mb-6"></div>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Showcasing my latest web development work and technical
            expertise.
          </p>
        </motion.div>

        {/* Featured Project 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-24"
        >
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
              <div className="p-5 md:p-10 flex flex-col justify-center">
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
        </motion.div>

        {/* Featured Project 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="mb-24"
        >
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
              <div className="p-5 md:p-10 flex flex-col justify-center">
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
                    href="https://github.com/Kirtanmojidra/OllamaChatUI"
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
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-24 text-center"
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
