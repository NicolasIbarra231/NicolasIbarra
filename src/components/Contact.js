import React from 'react';

import { motion } from 'framer-motion';

import {fadeIn} from '../variants'

const Contact = () => {
  return(
  <section className='section py-16 mt-50 lg:section:' id='contact'>
    <div className='container my-auto mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        <motion.div
        variants={fadeIn('left', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.5}} 
        className='flex-1 flex justify-start'>
          <div>
            <h4 className='text-x1 uppercase text-purple-400 font-medium mb-2 tracking-wide'>
              Get in touch
            </h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
              Lets work <br/> together!
            </h2>
          </div>
        </motion.div>
      </div>
      <motion.form 
      variants={fadeIn('right', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.5}}
      className='flex-1 border rounded-3xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
        <input
        className='bg-transparent border-b py-3 outline-none w-full
        placeholder:text-white focus:border-accent transition-all'
        type='text'
        placeholder='Your name'
        />
        <input
        className='bg-transparent border-b py-3 outline-none w-full
        placeholder:text-white focus:border-accent transition-all'
        type='text'
        placeholder='Your email'
        />
        <textarea className='bg-transparent border-b py-12 outline-none w-full
        placeholder:text-white focus:border-accent transition-all resize-none'
        type='text'
        placeholder='Your message'>
        </textarea>
        <button className='btn btn-lg'>Send message</button>
      </motion.form>
    </div>
    </section>
  );
};

export default Contact;
