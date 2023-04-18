'use client';

import Link from 'next/link';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index, gitUrl, techStack }) => (
  <div>
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 1)}
      className="flex md:flex-row flex-col gap-4"
    >
      <Link href={gitUrl}><img src={imgUrl} alt="planet-01" className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover" /></Link>
      <div className="w-full flex justify-between items-center">
        <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
          <h4 className="font-normal lg:text-[42px] text-[26px] text-white">{title}</h4>
          <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">{subtitle}</p>
          <p className="mt-[16px] font-normal lg:text-[18px] text-[12px] text-[#94a3b8]">{techStack}</p>
        </div>
        <div className="lg:flex hidden items-center justify-center h-[100px] w-[100px] rounded-full bg-transparent border-[1px] border-white">
          <Link href={gitUrl} className="w-[40%] h-[40%] mt-[10px] ml-[5px] object-contain"><img src="/arrow.svg" alt="arrow" /></Link>
        </div>
      </div>
    </motion.div>
  </div>
);

export default InsightCard;
