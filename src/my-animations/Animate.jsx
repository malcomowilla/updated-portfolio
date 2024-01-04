
import {motion, useInView } from 'framer-motion'
import {useRef, useEffect} from 'react'
const Animate = ({children}) => {

    const ref = useRef(null)


  return (
    <motion.div ref={ref}
    variants={{
        hidden: {
            // opacity: 0,
            y: -700,
        },

        visible: {
            // opacity: 1,
            y: 0,
        }
    }}

    transition={{
        duration: 7,
        type: 'spring',
        stiffness: 50,
        ease: 'easeIn'

    }}
    
    initial='hidden'
    animate = 'visible'
    >


{children}


    </motion.div>
  )
}

export default Animate









