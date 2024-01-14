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
  pms,
  et,
  cicd,
  vpc,
  polly,
  sns,
  fr,
  cr,
  cv,
  ecm,
  fnc,
  fi,
  mv,
  pm,
  qg,
} from "../assets";
import aws_dev from "../assets/aws-dev.png";
import aws_pract from "../assets/aws-pract.png";

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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AWS Certified Developer – Associate",
    icon: aws_dev,
    url: "https://www.credly.com/badges/d3294378-0d73-43b4-81c3-ab9ff09999f6/",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    icon: aws_pract,
    url: "https://www.credly.com/badges/04d1bad4-7c19-4734-bdf7-b788374a9397",
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
      "Delivering a robust and secure server for the admin web application with Node.js, Express, TypeScript, and MongoDB, ensuring secure data storage and enhanced authorization through OAuth authentication with Passport.js.",
      "Architecting a highly scalable Go server for the core OTP system with RESTful API endpoints, integrating Redis and PostgreSQL for efficient data management, and deploying it seamlessly on AWS using EC2, RDS, and ElasticCache.",
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
      "Utilized comprehensive Java skills to ensure accurate data transmission and effortlessly integrate library migrations within the Spring Framework, optimizing overall system performance.",
      "Increased system efficiency by optimizing MongoDB queries with queryBuilder, leading to significant performance improvements.",
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
    name: "Finance Dashboard App",
    description:
      "A comprehensive finance dashboard app using the MERN stack, incorporating TypeScript for type safety, Redux for state management, and MUI for a visually appealing and intuitive user interface.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
      },
      {
        name: "Typescript",
      },
      {
        name: "Node.js",
      },
      {
        name: "MongoDB",
      },
      {
        name: "MUI",
      },
    ],
    image: fnc,
    source_code_links: [
      "https://github.com/AndrewJSunwoo/MERN-finance-dashboard-app",
    ],
    website_link: "",
  },
  {
    name: "Facial Recognition",
    description:
      "A facial recognition system using AWS Rekognition, Lambda, and DynamoDB to securely authenticate users, featuring a user-friendly React JS frontend and seamless integration with backend services.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
      },
      {
        name: "Rekognition",
      },
      {
        name: "Lambda",
      },
      {
        name: "DynamoDB",
      },
      {
        name: "API Gateway",
      },
      {
        name: "S3",
      },
    ],
    image: fi,
    source_code_links: [
      "https://github.com/AndrewJSunwoo/AWS-facial_recognition",
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
    image: mv,
    source_code_links: [
      "https://github.com/AndrewJSunwoo/React-Movie_review_app_frontend",
      "https://github.com/AndrewJSunwoo/React-Movie_review_app_backend",
    ],
    website_link: "",
  },
  {
    name: "Project Management App",
    description:
      "A Project Management App integrating React, GraphQL, Node.js, MongoDB, Express, and TailwindCSS for efficient and collaborative project tracking.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "GraphQL",
      },
      {
        name: "Node.js",
      },
      {
        name: "Express",
      },
      {
        name: "MongoDB",
      },
      {
        name: "TailwindCSS",
      },
    ],
    image: pm,
    source_code_links: [
      "https://github.com/AndrewJSunwoo/MERN-Project_Management_App",
    ],
    website_link: "",
  },
  {
    name: "Quote Generator Application",
    description:
      "A dynamic quote generator application using Next.js for an engaging user experience, backed by a serverless architecture on AWS Amplify for efficient hosting, scalability, and continuous deployment.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "AWS Amplify",
      },
      {
        name: "GraphQL",
      },
      {
        name: "DynamoDB",
      },
    ],
    image: qg,
    source_code_links: ["https://github.com/AndrewJSunwoo/AWS-quote_generator"],
    website_link: "",
  },
];

const cloudProjects = [
  {
    name: "File Upload Notifier",
    description:
      "A file upload notifier project leveraging Amazon S3, Lambda, and SNS for seamless event-driven communication in a cloud-based environment",
    tags: [
      {
        name: "S3",
        color: "green-text-gradient",
      },
      {
        name: "Lambda",
        color: "green-text-gradient",
      },
      {
        name: "SNS",
        color: "green-text-gradient",
      },
    ],
    image: sns,
    source_code_links: [
      "https://github.com/AndrewJSunwoo/AWS-S3_file_upload_notifier_lambda",
    ],
    website_link: "",
  },
  {
    name: "Prompt Reader",
    description:
      "A Polly prompt reader project utilizing Amazon Polly, S3, and Lambda to convert text prompts into spoken audio files for enhanced accessibility and communication",
    tags: [
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "AWS Polly",
        color: "green-text-gradient",
      },
      {
        name: "S3",
        color: "blue-text-gradient",
      },
      {
        name: "Lambda",
        color: "blue-text-gradient",
      },
    ],
    image: polly,
    source_code_links: [
      "https://github.com/AndrewJSunwoo/AWS-polly_prompt_reader",
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
  cloudProjects,
  mobileProjects,
};
