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
    id: "cv",
    title: "CV",
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
    title: "Software Engineering Co-Op",
    company_name: "Truist Financial Corporation",
    icon: truist,
    iconBg: "#383E56",
    date: "June 2024 - December 2024",
    points: [
      "Developed Flask RESTful APIs serving 200,000+ users, enhancing account management and billing workflows.",
      "Deployed natural language models with AWS SageMaker, pre-trained BERT LLM, and 20,000+ Human Resource documents, decreasing manual reporting by 100%.",
      "Accelerated developer release velocity 1.5x by refactoring AWS Secrets Manager implementation across all credit cards APIs",
      "Assisted with migrating 30+ Spring Boot on-prem APIs to an AWS cloud-native architecture improving security, maintainability, and application resilience.",
    ],
  },
  {
    title: "Machine Learning Researcher",
    company_name: "Georgia Institute of Technology",
    icon: georgia,
    iconBg: "#383E56",
    date: "August 2023 - December 2024",
    points: [
      "Created XGBoost, MLP, and ResNet50 classifiers using Pytorch for lung disease diagnosis from medical data, achieving 98% accuracy and 97% F1 score with multi-modal inputs (images and tabular).",
      "Leveraged D3.js to visualize 7,000 light waves and RGB channels on interactive 3D surfaces and graphs.",
      "Optimized a Generative Adversarial Deep Learning Network for optical nano-device design with 92% accuracy.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Truist Financial Corporation",
    icon: truist,
    iconBg: "#383E56",
    date: "June 2023 - August 2023",
    points: [
      "Collaborated with an Agile team to develop a critical application that can handle the movement of over 200 billion dollars per day through Financial Transaction Manager (FTM), Wire Payment Initiation (WPI), SWIFT, FEDLine Direct, and CHIPS.",
      "Modified repetitive request handling logic in Java Spring Boot APIs, decreasing payment transaction processing time by 15%.",
      "Performed MySQL query optimizations and materialized tables, reducing runtime by up to 90%.",
      "Resolved persistent bugs by debugging legacy code using JUnit tests, improving code coverage by 200 cases.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "LightStream",
    icon: lightstream,
    iconBg: "#E6DEDD",
    date: "June 2022 - August 2022",
    points: [
      " Enhanced microservices speed via gRPC implementation, triggering a performance boost of over 50%.",
      "Implemented automation scripts using Terraform and Dynatrace to monitor the performance of 5+ microservices.",
      "Streamlined developer workflow in an Agile team through GitHub Actions, Confluence, and 3 new Go packages.",
    ],
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
      "Collaborated with a team of four to develop models using Random Forest, SVM, and etc. Analyzed NBA data and predicted winning outcome of two teams.",
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
