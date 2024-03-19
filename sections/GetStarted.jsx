'use client';
import {motion} from 'framer-motion'
import { fadeIn, planetVariants, slideIn, staggerContainer } from '../utils/motion';
import styles from '../styles';
import { TypingText } from '../components';
import { startingFeatures } from '../constants';
const GetStarted = () => (
  <motion.section variants={staggerContainer} initial="hidden" whileInView="show" viewport={{once:false,amount:0.25}} className={`${styles.xPaddings} text-white flex flex-col lg:flex-row items-center justify-center gap-5`}>
    <motion.div variants={planetVariants('left')} className=''>
      <img src='/get-started.png' alt="getStarted" className='w-3/4 h-3/4 ' />
    </motion.div>
    <motion.div variants={fadeIn('left','tween',0.1,0.5)}  className='flex flex-col justify-center items-center mt-5'>
      <TypingText title="| How Metaverus Works" textStyles="relative right-24 bottom-12"/>
      <h1 className='text-7xl font-bold max-w-3xl'>Get started with just a few clicks</h1>
      <div className='flex items-start w-full flex-col gap-5 mt-10'>
        {startingFeatures.map((item,index)=>(
          <div className='flex  items-center gap-5'>
          <div className='flex items-center justify-center bg-[#323F5D] p-5 h-[70px] w-[70px]  rounded-[20px]'>
            <p className='font-semibold text-xl'>{index}</p>
          </div>
          <div className='text-secondary-white font-semibold lg:max-w-[15rem]  '>{item}</div>
          </div>

        ))}
      </div>
    </motion.div>
  </motion.section>
);

export default GetStarted;
