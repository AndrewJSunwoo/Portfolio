import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  docker,
  sysdef,
  sukhi,
  iloveshare,
  angular,
  redux,
  express,
  tailwind,
  aws,
  csharp,
  java,
  nextjs,
  python,
  sql,
  graphql,
  dotnet,
  spring,
} from "../assets";
import frontend from "../assets/front-end.png";
import backend from "../assets/web-settings.png";
import reactnative from "../assets/smartphone.png";
import ui from "../assets/ui-design.png";
import cv from "../assets/cv.png";
import pms from "../assets/pms.png";
import ecm from "../assets/ecm.png";
import cr from "../assets/cr.jpg";
import fr from "../assets/fr.png";
import wip from "../assets/wip.png";
import et from "../assets/et.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile App Developer",
    icon: reactnative,
  },
  {
    title: "UI / UX Designer",
    icon: ui,
  },
];

const skills = [
  {
    imageUrl: html,
    name: "HTML",
  },
  {
    imageUrl: css,
    name: "CSS",
  },
  {
    imageUrl: javascript,
    name: "Javascript",
  },
  {
    imageUrl: typescript,
    name: "Typescript",
  },
  {
    imageUrl: reactjs,
    name: "ReactJS",
  },
  {
    imageUrl: angular,
    name: "Angular",
  },
  {
    imageUrl: git,
    name: "Git",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
  },
  {
    imageUrl: nodejs,
    name: "Nodejs",
  },
  {
    imageUrl: redux,
    name: "Redux",
  },
  {
    imageUrl: tailwind,
    name: "TailwindCSS",
  },
  {
    imageUrl: express,
    name: "Express",
  },
  {
    imageUrl: aws,
    name: "AWS",
  },
  {
    imageUrl: csharp,
    name: "C#",
  },
  {
    imageUrl: java,
    name: "Java",
  },
  {
    imageUrl: docker,
    name: "Docker",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
  },
  {
    imageUrl: python,
    name: "Python",
  },
  {
    imageUrl: sql,
    name: "SQL",
  },
  {
    imageUrl: graphql,
    name: "GraphQL",
  },
  {
    imageUrl: dotnet,
    name: ".Net",
  },
  {
    imageUrl: spring,
    name: "Spring",
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Systems Definition Inc",
    icon: sysdef,
    iconBg: "#FFFFFF",
    date: "May 2022 - May 2023",
    points: [
      "Collaborated in a team to develop a web application that enabled efficient tour roster creation for Fire Department Chiefs and Officers, ensuring precise firefighter staffing data to support safety and accountability efforts at FDNY.",
      "Developed user-friendly interfaces for fire department officers by implementing new features, using React and TypeScript.",
      "Leveraged Java proficiency to perform bug fixes and execute library migration on the backend with Spring, optimizing application performance and stability.",
      "Utilized AGILE methodologies to manage project tasks with Jira, and actively participated in weekly scrum meetings.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Sukhi",
    icon: sukhi,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - May 2022",
    points: [
      "Worked closely with the senior developer and UI/UX designer to successfully create a company website using Squarespace, while implementing custom CSS and JavaScript to enhance functionality and user experience.",
      "Website link: https://www.thesukhiproject.com/",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Triangle Works Corporation",
    icon: iloveshare,
    iconBg: "#bb25f6",
    date: "Aug 2021 - Dec 2021",
    points: [
      "Collaborated in a global, cross-functional Scrum Team to successfully develop a web application for an interactive social live mobile application.",
      "Assisted the middleware team in establishing efficient connectivity between the application and database, utilizing React and AWS DynamoDB.",
      "Took a proactive role in contributing to the development of the server-side code utilizing Typescript, while also leading the design of the user interface for the application.",
    ],
  },
];

const projects = [
  {
    name: "E-commerce Website",
    description:
      "A fully functional and user-friendly E-Commerce web application using React and Redux for the front-end, providing an intuitive and seamless user experience.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
    ],
    image: ecm,
    source_code_link: "https://github.com/AndrewJSunwoo/Ecommerce-Website",
    website_link: "",
  },
  {
    name: "Pharmacy Management System",
    description:
      "A robust Pharmacy Management System with a user-friendly dashboard, enabling efficient management of customers, employees, and products.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: ".NET Framework",
        color: "pink-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
    ],
    image: pms,
    source_code_link:
      "https://github.com/AndrewJSunwoo/Pharmacy-Management-System",
    website_link: "",
  },
  {
    name: "Recipe-Realm",
    description:
      "A recipe platform with AI-driven personalized dish recommendations, enabling easy exploration of global cuisines and tailored recipes. Led a team of 6 students in the capstone project, overseeing all back-end development and AWS implementation.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Expo",
        color: "green-text-gradient",
      },
      {
        name: "Recoil",
        color: "pink-text-gradient",
      },
    ],
    image: fr,
    source_code_link: "https://github.com/subeom7/recipe-realm",
    website_link: "",
  },
  {
    name: "Crypto Price Tracker",
    description:
      "A crypto price tracking mobile application that alerts live prices and the market cap.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Expo",
        color: "green-text-gradient",
      },
      {
        name: "AWS Amplify",
        color: "orange-text-gradient",
      },
    ],
    image: cr,
    source_code_link: "https://github.com/AndrewJSunwoo/Crypto-Price-Tracker",
    website_link: "",
  },
  {
    name: "Eye clicker",
    description:
      "A software that enables users to perform screen clicks by simply blinking your eyes.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
    ],
    image: et,
    source_code_link: "https://github.com/AndrewJSunwoo/Eye-Tracker",
    website_link: "",
  },
  {
    name: "Simple Covid-19 App",
    description: "A real time Covid-19 tracking iOS application using Swift.",
    tags: [
      {
        name: "Swift",
        color: "pink-text-gradient",
      },
    ],
    image: cv,
    source_code_link: "https://github.com/AndrewJSunwoo/Covid-Data-Tracker",
    website_link: "",
  },
  {
    name: "Project Management Application",
    description:
      "A project management web application for streamlined task organization and collaboration.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Asp.Net Core",
        color: "green-text-gradient",
      },
      {
        name: "Net 7.0,",
        color: "pink-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
    ],
    image: wip,
    source_code_link: "https://github.com/AndrewJSunwoo",
    website_link: "",
  },
];

export { services, skills, experiences, projects };
