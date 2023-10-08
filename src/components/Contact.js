import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { FaLinkedin } from 'react-icons/fa';
import './contact.css'; 

const Contact = () => {
  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'
          >
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
                Get in touch
              </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's connect!
              </h2>
              <div className="email-container">
                
                <a className="email-link" href="mailto:dannydoyle3rd@gmail.com">DannyDoyle3rd@Gmail.com</a>
              </div>
              <a href="https://www.linkedin.com/in/danny-doyle3rd/" className="linkedin-link" target="_blank">
  <FaLinkedin className="linkedin-icon" />
</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
