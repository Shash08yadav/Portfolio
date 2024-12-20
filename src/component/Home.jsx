
// import React from 'react';
// import heroimg from '../assets/shash.jpeg';
// import { HiArrowNarrowRight } from "react-icons/hi";
// import {Link} from 'react-scroll'

// const Home = () => {
//   return (
//     <div name='home' className=' overflow-x-hidden h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-20'>
//       <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
//         <div className='flex flex-col justify-center h-full'>
//           <h2 className='text-4xl sm:text-7xl font-bold text-white'>
//             I'm a Frontend Developer
//           </h2>
//           <p className='text-gray-500 py-4 max-w-md'>
//             A Frontend focused Web Developer building the Frontend of Websites and Web
//             Applications that leads to the success of the overall product.
//           </p>
//           <div>
//             <Link to='portfolio' className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
//               Portfolio
//               <span className='group-hover:rotate-90 duration-300'>
//                 <HiArrowNarrowRight size={25} className='ml-1' />
//               </span>
//             </Link>
//           </div>
//         </div>
//         <div>
//           <img src={heroimg} alt='hero' className='rounded-3xl mx-auto w-200 md:w-full mt-10' />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

import React from 'react';
import heroimg from '../assets/shash.jpeg';
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='overflow-x-hidden h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-20'>
      <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4 gap-4'>
        <div className='flex flex-col justify-center text-center md:text-left md:w-1/2'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            I'm a Frontend Developer
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
            A Frontend focused Web Developer building the Frontend of Websites and Web
            Applications that leads to the success of the overall product.
          </p>
          <div>
            <Link to='portfolio' className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight size={25} className='ml-1' />
              </span>
            </Link>
          </div>
        </div>
        <div className='md:w-1/2'>
          <img src={heroimg} alt='hero' className='rounded-lg mx-auto w-64 md:w-full mt-10 md:mt-0' />
          {/* Adjust 'w-64' to control the width of the image on smaller screens */}
        </div>
      </div>
    </div>
  );
}

export default Home;


