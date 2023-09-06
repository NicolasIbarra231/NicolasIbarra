import React from 'react';

import {motion} from 'framer-motion'

import { fadeIn } from '../variants';

import Img1 from '../assets/Auto-project.png';
import Img2 from '../assets/IA-project.png';
import Img3 from '../assets/Robotics-project.jpeg';
import Img4 from '../assets/Paginaweb.jpeg';

const Work = () => {
  return( 
  <section className='section py-16 lg: section' id='work'>
    <div className='container my-auto mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div 
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.5}}
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          <div>
          <h2 className='h2 leading-tight text-cyan-400 '>
            My portfolio
          </h2>
          <p className='max-w-sm mb-16'>
In this section you can find the most important works and projects in which I have collaborated and developed. These are basic topics of the mechatronic engineering career.          </p>
          <button className='btn btn-sm'>View all my projects</button> 
          </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' 
            src={Img1}>
            </img>
            <div className='absolute -bottom-full left-12 group-hover:bottom-60 transition-all
            duration-500 z-50'>
              <span className='text-gradient'>Automation project - Integration between TIA Portal and Unity 3D
              </span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-10 transition-all
            duration-700 z-50'>
              <span className='text-3x1 text-white'>An automation project was developed integrating the TIA Portal and Unity 3D software using WiFi as the communication protocol. In the Unity 3D software, a virtual environment of a production line was recreated; The logic of the production line was realized in the TIA Portal software (Example: Start/Stop system, Emergency stop, etc.).
              </span>
              </div>
          </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' 
            src={Img4}>
            </img>
            <div className='absolute -bottom-full left-12 group-hover:bottom-60 transition-all
            duration-500 z-50'>
              <span className='text-gradient'>Web page design for product marketing
              </span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-20 transition-all
            duration-700 z-50'>
              <span className='text-3x1 text-white'>This project was carried out in order to provide a web page for an egg company, with this tool the company can market its products and services online, and also have direct contact with the client.
              </span>
              </div>

              </div>
          
        </motion.div>
        <div className='flex-1 flex flex-col gap-y-10'>
          <div className='h-[100px]'></div>
          <motion.div 
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.5}}
            className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' 
            src={Img2}>
            </img>
            <div className='absolute -bottom-full left-12 group-hover:bottom-80 transition-all
              duration-500 z-50'>
              <span className='text-gradient'>AI to Identify Traffic Signs
              </span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all
              duration-700 z-50'>
              <span className='text-3x1 text-white'>This Artificial Intelligence project focuses on the automated identification of traffic signs. Using advanced deep learning techniques and convolutional neural networks (CNN) in MATLAB software; a highly efficient system capable of analyzing and recognizing a wide range of traffic signs in real time was created. The model has been rigorously trained with a wide variety of signals and lighting conditions, ensuring high identification accuracy.
              </span>
            </div>
            
          </motion.div>
          <motion.div 
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.5}}
            className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' 
            src={Img3}>
            </img>
            <div className='absolute -bottom-full left-12 group-hover:bottom-60 transition-all
            duration-500 z-50'>
              <span className='text-gradient'>SCARA robot design
              </span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all
            duration-700 z-50'>
              <span className='text-3x1 text-white h-8 md:h-16'>The SCARA robot design was realized, combining precision and versatility to offer exceptional performance in light-duty applications. This height-selective articulated arm (SCARA) robot stands out for its ability to perform handling tasks with millimeter precision. Its compact design and efficient range of motion make it ideal for fast, precise assemblies.
              </span>
              </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  </section>
  );
};

export default Work;
