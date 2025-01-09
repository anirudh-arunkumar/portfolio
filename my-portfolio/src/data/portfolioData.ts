import {
    Project,
    Skill
} from '../types';

export const projects: Project[] = [
    {
        title: "Movie Recommendation",
        description: "Developed a cross platform mobile application (iOS and Android) to recommend movies",
        technologies: ["Swift", "Kotlin", "Python", "Jupyter Notebook"],
        githubUrl: "https://github.com"
      }
    
];

export const skills: Skill[] = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "HTML/CSS", "Tailwind CSS"]
    },
    {
      category: "Backend",
      items: ["Flask", "Spring Boot", "NodeJS", "Express", "MySQL", "Django", "Gin"]
    }
  ];
  
  export const personalInfo = {
    name: "Anirudh Arunkumar",
    title: "Software Engineer",
    email: "anirudh.arunkumar@gatech.edu",
    github: "https://github.com/anirudh-arunkumar",
    linkedin: "https://www.linkedin.com/in/anirudh-arunkumar/"
  };