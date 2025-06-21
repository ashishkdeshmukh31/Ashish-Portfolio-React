// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import phplogo from "./assets/tech_logo/phplogo.png"
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// Experience Section Logo's
import baramatiagro from "./assets/company_logo/baramatiagro.png";
import wolfox from "./assets/company_logo/wolfox.png";

// Education Section Logo's
import DYPCOE from "./assets/education_logo/DYPCOE.png";
import GPK from "./assets/education_logo/GPK.jpg";
import THSK from "./assets/education_logo/THSK.jpg";

// Project Section Logo's
import portfolioLogo from "./assets/work_logo/portfolioLogo.png";
import gasstationLogo from "./assets/work_logo/gasstationLogo.jpg";
import evLogo from "./assets/work_logo/evLogo.png";
import chatbotLogo from "./assets/work_logo/chatbotLogo.png";
import signLangLogo from "./assets/work_logo/signLangLogo.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "ReactJS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", logo: nodejsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "PHP", logo: phplogo },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Vercel", logo: vercelLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    role: "SAP Application Intern",
    company: "Baramati Agro Ltd.",
    duration: "Jan 2025 – Apr 2025",
    description:
      "Worked on SAP documentation and functional testing. Assisted teams with report generation and internal audits. Ensured data accuracy and streamlined business workflows.",
    img: baramatiagro,
    skills: [
      "SAP ERP",
      "Documentation",
      "Inventory Management",
      "Excel",
      "Team Collaboration",
    ],
  },
  {
    id: 1,
    role: "Web Developer Intern",
    company: "Wolfox Services Pvt. Ltd.",
    duration: "Jun 2022 – Jul 2022",
    description:
      "Built responsive front-end interfaces for an EV charging platform. Contributed to UI/UX improvements and backend integration. Collaborated in a fast-paced, client-focused environment.",
    img: wolfox,
    skills: [
      "JavaScript",
      "Bootstrap",
      "HTML",
      "CSS",
      "Responsive Design",
      "UI/UX Principles",
    ],
  },
];
export const education = [
  {
    id: 0,
    img: DYPCOE,
    school: "D. Y. Patil College Of Engineering, Akurdi",
    date: "August 2023 - July 2026",
    grade: "9.57 CGPA",
    desc: "Currently pursuing a Bachelor's degree in Computer Engineering. Developed strong programming, analytical, and problem-solving skills through hands-on projects and participation in various technical activities.",
    degree: "Bachelor of Engineering - BE (Computer Engineering)",
  },
  {
    id: 1,
    img: GPK,
    school: "Government Polytechnic, Karad",
    date: "Dec 2020 - June 2023",
    grade: "91.09%",
    desc: "Completed Diploma in Computer Engineering. Gained in-depth knowledge in data structures, software engineering, database systems, and participated in real-time application projects.",
    degree: "Diploma in Computer Engineering",
  },
  {
    id: 2,
    img: THSK,
    school: "Tilak High School, Karad",
    date: "Apr 2014 - March 2020",
    grade: "96.60%",
    desc: "Completed secondary education with a focus on Mathematics and Science. Excelled academically and laid the foundation for further studies in computer science.",
    degree: "SSC (Class 10) - Maharashtra State Board",
  },
];

export const projects = [
  {
    id: 0,
    title: "React Portfolio & Mini Projects Showcase",
    description:
      "This includes my personal portfolio and mini React.js projects like Contact Keeper and Ash-Film City. These projects demonstrate API integration, responsive UI, and modern component-based design. All source codes are available on GitHub.",
    image: portfolioLogo,
    tags: ["React JS", "HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/ashishkdeshmukh31/Ashish-Portfolio-React",
    webapp: "https://ashishdeshmukh.vercel.app/",
  },
  {
    id: 1,
    title: "E-Vehicle Charging Station Website",
    description:
      "Developed a professional website for an actual client at WolFox Services using HTML, CSS, JavaScript and PHP for e-vehicle station listings.",
    image: evLogo,
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    github: "https://github.com/ashishkdeshmukh31/Client_Project.git",
    webapp: "https://www.ultragreenpower.in/",
  },
  {
    id: 2,
    title: "Gas Cylinder Station Management",
    description:
      "A Java desktop application using Swing UI and MySQL JDBC to manage cylinder stocks, billing, and customer data for a gas station.",
    image: gasstationLogo,
    tags: ["Java", "Swing", "MySQL", "JDBC"],
    github:
      "https://github.com/ashishkdeshmukh31/Gas-Cylinder-Station-Management.git",
    webapp: "",
  },
  {
    id: 3,
    title: "Chatbot using React",
    description:
      "A chatbot web application built with React, JavaScript, HTML, and CSS to simulate interactive conversations with dynamic user interfaces.",
    image: chatbotLogo,
    tags: ["React", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/ashishkdeshmukh31/Chatbot.git",
    webapp: "https://ashprojectchatbot.netlify.app/",
  },
  {
    id: 4,
    title: "Sign Language Detection App",
    description:
      "A machine learning-based app that detects and interprets sign language gestures using computer vision and Python libraries.",
    image: signLangLogo,
    tags: ["Python", "OpenCV", "Machine Learning", "Computer Vision"],
    github:
      "https://github.com/ashishkdeshmukh31/Sign-Language-Detection-App.git",
    webapp: "",
  },
];
