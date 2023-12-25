import{useState, useEffect} from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import Home from '../src/sections/Home'
import About from '../src/sections/About.jsx'
import ContactMe from '../src/sections/ContactMe'
import Projects from '../src/sections/Projects'
import {Links} from '../src/Links/Links'
import  Education from './sections/Education'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Animate from '../src/my-animations/Animate'
import Progress from './my-animations/Progress'
import {AnimatePresence} from 'framer-motion'

const App = () => {
const [loading, setloading] = useState(true);
const location = useLocation()

  const fetchData = async () => {
    // Assuming the operation takes 2 seconds
    await fetch(resolve => setTimeout(resolve, 3000));
    setloading(false); // Set loading to false when data is fetched
  };

  // Call fetchData function when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
<main className={`w-screen h-screen fonts

`} >
{/* <Animate> */}
<AnimatePresence initial={false} >
   <div className='flex justify-center'>

        <Progress/>
        

        </div>

{loading ? (
   <Backdrop
   sx={{ color: 'red', zIndex: (theme) => theme.zIndex.drawer + 1 }}
   open={loading}
 >
   <CircularProgress color="inherit" />
 </Backdrop>
 

):(

  <Routes  >

  

  
    <Route index  element={<Links/>}></Route>

<Route path='/home' element={<Home  />}  >
</Route>


<Route path='/about' element={<About  />}  >
</Route>


<Route path='/contact-me' element={<ContactMe/>}>
</Route>


<Route path='/projects' element={<Projects/>}>

</Route>


<Route path='/education' element={<Education/>}>

</Route>


</Routes>
)}

</AnimatePresence>
{/* </Animate> */}
</main>
    
  )
}

export default App