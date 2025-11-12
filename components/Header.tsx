
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);
    
    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-white">
                    D<span className="text-sky-400">.</span>P<span className="text-sky-400">.</span>
                </a>
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} className="text-slate-300 hover:text-sky-400 transition-colors duration-300 font-medium">
                            {link.label}
                        </a>
                    ))}
                </nav>
                <div className="md:hidden">
                    {/* Mobile menu button can be added here */}
                </div>
            </div>
        </header>
    );
};

export default Header;
