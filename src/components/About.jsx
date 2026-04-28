"use client";
import { motion } from "framer-motion";
import { FaCode, FaBriefcase, FaPalette, FaSmile } from "react-icons/fa";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            delay: i * 0.15,
            ease: "easeOut"
        },
    }),
};

const About = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(".about-title", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
            opacity: 0,
            x: -50,
            duration: 1,
            ease: "power2.out",
        });
    }, { scope: containerRef });

    return (
        <motion.div
            id="about"
            ref={containerRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-11/12 lg:w-10/12 mx-auto my-20 relative overflow-hidden bg-base-200 border border-primary/30 rounded-xl p-6 sm:p-10 shadow-lg hover:shadow-primary/10 transition-shadow duration-300"
        >
            <h2 className="about-title text-3xl font-bold mb-8 text-center">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left side: About Details */}
                <div className="space-y-10">
                    {[{
                        icon: <FaCode className="text-2xl text-blue-600 flex-shrink-0" />,
                        title: "My Programming Journey",
                        content: `I started my programming journey exploring various technologies including HTML, CSS, and JavaScript. Over the years, I specialized in full-stack development using React, Node.js, and MongoDB, continuously learning and adapting to new frameworks and tools to build efficient and scalable web applications.`,
                    },
                    {
                        icon: <FaBriefcase className="text-2xl text-green-600 flex-shrink-0" />,
                        title: "The Type of Work I Enjoy",
                        content: `I enjoy building clean, user-friendly interfaces and developing robust backend APIs. I find satisfaction in solving complex problems, optimizing performance, and contributing to collaborative projects. My learning journey with Programming Hero has helped me grow both technically and professionally.`,
                    },
                    {
                        icon: <FaPalette className="text-2xl text-purple-600 flex-shrink-0" />,
                        title: "Hobbies & Interests",
                        content: `Outside of programming, I enjoy playing football and cricket, painting, swimming, and traveling. These activities help me refresh and stay creative.`,
                    },
                    {
                        icon: <FaSmile className="text-2xl text-yellow-500 flex-shrink-0" />,
                        title: "My Personality",
                        content: `I am a dedicated and sincere individual who values continuous learning, teamwork, and creativity. I believe in maintaining a positive attitude and strive to bring enthusiasm and dedication to every project I work on.`,
                    }].map((section, index) => (
                        <motion.section
                            key={index}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            variants={sectionVariants}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center space-x-3 mb-2">
                                {section.icon}
                                <h3 className="text-xl font-semibold">{section.title}</h3>
                            </div>
                            <p>{section.content}</p>
                        </motion.section>
                    ))}
                </div>

                {/* Right side: Photo Section */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="relative w-80 h-80 md:w-96 md:h-96">
                        <Image
                            src="/A.jpg"
                            alt="Asibur Rahman"
                            className="rounded-xl object-cover shadow-xl border-4 border-primary"
                            fill
                            sizes="(max-width: 768px) 100vw, 400px"
                        />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default About;
