import React,{useState,useEffect} from 'react';
import { motion } from 'framer-motion';
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
import ToolkitLogo from "../assets/toolkit.jpg";
import FrontendLogo from "../assets/frontend.webp";
import BackendLogo from "../assets/backend.png";
import GitLogo from "../assets/git.png";



const container = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const cards = [
  {
    logo: "FrontendLogo",
    title: "Frontend Development",
    subtitle: "Interactive and responsive interfaces",
    skills: [
      { logo: "HtmlLogo", label: "HTML" },
      { logo: "CssLogo", label: "CSS" },
      { logo: "JavascriptLogo", label: "JavaScript" },
      { logo: "TailwindLogo", label: "Tailwind" },
      { logo: "ReactLogo", label: "ReactJS" },
    ],
  },
  {
    logo: "BackendLogo",
    title: "Backend Development",
    subtitle: "Robust server-side solutions",
    skills: [
      { logo: "NodejsLogo", label: "NodeJS" },
      { logo: "PythonLogo", label: "Python" },
      { logo: "MongodbLogo", label: "MongoDB" },
      { logo: "PostgressLogo", label: "PostgreSQL" },
      { logo: "MysqlLogo", label: "MySQL" },
    ],
  },
  {
    logo: "ToolkitLogo",
    title: "Tools & Workflow",
    subtitle: "Efficient development process",
    skills: [{ logo: "GitLogo", label: "Git" }],
  },
];

const SkillSection = () => {



  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-black via-slate-950 to-slate-900 text-white w-screen overflow-hidden"
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
          <h2 className="text-5xl font-bold h-fit block mt-1 bg-gradient-to-r from-amber-400 to-amber-600 text-transparent bg-clip-text py-1.5">
            Skills & Expertise
          </h2>
          <div className="w-48 mt-2 h-1 bg-gradient-to-r from-amber-500 to-amber-300 mx-auto mb-6" />
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            My technical toolkit and proficiencies that drive successful web
            development projects.
          </p>
        </motion.div>

        {/* Skills Grid with Stagger */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={item}
              className="
                bg-gradient-to-br from-slate-900 to-slate-800
                border border-amber-500/20
                backdrop-blur-sm md:backdrop-blur-xl
                rounded-xl p-8
                shadow-lg md:shadow-xl
                transform transition duration-500
                hover:scale-105 hover:shadow-2xl group
              "
            >
              <div className="flex items-start mb-6">
                <motion.div
                  variants={item}
                  className="
                    w-24 h-24 rounded-lg
                    bg-gradient-to-br from-amber-400 to-amber-600
                    p-0.5 mr-5
                    shadow-lg shadow-amber-600/20
                  "
                >
                  <div className="w-full h-full rounded-md bg-slate-900 flex items-center justify-center overflow-hidden">
                    <img
                      src={card.logo}
                      alt={card.title}
                      className="w-16 h-16 object-cover"
                    />
                  </div>
                </motion.div>

                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-neutral-400">{card.subtitle}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {card.skills.map((skill, j) => (
                  <motion.div
                    key={j}
                    variants={item}
                    className="
                      flex items-center
                      bg-slate-800/70 rounded-lg p-2
                      transition-all hover:bg-slate-700
                    "
                  >
                    {/* replace with: <img src={skill.logo} ... /> */}
                    <img
                      src={skill.logo}
                      alt={skill.label}
                      className="h-8 w-8 rounded-md mr-2"
                    />
                    <h4 className="text-neutral-200">{skill.label}</h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-amber-200 via-amber-100 to-amber-300 bg-clip-text text-transparent">
            Need a developer with these skills?
          </h3>
          <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how my expertise can bring your project to life with
            clean code and modern design.
          </p>
          <a
            href="#contact"
            className="
              inline-flex items-center justify-center px-8 py-4
              rounded-lg bg-gradient-to-r from-amber-500 to-amber-600
              border border-amber-400 shadow-xl hover:shadow-amber-500/50
              text-white font-medium transition-all duration-300
              hover:scale-105 group
            "
          >
            <span className="mr-2">Contact Me</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillSection;

