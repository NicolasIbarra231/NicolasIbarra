import React from 'react';

import { useInView } from 'react-intersection-observer';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants'

import Image from '../assets/piton.png'
import Image1 from '../assets/css.png'
import Image2 from '../assets/icons8-matlab-100.png'
import Image3 from '../assets/icons8-reaccionar-40.png'
import Image4 from '../assets/home-automation.png'
import Image5 from '../assets/inteligencia-artificial.png'
import Image6 from '../assets/gafas-vr.png'
import Image7 from '../assets/comunicacion-efectiva.png'
import Image8 from '../assets/unido.png'
import Image9 from '../assets/liderazgo.png'
import Image10 from '../assets/cable-de-energia.png'
import Image11 from '../assets/ejercicio.png'
import Image12 from '../assets/palanca-de-mando.png'
import Image13 from '../assets/television-inteligente.png'
import Image14 from '../assets/al-aire-libre.png'

const About = () => {
  const[ref] = useInView({
    threshold:0.5,
  })
  return (
    <section className='section '  id="about" ref={ref}>
      <div className='container mx-auto my-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center'>
          <div>
            <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.5}}
            className='flex-1'>
            <h2 className='h2 text-cyan-400'>About me</h2>
            <p className='mb-6'>I am Nicolás Ibarra, a passionate aspiring mechatronics engineer with a constant desire to learn and grow. My journey in this field began in 2019, and since then, I've had the opportunity to explore and excel in various branches of my career. My focus lies in programming, where I delve into Python and Unity 3D. Outside of engineering, I enjoy hitting the gym, listening to music, and playing video games. I am always on the lookout for new challenges and opportunities to enhance my skills.
            </p>
            <h2 className='h2 text-cyan-400 text-lg'>Skills</h2>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <img src={Image} alt='Python' className='w-16 h-16 mb-5' />
                <div className='font-primary text-sm tracking-[2px]'>
                  Python <br />
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <img src={Image1} alt='HTML & CSS' className='w-16 h-16 mb-5' />
                <div className='font-primary text-sm tracking-[2px]'>
                  HTML & <br/>
                  CSS
                </div>
              </div>
              <div>
                <img src={Image2} alt='MATLAB' className='w-16 h-16 mb-5' />
                <div className='font-primary text-sm tracking-[2px]'>
                  MATLAB <br/>
                </div>
              </div>
              <div>
                <img src={Image3} alt='React JS' className='w-16 h-16 mb-5' />
                <div className='font-primary text-sm tracking-[2px]'>
                  React <br/>
                  JS
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <img src={Image4} alt='Automation' className='w-16 h-16 mb-5' />
                <div className='font-primary text-sm tracking-[2px]'>
                  Automation <br/>
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <img src={Image5} alt='AI' className='w-16 h-16 mb-5' />
                <div className='font-primary text-sm tracking-[2px]'>
                  AI <br/>
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <img src={Image6} alt='VR' className='w-16 h-16 mb-5' />
                <div className='font-primary text-sm tracking-[2px]'>
                  VR <br/>
                </div>
              </div>
            </div>
            </motion.div>
            
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.5}}
            className='flex-1'>
            <h2 className='h2 text-cyan-400 text-lg'>Soft Skills</h2>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div className='flex flex-col items-center'>
                <img src={Image7} alt='VR' className='w-16 h-16 mb-5' />
                <div className='font-primary text-sm tracking-[2px]'>
                  Communication <br/>
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <img src={Image8} alt='VR' className='w-16 h-16 mb-5' />
                <div className='font-primary text-sm tracking-[2px]'>
                  Team <br/>
                  Work
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <img src={Image9} alt='VR' className='w-16 h-16 mb-5' />
                <div className='font-primary text-sm tracking-[2px]'>
                  Leadership <br/>
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <img src={Image10} alt='VR' className='w-16 h-16 mb-5' />
                <div className='font-primary text-sm tracking-[2px]'>
                  Adaptability <br/>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.5}}
            className='flex-1'>
            <h2 className='h2 text-cyan-400 text-lg'>Hobbies</h2>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div className='flex flex-col items-center'>
                <img src={Image11} alt='VR' className='w-16 h-16 mb-5' />
                <div className='font-primary text-sm tracking-[2px]'>
                  Gym <br/>
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <img src={Image12} alt='VR' className='w-16 h-16 mb-5' />
                <div className='font-primary text-sm tracking-[2px]'>
                  Video <br/>
                  games
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <img src={Image13} alt='VR' className='w-16 h-16 mb-5' />
                <div className='font-primary text-sm tracking-[2px]'>
                  Tv & <br/>
                  series
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <img src={Image14} alt='VR' className='w-16 h-16 mb-5' />
                <div className='font-primary text-sm tracking-[2px]'>
                  Outdoors <br/>
                </div>
              </div>
            </div>
          </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
