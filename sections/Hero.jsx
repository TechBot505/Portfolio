'use client';

import { motion } from "framer-motion";
import styles from '../styles'
import Typewriter from 'typewriter-effect';
import TextSpan from "../components/TextSpan";

import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => {
  const sentence = " Rohit".split("")

  return (
  <section className={`${styles.yPaddings} sm:pl-16 pl-16`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={`${styles.heroHeading}`}>Hi! I'm</h1>
          {sentence.map((letter, index) => {
            return (
              <TextSpan key={index} >{letter === " " ? "\u00A0" : letter}</TextSpan>
            )
          } )}
        </motion.div>
        <motion.h1
          variants={textVariant(1.1)}
          className={`${styles.heroHeading}`}
        >
          <Typewriter
            options={{
              strings: ['Web Developer', 'Web Designer', 'UI/UX Designer'],
              autoStart: true,
              loop: true,
            }}
          />
        </motion.h1>
      </div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="w-full relative md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
        <img src="/cover-2.png" alt="cover" className="w-full object-cover sm:h-[500px] h-[350px] rounded-tl-[140px] z-[10] relative"></img>
        <a href="#projects">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img src="/stamp-1.png" alt="stamp" className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain hover:opacity-90"></img>
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
  )
};

export default Hero;
