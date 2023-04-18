'use client';

import { motion } from "framer-motion";
import { TypingText } from '../components';
import styles from '../styles'

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
        <span className="font-extrabold text-white"></span>I'm a full stack Web Developer and UI/UX Designer. Currently I'm pursuing my B.Tech in Computer Science Engineering
        from IIT Indore. I am passionate about creating engaging and intuitive digital experiences. When I'm not coding or designing, you can find me painting on the canvas or playing Keyboard.
      </motion.p>
      <motion.img variants={fadeIn('up', 'tween', 0.3, 1)} src="/arrow-down.svg" alt="arrow-down" className="w-[18px] h-[28px] object-contain mt-[28px]"></motion.img>
    </motion.div>
  </section>
);

export default About;
