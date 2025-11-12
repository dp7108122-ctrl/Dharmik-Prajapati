
import React from 'react';

const DetailItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <div className="flex flex-col sm:flex-row sm:items-center">
        <p className="font-semibold text-white w-32 shrink-0">{label}</p>
        <p className="text-slate-400">{value}</p>
    </div>
);

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 md:py-32">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white">About Me</h2>
                <p className="text-lg text-sky-400">A brief introduction</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                <div className="lg:col-span-2 flex justify-center">
                     <img src="https://picsum.photos/seed/portfolio-about/400/500" alt="About Me" className="rounded-lg shadow-2xl w-full max-w-sm object-cover" />
                </div>
                <div className="lg:col-span-3">
                    <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                        I am a dedicated Frontend Developer with a Bachelor of Computer Applications (BCA) degree. My journey in web development is driven by a desire to build intuitive, high-performance, and visually appealing user interfaces. I thrive on solving complex problems and continuously learning new technologies to enhance my skill set.
                    </p>
                    <div className="space-y-4">
                        <DetailItem label="Name" value="Dharmik Ramsingbhai Prajapati" />
                        <DetailItem label="Date of Birth" value="01 January 2006" />
                        <DetailItem label="Education" value="BCA (Bachelor of Computer Applications)" />
                        <DetailItem label="Nationality" value="Indian" />
                        <DetailItem label="Languages" value="Gujarati, Hindi, English" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
