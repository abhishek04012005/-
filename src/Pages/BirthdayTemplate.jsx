import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { birthdayTemplate } from "../constants/all_service";
import { fadeIn, textVariant } from "../utils/motion";
import Footer from "../components/Footer";



// --------------------------------
// import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  logoImage,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={logoImage}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const WeddingWebsite = () => {

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Birthday Template Design</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Our birthday templates showcase our expertise in creating stunning, personalized designs for your special day. Each template is thoughtfully crafted with love and care, featuring unique themes, easy-to-navigate layouts, and seamless integration with essential tools. Explore our collection to see how we can bring your birthday celebration to life, ensuring every detail is perfect for a memorable day.        </motion.p>
      </div>


      <div className='mt-20 flex flex-wrap gap-7'>
        {birthdayTemplate.map((service, index) => (
          <ProjectCard key={`service-${index}`} index={index} {...service} />
        ))}
      </div>

     



      <Footer />
    </>
  );
};

export default SectionWrapper(WeddingWebsite, "");
