import {motion} from 'framer-motion'





const AnimateComponents = ({children}) =>  {

  return (
    <>
    <motion.div

    
    initial={{
        // opacity: 0,
        // scale: 0
        y: 300
    }} 
    animate={{
        // opacity: 1,
        // scale: 1

        y:5
    }}

    exit={{
        opacity: 1,
        // scale: 0
    }}
    
    transition={{
        duration: 0.75,
        ease: 'easeIn',
        type: 'spring',
        stiffness: 100
    }}
    >

{children}

    </motion.div>

    </>
  )
}

export default AnimateComponents