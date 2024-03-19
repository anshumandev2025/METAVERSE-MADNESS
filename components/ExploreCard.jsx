'use client';
import {motion} from 'framer-motion'
import { fadeIn, slideIn } from '../utils/motion';
const ExploreCard = ({id,imgUrl,title,active,handleActive,index}) => (
  <motion.div variants={fadeIn('right','spring',index*0.5,0.75)} className={`text-white ${id===active?'lg:flex-[3.5] flex-[10]':'lg:flex-[0.5] flex-[3.5]'} relative flex justify-center items-center transition-[flex] duration-[0.7s] cursor-pointer min-w-[170px] h-[700px] `}>
    <div className='rounded-xl h-full'>
      <img src={imgUrl} alt="world" className='h-full relative z-1 rounded-[24px] w-full object-cover ' onClick={()=>handleActive(id)}/>
    </div>
    {id!==active?(
      <>
      <div className='absolute bottom-20 '>
        <h3 className='font-bold text-3xl lg:-rotate-90 '>{title}</h3>
      </div>
      </>
    ):
    <>
      <div className='absolute bottom-0 w-full flex justify-start flex-col p-4 z-10  h-40 bg-[rgba(0,0,0,0.5)]'>
        <img src="/headset.svg" className="w-10 h-10  " alt='headset' />
        <p className='mt-5'>Enter Metaverse</p>
        <h3 className='font-bold text-3xl '>{title}</h3>
        </div>
    </>
    }
  </motion.div>
);

export default ExploreCard;
