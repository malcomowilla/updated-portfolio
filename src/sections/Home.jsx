import myReact from '/assets/react.svg'
import firebase from '/assets/firebase.svg'
import html from '/assets/html.svg'
import javascript from '/assets/javascript.svg'
import tailwind_css from '/assets/tailwind-css.svg'
import postgresql from '/assets/postgresql.svg'
import git from '/assets/git.svg'
import rubyrails from '/assets/rubyrails.png'


import css from '/assets/css.png'

import AnimateComponents  from '../my-animations/AnimateComponents'

// import Progress from '../my-animations/Progress.jsx'




const Home = () => {

  return (

    <>
    <AnimateComponents>
    <div  
    
    className='h-full w-screen bg-black  '>
        <div className='flex justify-center'>

        {/* <Progress /> */}

        </div>
<p className='text-white lg:text-[100px] font-bold mt-10
 max-sm:text-[60px]'>
Hi 👋🏻 i'm Malcom Owilla I,FULLSTACK  DEVELOPER WITH <span 
className='bg-gradient-to-r from-cyan-500 to-blue-500 bg-cover bg-clip-text text-transparent' >REACT</span>   AND

 <span className='bg-gradient-to-r from-purple-500 to-pink-500 bg-cover bg-clip-text text-transparent'>    RUBY ON RAILS </span>, i MAKE WEB APPLICATIONS</p>

<div className='   flex justify-center'>

    <p className='text-white lg:text-[100px] font-extrabold mt-[180px]   sm:text-[30px]'>TECHNOLOGIES I USE </p>

</div>


<div className='w-full h-full grid grid-auto-fit ml-20'>
    <div>
    <img src={myReact} alt="reactjs" className='lg:w-[100px] sm:w-[70px]'/>
<h2 className='text-white lg:text-[30px] max-sm:text-[20px]'>React</h2>
    </div>

    <div>

    <img src={css} alt="css"  className='lg:w-[100px] sm:w-[70px]  max-sm:w-[60px]' />
    <h2 className='text-white lg:text-[30px] max-sm:text-[20px]'>css</h2>

    </div>


<div>

<img src={ postgresql} alt="postgresql" className='lg:w-[100px] sm:w-[70px]'  />
<h2 className='text-white  lg:text-[30px] max-sm:text-[20px]'>postgres</h2>

</div>


<div>
<img src={tailwind_css} alt="tailwindcss" />

<h2 className='text-white lg:text-[30px] max-sm:text-[20px]'>tailwind css</h2>

</div>


<div>

<img src={javascript} alt="javascript"   className=' lg:w-[100px] sm:w-[70px]' />
<h2 className='text-white lg:text-[30px] max-sm:text-[20px]'>Javascript</h2>

</div>


<div>
<img src={html} alt="html" className='lg:w-[100px] sm:w-[70px]'  />
<h2 className='text-white  lg:text-[30px] max-sm:text-[20px]'>html</h2>

</div>


<div>

<img src={firebase} alt="firebase"  className='lg:w-[100px] sm:w-[70px]' />
<h2 className='text-white lg:text-[30px] max-sm:text-[20px]'>firebase</h2>

</div>


<div>
<img src={git} alt="git"  className='lg:w-[100px] 
max-sm:w-[60px] max-sm:h-[60px] max-md:w-[90px]' />

<h2 className='text-white lg:text-[30px] max-sm:text-[20px]'>git</h2>

</div>
    
    <img src={rubyrails} alt="rubyrails" className='lg:w-[100px] sm:w-[70px]'  />

    <h2 className='text-white lg:text-[30px] max-sm:text-[20px]'>ruby on rails</h2>

    </div>


    </div>
    </AnimateComponents>
    </>
  )
}

export default Home