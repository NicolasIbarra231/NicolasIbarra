import React from 'react';

import Image1 from '../assets/Yotas2.jpeg'

import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

import { TypeAnimation } from 'react-type-animation';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

const Banner = () => {
  return(
    <section className='min-h-[85h] lg:min-h-[78h] flex items-center' id='home'>
      <div className='container mx-auto my-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
            variants={fadeIn('right', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}} 
            className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              NICOLÁS <span>IBARRA</span>
            </motion.h1>
            <motion.div
            variants={fadeIn('right', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}} 
            className='mb-6 text-[36px] lg:text-[60px] font-secondary
            font-semibold uppercase leading-[1]'>
            <div>
              <span>I am a </span>
              <TypeAnimation 
                sequence={[
                  'Mechatronic',
                  2000,
                  'Engineer',
                  2000,
                ]}
                speed={50}
                className='text-cyan-400'
                wrapper='span'
                repeat={Infinity}
              />
            </div>
            </motion.div>
              <motion.p 
              variants={fadeIn('right', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='mb-8 max-w-lg mx-auto lg:mx-0'>
                Welcome to my page, here you're gonna find information about me, my services, portfolio and contact.
              </motion.p>
            <motion.div 
            variants={fadeIn('right', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className='flex max-w-max gap-x-6 items-center mb-12
            mx-auto lg:mx-0'>
              <Link
                to='contact' 
                activeClass='active'
                smooth={true}
                spy={true}>
                <button className='btn btn-lg'>Contact me</button>
              </Link>
            </motion.div>
            <motion.div 
            variants={fadeIn('right', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className='flex text-[20px] gap-x-6 max-w-max mx-auto
            lg:mx-0'>
              <a href='https://www.linkedin.com/in/nicolas-ibarra-siabato-385424286/' target='_blank'rel='noopener noreferrer'>
                <FaLinkedin/>
              </a>
              <a href='https://github.com/NicolasIbarra231' target='_blank'rel='noopener noreferrer'>
                <FaGithub/>
              </a>
              <a href='https://www.instagram.com/nicolasibarra23/' target='_blank'rel='noopener noreferrer'>
                <FaInstagram/>
              </a>
            </motion.div>
          </div>
          <motion.div 
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[400px]'>
          <img src={Image1} alt='' style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
