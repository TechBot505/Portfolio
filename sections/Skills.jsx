'use client';

import { motion } from 'framer-motion';
import styles from '../styles';

import { staggerContainer } from '../utils/motion';
import { TypingText, TitleText } from '../components';
import Skill from '../components/Skill';
import { skills } from '../constants';

const Skills = () => (
  <section id="skills" className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} flex flex-col relative text-center mx-auto justify-center items-center`}
    >
      <TypingText title="| My Skills" textStyles="text-center" />
      <TitleText title="What I Can Do" textStyles="text-center" />
      <div className="mt-[50px] grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-5">
        {skills.map((skill) => (
          <Skill
            key={skill.id}
            link={skill.url}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Skills;
