import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {useNavigate, Link} from 'react-router-dom'
import arrow from '/images/arrow.png'

const ShuffleHero = () => {
  const navigate = useNavigate()
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl  mix-blend-overlay">
      <div>
       
        <h3 className="text-4xl md:text-6xl font-semibold">
        Let's Connect:

        </h3>
        <p className=" text-[40px] text-slate-700 my-4 md:my-6">
        I am always eager to connect with fellow developers, tech enthusiasts,
         and potential collaborators. Whether you have an exciting project, 
         or just want to chat about the latest in tech, feel free to reach out!
        </p>
        <button  onClick={()=> navigate('/contact-me')}  className="bg-indigo-500 text-white
         font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95 text-[30px]">
          Contact Me
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "/images/project_image1.png",
    name: "Github Repo Viewer",
    Links: 'https://chat-application-edfamjipt-malcomowilla-gmailcom.vercel.app/',
    title: 'simpleChatApp',
    githubLink: 'https://github.com/malcomowilla/mySimpleChatApp'

  },
  {
    id: 2,
    src: "/images/project_image2.png",
    title: 'Movies',
    Links: 'https://movies-z936.onrender.com/',
    githubLink: 'https://github.com/malcomowilla/my-movies'

  },
  {
    id: 3,
    src: "/images/projectimage3.png",
    title: 'Captive-Portal',
    Links: 'https://captive-portal.onrender.com/',
    githubLink: 'https://github.com/malcomowilla/captive-portal'
  },
  {
    id: 4,
    src: "/images/project_image4.png",
    title: 'Niky',
    Links: 'https://niky.onrender.com/',
    githubLink: 'https://github.com/malcomowilla/NIky-Landing-Page'
    


  },
  {
    id: 5,
    src: "/images/project_image5.png",
    title: 'Meme-Lord',
    Links: 'https://lordofmeme.netlify.app/',
    githubLink: 'https://github.com/malcomowilla/meme-lord'

  },
  // {
  //   id: 6,
  //   src: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  // },
  // {
  //   id: 7,
  //   src: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  // },
  // {
  //   id: 8,
  //   src: "https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  // },
  // {
  //   id: 9,
  //   src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  // },
  // {
  //   id: 10,
  //   src: "https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  // },
  // {
  //   id: 11,
  //   src: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80",
  // },
  // {
  //   id: 12,
  //   src: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80",
  // },
  // {
  //   id: 13,
  //   src: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  // },
  // {
  //   id: 14,
  //   src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  // },
  // {
  //   id: 15,
  //   src: "https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80",
  // },
  // {
  //   id: 16,
  //   src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80",
  // },
];

const generateSquares = () => {
  return (
  shuffle(squareData).map((sq) => (
   
    
<>
    <motion.div

      key={sq.id}
      layout
      transition={{ duration: 4, type: "spring" }}
      className="lg:w-[800px]
        lg:h-[550px] 
         h-[300px] w-[450px]  overflow-hidden
             "
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
       
      }}
    >

<div key={sq.id} className='
w-full h-full mt-10 bg-black  bg-opacity-5  hover:bg-opacity-80  flex  justify-center  '>
<p       className='hover:text-white  lg:text-6xl  md:text-4xl sm:text-2xl text-transparent hover:underline  mt-[80px]'> 
 <Link key={sq.id} to={sq.Links}>{sq.title}</Link>   </p>
{/* <p className='   lg:text-6xl  sm:text-sm
   text-transparent hover:underline mt-[40px] lg:hover:text-white'><Link  key={sq.id} to={sq.githubLink}>For More Details</Link></p> */
   }


<Link key={sq.id} to={sq.githubLink}>
<div key={sq.id} className='  bg-blue-400 rounded-full h-fit w-[100px] flex justify-center items-center '>
<img src={arrow} alt=""  className='w-[60px] h-[60px]'/>
 <p className='lg:hover:text-white text-xl  md:text-sm  sm:text-xl '>For more details</p>
</div>

</Link>

    </div>

 

    </motion.div>
   

    </>

  )));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;