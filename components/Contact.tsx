
import React from 'react';
import { MailIcon, PhoneIcon } from './IconComponents';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 md:py-32">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold text-white">Get In Touch</h2>
                <p className="text-lg text-sky-400 mt-2 mb-8">
                    I'm currently open to new opportunities. Feel free to reach out!
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12">
                    <a href="mailto:dp7108122@gmail.com" className="inline-flex items-center gap-3 text-lg text-slate-300 hover:text-sky-400 transition-colors duration-300">
                        <MailIcon className="w-7 h-7 text-sky-400" />
                        <span>dp7108122@gmail.com</span>
                    </a>
                    <a href="tel:9274476413" className="inline-flex items-center gap-3 text-lg text-slate-300 hover:text-sky-400 transition-colors duration-300">
                        <PhoneIcon className="w-7 h-7 text-sky-400" />
                        <span>+91 9274476413</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
