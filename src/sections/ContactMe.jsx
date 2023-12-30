
import AnimateComponents from '../my-animations/AnimateComponents'
import gmail from '/assets/gmail.svg'
import AnimatedButton from '../my-animations/AnimatedButton'


const ContactMe = () => {
  return (
    <div className='bg-black
     w-screen h-full flex justify-center items-center
     max-sm:text-center max-md:text-center p-[60px]' >
        <AnimateComponents>
        {/* <Progress/> */}
        
        <h2 className='text-white lg:text-[60px] max-md: text-[80px]
        max-sm:text-[40px]'>Email Me <span className='about font-extrabold tracking-widest ]'>lets Build</span></h2>
        <div className='mt-[200px] flex gap-10'>

    <AnimatedButton>    <p className='text-white lg:text-[40px] '  >malcomowilla@gmail.com </p>  </AnimatedButton>

        <img src={gmail} alt="" className='w-[200px] h-[200px]' />

        </div>
        </AnimateComponents>
        </div>
  )
}

export default ContactMe