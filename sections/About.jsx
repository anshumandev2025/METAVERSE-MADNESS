'use client';

import { TypingText } from "../components";
import styles from "../styles";
import {motion} from 'framer-motion'
import { fadeIn, staggerContainer } from "../utils/motion";
const About = () => (
  <motion.section  variants={staggerContainer} initial="hidden" whileInView="show"   viewport={{ once: false, amount: 0.25 }}
  className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>
    <motion.div >
      <TypingText title="|Metaverse" textStyles="text-center font-extrabold"/>
    </motion.div>
    <motion.p variants={fadeIn('up',"tween",0.2,1)} className="mt-[10px] font-eudoxus font-normal sm:text-[32px] text-[20px] text-center text-[#c7c7c7] px-2 sm:px-8 md:px-14 ">
    <span className="text-white font-bold ">Metaverse</span> is a new thing in the future, where you can enjoy the virtual world by feeling like it's really real, you can feel what you feel in this metaverse world, because this is really the <span className="text-white font-bol">madness of the metaverse</span>  of today, using only <span className="text-white font-bold">VR</span> devices you can easily explore the metaverse world you want, turn your dreams into reality. Let's <span className="text-white font-bold">explore</span> the madness of the metaverse by scrolling down
    </motion.p>
    <motion.div variants={fadeIn('down',"tween",0.2,1)} className="mt-10">
      <img src="/arrow-down.svg" alt="arrow" className="w-8 h-10 cursor-pointer" />
    </motion.div>
  </motion.section>
);

export default About;
