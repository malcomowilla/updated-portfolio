
import {motion, useInView } from 'framer-motion'
import {useRef, useEffect} from 'react'
const Animate = ({children}) => {

    const ref = useRef(null)


  return (
    <motion.div ref={ref}
    variants={{
        hidden: {
            opacity: 0,
            y: 75
        },

        visible: {
            opacity: 1,
            y: 0
        }
    }}

    transition={{
        duration: 4,
        delay: 0.25,
        type: 'spring',
        stiffness: 100
    }}
    
    initial='hidden'
    animate = 'visible'
    >


{children}


    </motion.div>
  )
}

export default Animate









