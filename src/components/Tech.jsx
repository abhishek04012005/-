import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { technologies } from "../constants";


const ExperienceCard = ({ technology }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      iconStyle={{ background: technology.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={technology.icon}
            alt={technology.name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{technology.name}</h3>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {technology.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Tech = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} text-center`}>
          What I do
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Skills.
        </h2>
      </div>

      <div className='mt-10 flex flex-col'>
        <VerticalTimeline>
          {technologies.map((technology, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              technology={technology}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
