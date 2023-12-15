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
import cloud from "../assets/cloud.png";
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
    title: "Full Stack Developer",
    icon: frontend,
  },
  {
    title: "Software Developer",
    icon: backend,
  },
  {
    title: "Mobile App Developer",
    icon: reactnative,
  },
  {
    title: "Cloud Engineer",
    icon: cloud,
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
    imageUrl: nextjs,
    name: "Next.js",
  },
  {
    imageUrl: dotnet,
    name: ".Net",
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
    imageUrl: nodejs,
    name: "Nodejs",
  },
  {
    imageUrl: express,
    name: "Express",
  },
  {
    imageUrl: spring,
    name: "Spring",
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
    imageUrl: mongodb,
    name: "MongoDB",
  },
  {
    imageUrl: java,
    name: "Java",
  },
  {
    imageUrl: python,
    name: "Python",
  },
  {
    imageUrl: csharp,
    name: "C#",
  },
  {
    imageUrl: aws,
    name: "AWS",
  },
  {
    imageUrl: docker,
    name: "Docker",
  },
  {
    imageUrl: git,
    name: "Git",
  },
];

const experiences = [
  {
    title: "Founding Engineer / Full Stack Developer, Intern",
    company_name: "HashedTokens ",
    icon: hash,
    iconBg: "#FFFFFF",
    date: "Aug 2023 - Present",
    points: [
      "Building and iteratively refining an OTP SaaS platform aimed at optimizing secure document and link sharing, with plans to gather and incorporate user feedback upon market launch.",
      "Spearheading the development of a responsive admin web application using React, TypeScript, and Material UI, enabling granular access control and real-time OTP usage data for informed stakeholder decisions.",
      "Delivering a robust and secure server with Node.js, Express.js, TypeScript, and MongoDB, ensuring secure data storage and enhanced authorization through OAuth authentication with Passport.js.",
      "Architecting a scalable Go backend server with RESTful API endpoints, leveraging Redis for caching and PostgreSQL for persistent data storage, achieving a 20% data retrieval speed improvement."
    ],
    link: "https://www.systemsdefinition.com/",
    color: "#284785",
  },
  {
    title: "Software Developer, Intern",
    company_name: "Systems Definition Inc",
    icon: sysdef,
    iconBg: "#FFFFFF",
    date: "May 2022 - May 2023",
    points: [
      "Contributed to a cross-functional team developing a web application for U.S. Fire Departments, leveraging React, TypeScript, and Material UI to enhance data visualization and user experience.",
      "Utilized Java and Spring Framework on AWS EC2 to ensure accurate data transmission and implement library migrations for enhanced system functionality.",
      "Leveraged querybuilder to streamline data transmission between MongoDB and the backend.",
      "Proficient in Agile, streamlining workflow through Jira for task management and TortoiseSVN for efficient version control."
    ],
    link: "https://www.systemsdefinition.com/",
    color: "#284785",
  },
  {
    title: "Web Developer, Intern",
    company_name: "Sukhi",
    icon: sukhi,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - May 2022",
    points: [
      "Worked closely with the senior developer and UI/UX designer to successfully create a company website using Squarespace, while implementing custom CSS and JavaScript to enhance functionality and user experience.",
    ],
    link: "https://www.thesukhiproject.com/",
    color: "#75A6A9",
  },
  {
    title: "Software Developer, Intern",
    company_name: "Triangle Works Corporation",
    icon: iloveshare,
    iconBg: "#bb25f6",
    date: "Aug 2021 - Dec 2021",
    points: [
      "Designed and developed RESTful APIs in TypeScript within a Scrum Team, utilizing Winston logger and AWS CloudWatch for robust error tracking.",
      "Improved application responsiveness by optimizing AWS DynamoDB queries and access patterns, resulting in a demonstrably smoother user experience.",
      "Led the design of the web application using Figma, creating an intuitive and user-friendly interface.",
      "Streamlined project management and version control through efficient use of Jira and Bitbucket in an Agile environment.",
    ],
    link: "https://www.iloveshareapp.com/",
    color: "#8A2BE2",
  },
];

const webAppProjects = [
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

const cloudProjects = [
  {
    name: "Quote Generator Application",
    description:
      "A dynamic Next.js application utilizing AWS Amplify, AppSync, Cognito, Lambda, and DynamoDB, where the app fetches random quotes from an API, seamlessly presenting them in a pop-up card with dynamic backgrounds, all supported by a serverless backend and CI/CD pipeline.",
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
];

const devOpProjects = [
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
];

const softwareProjects = [
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
];

const mobileProjects = [
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
      {
        name: "AWS Amplify",
        color: "orange-text-gradient",
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
];

export {
  services,
  skills,
  experiences,
  webAppProjects,
  cloudProjects,
  devOpProjects,
  softwareProjects,
  mobileProjects,
};
