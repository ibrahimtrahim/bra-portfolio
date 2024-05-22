import React from 'react'
import { Link } from "react-router-dom";

const Home = (props) => {

  return (
    <section className='lg:scrollbar-w-1.5 lg:scrollbar-h-1.5 lg:scrollbar-track-bg-slate-500/50  dark:lg:scrollbar-track-bg-transparent dark:lg:scrollbar-thumb-bg-transparent lg:scrollbar-rounded bg-white dark:bg-dark-primary lg:rounded-lg lg:overflow-y-auto lg:max-w-xl lg:max-h-[560px] py-10 px-10'>
          <span class='relative before:block before:w-8 before:rounded-full before:absolute before:-inset-0.5 before:bg-blue-400'>
            <h2 className='relative font-semibold text-xl font-lekton text-dark-primary dark:text-white mb-4'>About Me</h2>
          </span>
          <p className='font-semibold text-base font-lekton dark:text-txt-clr mb-2'>
          Hello! 👋 I’m Brahim Trahim.
          </p>
          <p className='font-normal text-base font-lekton dark:text-txt-clr mb-2'>
          a front-end developer from Agadir, Morocco. I love building dynamic and responsive web applications with React JS.
          </p>
        <div>
        <span class='relative before:block before:w-8 before:rounded-full before:absolute before:-inset-0.5 before:bg-blue-400'>
          <h2 className='relative font-semibold text-xl font-lekton text-dark-primary dark:text-white mb-8 mt-8 circle-before'>My Work</h2>
        </span>
          <div className="group m-auto relative overflow-hidden border-2 border-black/50 dark:border-white/50 text-gray-700 bg-white m-2 rounded-xl w-60 h-60">
            <div className='group-hover bg-black/70 z-40 w-full h-full absolute transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500 cursor-pointer' 
                src='assets/images/project1.jpg'
                alt="project1"
              />
              <div className='absolute -bottom-full left-4 group-hover:bottom-4 transition-all duration-500 z-50'>
                <h5 className="mb-4 text-l text-sky-400 font-bold tracking-tight text-gray-900 dark:text-white">Hair Studio</h5>
                <p className="mb-4 font-normal text-white dark:text-gray-400">Responsive landing page crafted using HTML, CSS, and JS.</p>
                <div className="flex items-center mb-4">
                    <div className="flex items-center mr-2">
                      <img src="assets/images/html.png" alt="HTML" className="h-6 mr-1" />
                      <img src="assets/images/css.png" alt="CSS" className="h-6 mr-1" />
                      <img src="assets/images/javas.png" alt="JAVASCRIPT" className="h-6 mr-1" />
                    </div>
              </div>
              <div className='flex items-center'>
                <Link to="https://ibrahimtrahim.github.io/barber-template/" target="_blank" className="inline-flex mr-4 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  LIVE DEMO
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </Link>
                <Link to="https://github.com/ibrahimtrahim/barber-template" target="_blank">
                  <svg className='hover:fill-blue-400 dark:fill-white dark:hover:fill-blue-400' xmlns="http://www.w3.org/2000/svg" fill='white' height="20" width="20" viewBox="0 0 496 512">
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4 md:mt-6">
            <Link to="/Projects" className="font-lekton border-2 border-solid border-blue-600 rounded py-2 px-8 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white mt-4 transition-color duration-300">See More</Link>
          </div>
        </div>
        <div>
          <span class='relative before:block before:w-8 before:rounded-full before:absolute before:-inset-0.5 before:bg-blue-400'>
            <h2 className='relative font-semibold text-xl font-lekton text-dark-primary dark:text-white mb-4 mt-8 circle-before'>Contact Me</h2>
          </span>
          <h3 className='font-lekton font-semibold dark:text-txt-clr mb-2'>Email:</h3>
          <p className='font-normal text-base font-lekton dark:text-txt-clr mb-4'>trahimbrahim@gmail.com</p>
          <h3 className='font-lekton font-semibold dark:text-txt-clr mb-2'>Phone:</h3>
          <p className='font-normal text-base font-lekton dark:text-txt-clr mb-4'>+212 610 760 225</p>
          <div className="flex justify-center mt-4 md:mt-6">
            <Link to="/Contact" className="font-lekton border-2 border-solid border-blue-600 rounded py-2 px-8 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white mt-4 transition-color duration-300">Contact Me</Link>
          </div>
        </div>
    </section>
  )
}

export default Home