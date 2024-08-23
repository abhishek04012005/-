import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { weddingTemplate } from "../constants/all_service";
import { fadeIn, textVariant } from "../utils/motion";
import Footer from "../components/Footer";
import "../App.css"
import YoutubeEmbed from "../components/YoutubeEmbed";

// --------------------------------
// import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
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
                src={github}
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
        <h2 className={`${styles.sectionHeadText}`}>Wedding Template Design</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
         Our wedding invitations showcase our expertise in creating stunning, personalized designs for your special day. Each card is thoughtfully crafted with love and care, featuring unique themes, elegant layouts. Explore our collection to see how we bring your love story to life, ensuring every detail is perfect for your big day.


        </motion.p>
      </div>


      <div className='mt-20 flex flex-wrap gap-7'>
        {weddingTemplate.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>


      <div className="youtubeEm">
      <h1>Template Video</h1>
      <YoutubeEmbed embedId="xRZjyfOGBAA" />
    </div>
      <Footer />
    </>
  );
};

export default SectionWrapper(WeddingWebsite, "");
