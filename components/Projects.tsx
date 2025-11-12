
import React from 'react';
import { GitHubIcon, ExternalLinkIcon } from './IconComponents';

interface Project {
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
    liveUrl: string;
    repoUrl: string;
}

const projects: Project[] = [
    {
        title: "E-commerce Platform",
        description: "A feature-rich online shopping platform with product listings, cart functionality, and a secure checkout process.",
        imageUrl: "https://picsum.photos/seed/project1/600/400",
        tags: ["React", "Next.js", "Tailwind CSS", "Stripe"],
        liveUrl: "#",
        repoUrl: "#"
    },
    {
        title: "Project Management Dashboard",
        description: "A responsive dashboard for tracking tasks, projects, and team progress with interactive charts and drag-and-drop functionality.",
        imageUrl: "https://picsum.photos/seed/project2/600/400",
        tags: ["React", "TypeScript", "Recharts", "Appwrite"],
        liveUrl: "#",
        repoUrl: "#"
    },
    {
        title: "Portfolio Website Template",
        description: "A sleek and modern personal portfolio template built with performance and aesthetics in mind, easily customizable.",
        imageUrl: "https://picsum.photos/seed/project3/600/400",
        tags: ["HTML", "CSS", "JavaScript", "GSAP"],
        liveUrl: "#",
        repoUrl: "#"
    },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <div className="bg-slate-800 rounded-lg overflow-hidden group flex flex-col">
            <div className="overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                        <span key={tag} className="bg-sky-900/50 text-sky-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                    ))}
                </div>
                <div className="flex justify-end items-center gap-4 mt-auto">
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors duration-300">
                        <GitHubIcon className="w-6 h-6" />
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors duration-300">
                        <ExternalLinkIcon className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </div>
    );
}

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-20 md:py-32 bg-slate-900">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
                <p className="text-lg text-sky-400">A selection of my work</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map(project => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
