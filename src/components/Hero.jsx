import { motion } from "framer-motion";

import { styles } from "../styles";
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import HeaderImg from '../assets/img/header-img.svg';
import '../../src/App.css'



const Hero = () => {


  const [text] = useTypewriter({
    words: [' Web Developer', ' UI/UX Designer', ' Content Creator', ' 3D Animator'],
    loop: {},
  })

  return (
    <section className={`relative w-full h-screen mx-auto`}>
<div
  className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
>
  <div className='flex flex-col justify-center items-center mt-5'>
    <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
    <div className='w-1 sm:h-80 h-40 violet-gradient' />
  </div>

  <div>
    <h1 className={`${styles.heroHeadText} text-white`}>
      Hi, I'm <span className='text-[#915EFF]'>Abhishek</span>
    </h1>
    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
      And I am
      <span style={{ color: 'red', fontWeight: 'bold' }}>{text}</span>
      <Cursor />
    </p>
  </div>
</div>

<div className="banneri">
<img src={HeaderImg} alt="Header Img" />
</div>


     
    </section>
  );
};

export default Hero;
