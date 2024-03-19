'use client';
import {motion} from 'framer-motion'
import { slideIn,staggerContainer,textVariant } from '../utils/motion';
import styles from '../styles';
const Hero = () => (
  <section className={`${styles.paddings}`}>
    <motion.div 
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:0.25}}>
      <div className={`${styles.innerWidth} ${styles.heroHeading} text-center`}>
        <motion.h1 className={`${styles.heroHeading}`}  variants={textVariant(1.1)} >Metaverse</motion.h1>
        <motion.div variants={textVariant(1.3)} className='flex items-center justify-center relative z-50'>
          <h1>Ma</h1>
          <div className={`${styles.heroDText}`}/>
          <h1>ness</h1>
        </motion.div>
      </div>
      <motion.div variants={slideIn('right','tween',0.2,1)}  className='relative md:-right-28 -right-10'>
        <div className='absolute hero-gradient  h-[350px]  rounded-tl-[140px] w-full -top-[30px] z-[0]'/>
          <img src="/cover.png" alt="cover" className='w-full h-[350px] object-cover rounded-tl-[140px] relative z-10' />
        <div className='absolute z-10 w-20 h-20 -bottom-10  right-14 '>
         <a href='#explore'> <img  src="/stamp.png" alt='stamp' className=" cursor-pointer " /></a>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
