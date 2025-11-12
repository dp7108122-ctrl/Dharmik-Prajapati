
import React from 'react';
import { HtmlIcon, CssIcon, JsIcon, ReactIcon, NextJsIcon, TailwindIcon, TypeScriptIcon, GitIcon } from './IconComponents';

interface Skill {
    name: string;
    icon: React.ElementType;
}

const skillsList: Skill[] = [
    { name: 'HTML5', icon: HtmlIcon },
    { name: 'CSS3', icon: CssIcon },
    { name: 'JavaScript', icon: JsIcon },
    { name: 'TypeScript', icon: TypeScriptIcon },
    { name: 'React', icon: ReactIcon },
    { name: 'Next.js', icon: NextJsIcon },
    { name: 'Tailwind CSS', icon: TailwindIcon },
    { name: 'Git & GitHub', icon: GitIcon },
];

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
    <div className="bg-slate-800 p-6 rounded-lg flex flex-col items-center justify-center gap-4 text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/20">
        <skill.icon className="w-12 h-12 text-sky-400" />
        <h3 className="font-semibold text-lg text-white">{skill.name}</h3>
    </div>
);


const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-20 md:py-32">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white">My Tech Stack</h2>
                <p className="text-lg text-sky-400">Technologies I work with</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
                {skillsList.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                ))}
            </div>
        </section>
    );
};

export default Skills;
