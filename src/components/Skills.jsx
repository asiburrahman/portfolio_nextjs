"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import {
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaDatabase,
    FaTools,
    FaFire,
    FaWind
} from "react-icons/fa";
import 'swiper/css';

const Skills = () => (
    <motion.div
        id="skills"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="p-10 scroll-mt-16 w-11/12 lg:w-10/12 mx-auto shadow-2xl rounded-xl bg-base-200 my-20"
    >
        <h2 className="text-3xl font-bold mb-6 text-center">My Skills</h2>
        <Swiper
            speed={2000}
            modules={[Autoplay]}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            spaceBetween={30}
            slidesPerView={2}
            breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
            }}
            loop={true}
        >
            {[{
                icon: <FaReact className="text-5xl text-blue-500 mx-auto mb-2" />,
                label: "React"
            }, {
                icon: <FaHtml5 className="text-5xl text-orange-500 mx-auto mb-2" />,
                label: "HTML5"
            }, {
                icon: <FaCss3Alt className="text-5xl text-blue-700 mx-auto mb-2" />,
                label: "CSS3"
            }, {
                icon: <FaJs className="text-5xl text-yellow-500 mx-auto mb-2" />,
                label: "JavaScript"
            }, {
                icon: <FaNodeJs className="text-5xl text-green-600 mx-auto mb-2" />,
                label: "Node.js"
            }, {
                icon: <FaDatabase className="text-5xl text-purple-600 mx-auto mb-2" />,
                label: "MongoDB"
            }, {
                icon: <FaFire className="text-5xl text-red-500 mx-auto mb-2" />,
                label: "Firebase"
            }, {
                icon: <FaWind className="text-5xl text-cyan-500 mx-auto mb-2" />,
                label: "Tailwind CSS"
            }, {
                icon: <FaTools className="text-5xl text-gray-500 mx-auto mb-2" />,
                label: "DaisyUI"
            }].map((skill, index) => (
                <SwiperSlide key={index} className="text-center">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="p-4 bg-base-100 shadow-lg rounded-lg border-beam-card"
                    >
                        {skill.icon}
                        <p className="font-semibold mt-1">{skill.label}</p>
                    </motion.div>
                </SwiperSlide>
            ))}
        </Swiper>
    </motion.div>
);

export default Skills;
