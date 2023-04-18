'use client';

import { motion } from "framer-motion";
import styles from "../styles";

import { staggerContainer } from '../utils/motion';
import { TypingText, TitleText } from '../components';
import Skill from "../components/Skill";
import Skill2 from "../components/Skill2";
import { skills1, skills2 } from "../constants";

const World = () => (
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
      <div className="mt-[50px] grid grid-cols-4 gap-5">
        {skills1.map((skill) => (
          <Skill
            key={skill.id}
            link={skill.url}
          />
        ))}
        {skills2.map((skill) => (
          <Skill2
            key={skill.id}
            link={skill.url}
          />
        ))}
      </div>
    </motion.div>
  </section>
)

export default World;