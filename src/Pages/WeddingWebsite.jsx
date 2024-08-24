import React, { useState } from "react";
import Tilt from "react-tilt";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { weddingWebsites } from "../constants/all_service";



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

   
  );
};

const WeddingWebsite = () => {

  return (
    <>
    
        <h2 className={`${styles.sectionHeadText}`}>Wedding Websites</h2>
     

      <div className='w-full flex'>
        <p
         
          className='mt-3 text-secondary text-[17px] leading-[30px]'
        >
          Wedding Websites showcases our expertise in creating stunning, personalized experiences for your special day. Each site is thoughtfully designed with love and care, featuring unique themes, easy-to-navigate layouts, and seamless integration with essential tools. Explore our examples to see how we bring your love story to life online, ensuring every detail is perfect for your big day.
        </p>
      </div>

      <h1 className={`${styles.heroSubText} mt-5`}>Why should I have a separate website for the Groom and Bride?</h1>

      <ul>

        <h1 className={`${styles.sectionSubText} mt-5`}>1. Personalized Touch</h1>
        <li className='mt-3 text-secondary text-[17px] leading-[30px]'>
          Separate websites allow both the bride and groom to showcase their personalities, interests, and stories in their own distinct ways. This personalization provides guests with a deeper understanding of each individual, highlighting their unique styles and backgrounds.
        </li>



        <h1 className={`${styles.sectionSubText} mt-5`}>2. Sharing Personal Stories and Journeys</h1>
        <li className='mt-3 text-secondary text-[17px] leading-[30px]'>
          Each person has a unique story leading up to the big day. A dedicated website for the bride can focus on her journey, experiences, and the people who have been significant in her life. Similarly, the groom’s website can share his side of the story, from his proposal planning to anecdotes about his relationship with the bride. This dual storytelling makes the entire wedding experience richer and more engaging for guests.        </li>

        <h1 className={`${styles.sectionSubText} mt-5`}>3. Showcasing Different Aspects of the Wedding</h1>
        <li className='mt-3 text-secondary text-[17px] leading-[30px]'>
          Separate websites can also allow the couple to feature different aspects of their wedding. For example, the bride’s website might focus more on bridal party details, her dress journey, and preparations with her friends and family. The groom’s website, on the other hand, could highlight his groomsmen, bachelor party, or even fun facts about the couple’s adventures together. This division can help manage the diverse interests of guests.

        </li>

        <h1 className={`${styles.sectionSubText} mt-5`}>4. Convenience and Organization
        </h1>
        <li className='mt-3 text-secondary text-[17px] leading-[30px]'>
          By dividing responsibilities, the bride and groom can independently manage the content on their respective websites. This separation can help organize information more efficiently, reducing the chances of missing important details. It also allows the couple to update their websites without interfering with each other’s content.

        </li>

        <h1 className={`${styles.sectionSubText} mt-5`}>5. Unique Design and Themes
        </h1>
        <li className='mt-3 text-secondary text-[17px] leading-[30px]'>
          Each website can have its own theme and design, reflecting the bride’s and groom’s tastes. This creative freedom allows each person to express themselves in a way that is meaningful to them. For instance, the bride might prefer a floral, elegant design, while the groom might opt for something more modern or adventurous. These unique touches can make each website special and memorable.
        </li>

        <h1 className={`${styles.sectionSubText} mt-5`}>6. Enhanced Engagement with Guests (RSVP)
        </h1>
        <li className='mt-3 text-secondary text-[17px] leading-[30px]'>
          Separate websites can create a sense of anticipation and excitement among guests as they explore different facets of the couple’s lives. It encourages guests to engage more deeply with the content, fostering a sense of connection before the big day. Guests may also appreciate the opportunity to learn more about the bride or groom individually, depending on their relationship with each person.
        </li>

        <h1 className={`${styles.sectionSubText} mt-5`}>7. Special Messages and Tributes
        </h1>
        <li className='mt-3 text-secondary text-[17px] leading-[30px]'>
          Separate websites provide a platform for the bride and groom to share personal messages or tributes. The bride might want to dedicate a page to her parents, while the groom could write a special note to his best friends. These personal touches can be more effectively showcased on individual websites, making them more heartfelt and intimate.


        </li>
      </ul>


      <div className='mt-5 flex flex-wrap gap-7'>
        {weddingWebsites.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />

        ))}


      </div>



    </>
  );
};

export default SectionWrapper(WeddingWebsite, "");
