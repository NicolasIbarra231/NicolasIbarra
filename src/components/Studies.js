import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Image1 from '../assets/colegio.png'
import Image2 from '../assets/Universidad.png'
import Image3 from '../assets/piton.png'
import Image4 from '../assets/app.png'

const experiences = [
  {
    title: 'School - High school',
    period: '2007 - 2018',
    description: 'I studied primary and high school in Liceos Segovias school. Y obtained a bachelor degree.',
    image: Image1,
  },
  {
    title: 'University',
    period: '2019 - Actuality',
    description: 'I started a career in Mechatronic engineering in 2019 in the UMNG university of Colombia.',
    image: Image2,
  },
  {
    title: 'Certification PCEP',
    period: '2023 - Actuality',
    description: 'One of my strongest competencies is Python so i started a Certification on this code language.',
    image: Image3,
  },
  {
    title: 'Full stack mobile application developer',
    period: '2023 (August) - 2023 (September)',
    description: 'I worked on a app mobile for the company TECH AI SOLUTIONS S.L as a Workana Freelance - full stack developer. My main tasks were: Front-end design, AI training, and implementation of LogIn and Sign with Google functions.',
    image: Image4,
  },
];

const EducationAndExperience = () => {
  return (
    <section className="section" id="studies">
      <div className="container mx-auto my-auto">
        <h2 className="h2 text-cyan-400 mt-6 mb-16">Studies and experience</h2>
        <div className="grid gap-5 lg:grid-cols-4">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={fadeIn('right', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.5 }}
              className="border border-cyan-200"
            >
              <h3 className="h3 text-white font-semibold mb-2 mx-1 my-auto">{experience.title}</h3>
              <p className="h4 text-cyan-100 font-semibold mx-1 mt-3">{experience.period}</p>
              <p className="h4 text-cyan-100mt-2 mx-1 mt-3">{experience.description}</p>
              <img src={experience.image} alt={experience.title} className='mx-auto my-auto w-20 h-20 mt-20 mb-5'/>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationAndExperience;
