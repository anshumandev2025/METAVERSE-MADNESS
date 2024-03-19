'use client';
import {motion} from 'framer-motion'
import { textContainer, textVariant, textVariant2 } from '../utils/motion';
export const TypingText = ({title,textStyles}) => (
  <motion.p className={`${textStyles}  font-semibold text-white`} variants={textContainer} >
    {Array.from(title).map((item,index)=>(
      <motion.span variants={textVariant2}  key={index}>{item}</motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({title,textStyles}) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
