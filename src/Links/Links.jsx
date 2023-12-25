
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import  { useRef, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {github, twitter, whatsap} from '../my_socials/Socials'
// import {useNavigate} from 'react-router-dom'
import Animate from '../my-animations/Animate'
export const Links = () => {

 

  
  return (

    <section className={`bg-white
      p-4 md:p-8
       max-sm:bg-[url('../images/image_portfolio3.jpg')] bg-scroll bg-center max-sm:bg-cover 
        h-screen`}>


    <div className='fixed right-0 hidden md:flex md:gap-20' >
        {/* <img className='w-10' src={github} alt="" />
        <img className='w-10' src={twitter} alt="" />
        <img className='w-10' src={whatsap} alt="" /> */}


    </div>
    
      <div className="mx-auto max-w-5xl ">
        <Link 
          heading="About"
          subheading="Learn what i do here"
          imgSrc="/assets/about.svg"
          to='/about'
        />
       
       
        <Link
          heading="Projects"
          subheading="I have some simple but yet impactful projects here"
          imgSrc="/assets/projects.svg"
          to='/projects'
        />
        <Link
          heading="Portfolio"
          subheading="Our work speaks for itself"
          imgSrc="/assets/portfolio.svg"
        />
        <Link
          heading="Education"
          subheading="Great School Bytheway"
          imgSrc="/assets/school.svg"
          to='/education'
        />
        <Link
          heading="Contacts"
          subheading="Lets Keep In Touch"
          imgSrc="/assets/contacts.svg"
          to='/contact-me'
        />


<Link
          heading="Home"
          subheading=""
          imgSrc="/assets/contacts.svg"
          to='/home'
        />
      </div>



    </section>


  );
  
};

const Link = ({ heading, imgSrc, subheading, href, to }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <>

    <Animate>
    <motion.a
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      href={to}
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 
      transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },


        }} 
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-black" />
      </motion.div>
    </motion.a>
    </Animate>
    </>
  );
};