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
  hash,
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
  terra,
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
import vpc from "../assets/vpc.jpg";
import cicd from "../assets/cicd.png";

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
    imageUrl: terra,
    name: "Terraform",
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
    title: "Founding Engineer",
    subtitle: "(Full Stack Developer, Intern)",
    company_name: "HashedTokens ",
    icon: hash,
    iconBg: "#FFFFFF",
    date: "Aug 2023 - Present",
    points: [
      "Building and iteratively refining an OTP SaaS platform aimed at optimizing secure document and link sharing, with plans to gather and incorporate user feedback upon market launch.",
      "Spearheading the development of a responsive admin web application using React, TypeScript, and Material UI, enabling granular access control and real-time OTP usage data for informed stakeholder decisions.",
      "Delivering a robust and secure server with Node.js, Express.js, TypeScript, and MongoDB, ensuring secure data storage and enhanced authorization through OAuth authentication with Passport.js.",
      "Architecting a scalable Go backend server with RESTful API endpoints, leveraging Redis for caching and PostgreSQL for persistent data storage, achieving a 20% data retrieval speed improvement.",
    ],
    link: "https://www.hashedtokens.com/",
    color: "#9c7417",
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
      "Proficient in Agile, streamlining workflow through Jira for task management and TortoiseSVN for efficient version control.",
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
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
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
    source_code_links: ["https://github.com/AndrewJSunwoo/Ecommerce-Website"],
    website_link: "",
  },
  {
    name: "Student Management System",
    description:
      "Built a robust student management system leveraging the power of Angular for a dynamic UI and Spring Boot for secure backend architecture. Manage student data, track progress, and empower educational institutions to foster academic excellence.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
    ],
    image: wip,
    source_code_links: [
      "https://github.com/AndrewJSunwoo/student-management-system",
    ],
    website_link: "",
  },
  {
    name: "Employee Directory App",
    description:
      "Designed a centralized employee directory app powered by Angular and Spring Boot for efficient team collaboration. Simplify employee search, access vital information, and foster stronger connections within your organization.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
    ],
    image: wip,
    source_code_links: [
      "https://github.com/AndrewJSunwoo/employee-directory-app/tree/main",
    ],
    website_link: "",
  },
  {
    name: "Blog App",
    description:
      "Crafted a captivating blog app utilizing the cutting-edge technology of Next.js. Deliver a seamless user experience with lightning-fast performance, SEO optimization, and dynamic content management, empowering creators to share their stories with the world",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: wip,
    source_code_links: [
      "https://github.com/AndrewJSunwoo/student-management-system",
    ],
    website_link: "",
  },
  {
    name: "Movie Review App",
    description:
      "A movie review app built with React.js for the frontend and Spring Boot for the backend, using MongoDB for data storage.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: wip,
    source_code_links: [
      "https://github.com/AndrewJSunwoo/React-Movie_review_app_frontend",
      "https://github.com/AndrewJSunwoo/React-Movie_review_app_backend",
    ],
    website_link: "",
  },
  {
    name: "Expense Tracker",
    description:
      "Track every penny, categorize costs, and budget like a pro with my ASP.NET & SQL expense app.",
    tags: [
      {
        name: "Asp.Net Core MVC",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "blue-text-gradient",
      },
    ],
    image: wip,
    source_code_links: [
      "https://github.com/AndrewJSunwoo/student-management-system",
    ],
    website_link: "",
  },
];

const devOpProjects = [
  {
    name: "End-to-End CI/CD Automation",
    description:
      "I built a seamless CI/CD pipeline on AWS using Jenkins, Ansible, Docker, and GitHub webhooks. This automated system deploys code changes faster and guarantees consistent environments, empowering development teams to release features with efficiency and confidence.",
    tags: [
      {
        name: "Jenkins",
        color: "green-text-gradient",
      },
      {
        name: "Ansible",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "green-text-gradient",
      },
      {
        name: "GitHub Webhooks",
        color: "green-text-gradient",
      },
      {
        name: "AWS EC2",
        color: "green-text-gradient",
      },
    ],
    image: cicd,
    source_code_links: [
      "https://github.com/AndrewJSunwoo/jenkins-cicd-pipeline-aws",
    ],
    website_link: "",
  },
  {
    name: "Automated VPC Deployment",
    description:
      "I designed and implemented a secure and scalable Virtual Private Cloud (VPC) on AWS using Terraform. This infrastructure as code approach empowers me to manage resources efficiently and adapt to changing demands. Furthermore, integrating GitHub Actions with VPC deployment enables automatic updates on code changes, accelerating development cycles.",
    tags: [
      {
        name: "Terraform",
        color: "pink-text-gradient",
      },
      {
        name: "Github Action",
        color: "green-text-gradient",
      },
      {
        name: "AWS VPC",
        color: "blue-text-gradient",
      },
    ],
    image: vpc,
    source_code_links: [
      "https://github.com/AndrewJSunwoo/vpc-terraform-github-action",
    ],
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
    source_code_links: [
      "https://github.com/AndrewJSunwoo/Pharmacy-Management-System",
    ],
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
    source_code_links: ["https://github.com/AndrewJSunwoo/Eye-Tracker"],
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
    source_code_links: ["https://github.com/subeom7/recipe-realm"],
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
    source_code_links: [
      "https://github.com/AndrewJSunwoo/Crypto-Price-Tracker",
    ],
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
    source_code_links: ["https://github.com/AndrewJSunwoo/Covid-Data-Tracker"],
    website_link: "",
  },
];

export {
  services,
  skills,
  experiences,
  webAppProjects,
  devOpProjects,
  softwareProjects,
  mobileProjects,
};
