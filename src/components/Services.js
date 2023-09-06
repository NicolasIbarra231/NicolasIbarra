import React from 'react';

import {motion} from 'framer-motion'

import {fadeIn} from '../variants'

const services = [
  {
    name: 'Web developer',
    description: 'Due to my academic background, where Ive taken various programming courses, Ive been able to engage in several web development projects using different languages like HTML & CSS, JavaScript, React Js, etc. These projects encompassed creating informative websites as well as pages for product marketing.',
  },

  {
    name: 'Automation',
    description: 'Throughout my career as a mechatronics engineer I have had the opportunity to work in the field of automation, I had the opportunity to work with Siemens PLCs for complex automation projects such as virtual industrial plants.',
  },

  {
    name: 'AI Developer',
    description: 'I have also had the opportunity to develop Artificial Intelligence, from applications for image detection and identification, to implementations for robotics, for robot trajectory planning.',
  },

  {
    name: 'Robotics',
    description: 'As I mentioned earlier, I have been able to work on robotics projects. From anthropomorphic robots to mobile robots. I have had the job of developing the kinematic design, choice of technologies, and actual construction of the robot.',
  },

  {
    name: 'VR Development',
    description: 'Likewise, I have been able to develop in the field of virtual reality, there I have carried out augmented reality and virtual reality projects; such as games and environments for rehabilitation and recreation for disabled people.',
  },

]

const Services = () => {
  return(
    <section className='section' id='services'>
      <div className='container mx-auto my-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.5}}
          className='flex-1  lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-cyan-400 mt-6 mb-6'>What I Do</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
            I am a mechatronics engineering student with a constant desire to learn and grow. Outside of engineering, I enjoy going to the gym, listening to music, and playing video games. I am always in search of new challenges and opportunities to expand my skills.
            </h3>
            <a href='https://www.workana.com/freelancer/9b9e5a3c2c7404bc59e0ab3747c66536' target='_blank'rel='noopener noreferrer'>
            <button className='btn btn-sm'>See my work</button>
            </a>
          </motion.div>
          <div className='flex-1'>
            <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.5}}
            >
              {services.map((service, index)=> {
                
                const { name, description } = service;
                return (
                  <div className='border-b border-white/60 h-[170px] mb-[38px] flex-1' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-cyan-300 text-[20px] tracking-wider font-primary font-semibold mb-4'>{name}</h4>
                    </div>
                    <p className='font-secondary leading-tight mb-6'>{description}</p>
                  </div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
