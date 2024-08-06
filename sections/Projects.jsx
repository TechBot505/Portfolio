'use client';

import { motion } from 'framer-motion';
import styles from '../styles';

import { staggerContainer } from '../utils/motion';
import { TypingText, InsightCard, TitleText } from '../components';
import { insights } from '../constants';

const Projects = () => (
  <section id="projects" className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Experiences" textStyles="text-center" />
      <TitleText title="The Experiences I have earned" textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((insight, index) => (
          <InsightCard
            key={`insight-${index}`}
            {...insight}
            index={index + 1}

          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Projects;
