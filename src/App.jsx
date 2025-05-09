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
import AboutLogo from "./assets/about.avif";
import ollamachatui from "./assets/ollamachatui.png";
import BlogToHeaven from "./assets/blogtoheaven.png";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import AboutSection from "./components/AboutSection";
import SkillSection from "./components/SkillSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";


function App() {
  

  return (
    <>
    <div className="w-screen overflow-hidden scrollbar-none">
        <Header/>
        <MainContent/>
        <AboutSection/>
        <SkillSection/>
        <ProjectSection/>
        <ContactSection/>
        <FooterSection/>
    </div>
    </>
  );
}

export default App;
