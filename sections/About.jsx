'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';

import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Me" textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] lg:mx-[100px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white" />I'm a full stack <b>Web/Android Developer</b> and <b>UI/UX Designer</b>. Currently, I'm pursuing my B.Tech in Computer Science Engineering
        from <b>IIT Indore</b>. Recently, I completed my internship at <b>Amazon</b> as a SDE, where I worked on projects based on Angular, React, Java, Spring and Web MVC. I am passionate about creating engaging and intuitive digital experiences.
      </motion.p>
      <motion.img variants={fadeIn('up', 'tween', 0.3, 1)} src="/arrow-down.svg" alt="arrow-down" className="w-[18px] h-[28px] object-contain mt-[28px]" />
    </motion.div>
  </section>
);

export default About;
