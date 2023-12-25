import {motion} from 'framer-motion'





const AnimateComponents = ({children}) =>  {

  return (
    <>
    <motion.div

    
    initial={{
        opacity: 0,
        scale: 0
    }} 
    animate={{
        opacity: 1,
        scale: 1
    }}

    exit={{
        opacity: 0,
        scale: 0
    }}
    
    transition={{
        duration: 0.4,
        ease: 'easeOut',
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