'use client';

import { motion } from "framer-motion";
import { socials } from "../constants";
import styles from "../styles";
import { footerVariants } from "../utils/motion";
import Link from "next/link";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient"/>
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        {/* <div className="flex items-center justify-between flex-wrap"> */}
        {/* <img src="/contact.png" alt="contact" className="w-[400px] h-[340px] object-contain" /> */}
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">Get in Touch</h4>
        {/* </div> */}
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]">
          <img src="/headset.svg" alt="headset" className="w-[24px] h-[24px] object-contain" />
          <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=cse210001059@iiti.ac.in"><span className="font-normal text-[16px] text-white">Contact Me</span></Link>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h4 className="font-extrabold text-white text-[24px]">Robin</h4>
          <p className="font-normal text-[14px] text-white opacity-50">Copyright @ 2023 Robin. All rights reserved.</p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <a href={social.link}><img key={social.name} alt={social.name} src={social.url}  className="w-[24px] h-[24px] object-contain cursor-pointer"/></a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
