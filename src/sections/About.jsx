

import AnimateComponents from '../my-animations/AnimateComponents'



const About = () => {
  return (

    <div
    className='w-full h-full
    flex justify-center items-center bg-black p-[80px]
      '>
            <AnimateComponents >

<h2 className='
font-extrabold text-[70px] tracking-[10px]
about flex justify-center '>ABOUT ME</h2>

<p className='text-white text-[30px] mt-[200px]'>Hi there! 👋 I'm Malcom Owilla, a passionate Fullstack Developer with expertise in React and Ruby 
    on Rails. My journey into the world of coding began at Moringa school, where I immersed myself in
     the art of crafting web applications.</p>


<p className='text-white text-[30px] mt-[50px]'>
I specialize in frontend development, combining 
creativity and technical skills to build engaging user interfaces. My proficiency in React allows 
me to create dynamic and responsive experiences, while my knowledge of Ruby on Rails empowers me to handle the backend seamlessly.
</p>


</AnimateComponents >
    </div>
  )
}

export default About