'use client';
import {motion} from 'framer-motion'
import { fadeIn, planetVariants, slideIn, staggerContainer } from '../utils/motion';
import styles from '../styles';
import { ExploreCard, TypingText } from '../components';
import { exploreWorlds } from '../constants';
import { useState } from 'react';
const Explore = () => {
  const [active,setActive]=useState('world-2')
  const handleActive=(id)=>{
    setActive(id)
  }
  return (
  <motion.section id='explore' variants={staggerContainer} className={`${styles.innerWidth} ${styles.paddings}  mx-auto flex flex-col space-y-5 `} initial="hidden" whileInView="show" viewport={{once:false,amount:0.25}}>
  <TypingText title="|The World" textStyles="text-center"/>
  <motion.h1 variants={fadeIn('up',"tween",0.2,1)} className="'font-bold lg:text-[70px] md:text-[50px] sm:text-[30px] text-[20px] lg:leading-[100px] md:leading-[70px] sm:leading-[50px] leading-[30px] uppercase text-white' text-center px-5 text-white md:px-10">
    Choose the world you want to explore
  </motion.h1>
  <div className='flex flex-col lg:flex-row min-h-[70vh] w-full gap-7 mt-20'>
    {exploreWorlds.map((world,index)=>(
      <ExploreCard key={world.id} index={index} active={active} handleActive={handleActive} {...world}  />
    ))}
  </div>
  </motion.section>
  )
};

export default Explore;
