
import React from 'react';
import { GitHubIcon, LinkedInIcon } from './IconComponents';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-slate-950/50">
            <div className="container mx-auto px-6 md:px-12 py-8 text-center text-slate-400">
                <div className="flex justify-center gap-6 mb-4">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300"><GitHubIcon className="w-6 h-6" /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300"><LinkedInIcon className="w-6 h-6" /></a>
                </div>
                <p>&copy; {currentYear} Dharmik Prajapati. All rights reserved.</p>
                <p className="text-sm mt-2">Built with React & Tailwind CSS</p>
            </div>
        </footer>
    );
};

export default Footer;
