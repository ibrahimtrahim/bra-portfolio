import React from 'react'
import { Link } from "react-router-dom";

const Home = (props) => {
  const {title, link, img } = props;

  return (
    <section className='scrollbar-w-1.5 scrollbar-h-1.5 scrollbar-track-bg-transparent scrollbar-thumb-bg-slate-500/50 scrollbar-rounded bg-dark-primary rounded-lg overflow-y-auto w-[37rem] max-h-[35rem] py-10 px-10'>
          <h2 className='font-semibold text-xl font-lekton text-white mb-4'>About Me</h2>
          <p className='font-semibold text-base font-lekton text-txt-clr mb-2'>
          Hello! 👋 I’m Brahim Trahim.
          </p>
          <p className='font-normal text-base font-lekton text-txt-clr mb-2'>
            Frond-end developer from MA, AGADIR. I have rich experience in React js, 
            also I am good at Wordpress. I love to talk with you about our unique.
          </p>
        <div>
          <h2 className='font-semibold text-xl font-lekton text-white mb-8 mt-8 circle-before'>My Work</h2>
          <div class="flex group relative overflow-hidden border-2 border-white/50 text-gray-700 bg-white m-2 mb-6 m-auto rounded-xl w-60 h-60">
            <Link to={link}>
              <div className='group-hover bg-black/70 z-40 w-full h-full absolute transition-all duration-300 cursor-pointer'></div>
              <img className='group-hover:scale-125 transition-all duration-500 cursor-pointer' 
                src='assets/images/project1.jpg' 
                alt="project1"
              />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <h3 className='text-sky-400 font-lekton text-2xl'>
                  Project
                </h3>
              </div>
              <div className='absolute flex content-center -bottom-full left-12 group-hover:bottom-12 transition-all duration-500 z-50'>
                <span className='mx-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill='#60a5fa' height="40" width="30" viewBox="0 0 384 512">
                    <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/>
                  </svg>
                </span>
                <span className='mx-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill='#60a5fa' height="40" width="30" viewBox="0 0 512 512">
                    <path d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z"/>
                  </svg>
                </span>
                <span className='mx-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill='#60a5fa' height="40" width="30" viewBox="0 0 448 512">
                    <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/>
                  </svg>
                </span>
              </div>
            </Link>
          </div>
          <div class="flex justify-center mt-4 md:mt-6">
            <a href="/Projects" class="font-lekton border-2 border-solid border-blue-600 rounded py-2 px-8 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white mt-4 transition-color duration-300">See More</a>
          </div>
        </div>
        <div>
          <h2 className='font-semibold text-xl font-lekton text-white mb-4 mt-8 circle-before'>Contact Me</h2>
          <h3 className='font-lekton font-semibold text-txt-clr mb-2'>Email:</h3>
          <p className='font-normal text-base font-lekton text-txt-clr mb-4'>trahimbrahim@gmail.com</p>
          <h3 className='font-lekton font-semibold text-txt-clr mb-2'>Phone:</h3>
          <p className='font-normal text-base font-lekton text-txt-clr mb-4'>+212 610 760 225</p>
          <div class="flex justify-center mt-4 md:mt-6">
            <a href="/Contact" class="font-lekton border-2 border-solid border-blue-600 rounded py-2 px-8 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white mt-4 transition-color duration-300">Contact Me</a>
          </div>
        </div>
    </section>
  )
}

export default Home