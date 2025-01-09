export interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
}

export interface Skill {
    category: string;
    items: string[];
}