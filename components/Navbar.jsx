'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img src="/search.svg" className="w-[24px] h-[24px] object-contain" alt="search" />
      {/* <h2 className="font-extrabold text-[24px] leading-[30px] text-white">Robin</h2> */}
      <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]">
        <img src="/headset.svg" alt="headset" className="w-[24px] h-[24px] object-contain" />
        <Link href="https://drive.google.com/file/d/1ELghvzCu-4KJrYNZvjq14Qw9g0YmDhNt/view?usp=drive_link"><span className="font-normal text-[16px] text-white">Resume</span></Link>
      </button>
      <img src="/menu.svg" className="w-[24px] h-[24px] object-contain" alt="menu" />
    </div>
  </motion.nav>
);

export default Navbar;
