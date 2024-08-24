import React, { useState } from "react";
import Tilt from "react-tilt";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { weddingTemplateBride, weddingTemplateGroom } from "../constants/all_service";
import "../App.css"


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  logoImage
}) => {
  return (
   
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

        <div className='mt-3 flex flex-wrap gap-2'>
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
   
  );
};

const WeddingInvitationBride = () => {

  return (

    <>



  
        <h2 className={`${styles.sectionHeadText}`}>Wedding Invitation</h2>
   

      <div className='w-full flex'>
        <p

          className='mt-3 text-secondary text-[17px]  leading-[30px]'
        >
          Our wedding invitations showcase our expertise in creating stunning, personalized designs for your special day. Each card is thoughtfully crafted with love and care, featuring unique themes, elegant layouts. Explore our collection to see how we bring your love story to life, ensuring every detail is perfect for your big day.


        </p>
      </div>


      <h1 className={`${styles.heroSubText} mt-5`}>Wedding Invitation For Bride</h1>


      <div className='mt-5 flex flex-wrap gap-7'>
        {weddingTemplateBride.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

    </>
  );
};

export default SectionWrapper(WeddingInvitationBride, "");

