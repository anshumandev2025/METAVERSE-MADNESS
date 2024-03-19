'use client'
import styles from '../styles';
import {motion} from 'framer-motion'
import { navVariants } from '../utils/motion';
const Navbar = () => (
  <motion.nav
  variants={navVariants}  
  initial="hidden"
  whileInView="show"
  className={`${styles.xPaddings} py-8 relative text-white`}>

    <div className='absolute inset-0 gradient-01'/>
      <div className={`flex justify-around ${styles.innerWidth} mx-auto`}>
        <img src='/search.svg' alt="search" className='w-7 h-7' />
        <h1 className='text-xl font-bold'>Metaverse</h1>
        <img src="/menu.svg" alt="menu" className='w-7 h-7' />
      </div>
  </motion.nav>
);

export default Navbar;
