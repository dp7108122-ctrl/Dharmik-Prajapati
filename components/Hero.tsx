
import React from 'react';
import { GitHubIcon, LinkedInIcon } from './IconComponents';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
                        Dharmik <br /> Prajapati
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-bold text-sky-400 mb-6">
                        Frontend Developer
                    </h2>
                    <p className="text-lg text-slate-400 max-w-lg mx-auto md:mx-0 mb-8">
                        Crafting beautiful and responsive web experiences with a passion for clean code and modern technologies.
                    </p>
                    <div className="flex justify-center md:justify-start items-center gap-6">
                        <a href="#contact" className="bg-sky-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-sky-600 transition-all duration-300">
                            Get in Touch
                        </a>
                        <div className="flex gap-4">
                           <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300"><GitHubIcon className="w-8 h-8" /></a>
                           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300"><LinkedInIcon className="w-8 h-8" /></a>
                        </div>
                    </div>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                        <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-full blur-2xl opacity-50"></div>
                        <img 
                            src="https://picsum.photos/seed/dharmik/500/500" 
                            alt="Dharmik Prajapati" 
                            className="relative w-full h-full object-cover rounded-full border-4 border-slate-700 shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
