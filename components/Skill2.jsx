'use client'
import React from "react"


import { motion } from "framer-motion"
import { slideIn2 } from "../utils/motion"
import styles from "../styles"

const Skill = ({ key, link }) => {
    return (
        <div className="group relative flex cursor-pointer">
            <motion.img
                variants={slideIn2('right', 'spring', 0.25, 0.8)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                src={link}
                className="rounded-full border border-white object-cover w-24 h-24 group-hover:opacity-50 transition duration-300 ease-in-out"
            ></motion.img>
        </div>
    )
}

export default Skill;