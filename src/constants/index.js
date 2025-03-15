import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  python,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  truist,
  shopify,
  carrent,
  jobit,
  georgia,
  lightstream,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "resume",
    title: "Resume",
    link: "/Anirudh_Arunkumar_Resume.pdf",
    external: true
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Machine Learning Researcher",
    icon: mobile,
  },
  {
    title: "Backend Engineer",
    icon: backend,
  },
  {
    title: "DevOps Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "C",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "AWS",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Teaching Assistant at College of Computing",
    company_name: "Georgia Institute of Technology",
    icon: georgia,
    iconBg: "#383E56",
    date: "January 2025 - Present",
    points: [],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Truist Financial Corporation",
    icon: truist,
    iconBg: "#383E56",
    date: "June 2024 - December 2024",
    points: [],
  },
  {
    title: "Machine Learning Researcher",
    company_name: "Georgia Institute of Technology",
    icon: georgia,
    iconBg: "#383E56",
    date: "August 2023 - December 2024",
    points: [],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Truist Financial Corporation",
    icon: truist,
    iconBg: "#383E56",
    date: "June 2023 - August 2023",
    points: [],
  },
  {
    title: "Software Engineer Intern",
    company_name: "LightStream",
    icon: lightstream,
    iconBg: "#E6DEDD",
    date: "June 2022 - August 2022",
    points: [],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "NBA Win Prediction Model",
    description:
      "Collaborated with a team of four to develop models using Random Forest, SVM, and Logistic Regression. Analyzed NBA data and predicted winning outcome of two teams.",
    tags: [],
    image: carrent,
    source_code_link: "https://endeavored.github.io/cs4641/",
  },
  {
    name: "Distance Sensing Robot",
    description:
      "Built an autonomous robot that can avoid obstacles. It also has a voice control mode which can be controlled through a mobile android app.",
    tags: [],
    image: jobit,
    source_code_link: "https://github.com/sufiyanahmed024/ECE_4180_FinalProject",
  },
  {
    name: "Coinhood",
    description:
      "An application that automatically invests my money by calling the Robinhood API based on live crypto market data.",
    tags: [],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
