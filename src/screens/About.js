import React from 'react';


const About = () => {
  return (
    <section className='lg:scrollbar-w-1.5 lg:scrollbar-h-1.5 lg:scrollbar-track-bg-slate-500/50  dark:lg:scrollbar-track-bg-transparent dark:lg:scrollbar-thumb-bg-transparent lg:scrollbar-rounded bg-white dark:bg-dark-primary lg:rounded-lg lg:overflow-y-auto lg:max-w-xl lg:max-h-[560px] py-10 px-10'>
        <span class='relative before:block before:w-8 before:rounded-full before:absolute before:-inset-0.5 before:bg-blue-400'>
        <h2 className='relative font-semibold text-xl font-lekton text-dark-primary dark:text-white mb-4'>About Me</h2>
        </span>
        <p className='font-semibold text-base font-lekton dark:text-txt-clr mb-2'>
        Hello! 👋 I’m Brahim Trahim.
        </p>
        <p className='font-normal text-base font-lekton dark:text-txt-clr mb-2'>
        A dedicated front-end developer from Agadir, Morocco, with a strong passion for creating dynamic and responsive web applications. My expertise lies in React JS, where I strive to deliver user-friendly and efficient solutions. I’m always eager to learn and explore new technologies, which helps me keep my skills sharp and my projects innovative. I believe in continuous improvement and aim to bring the best to every project I work on.
        </p>
        <span class='relative before:block before:w-8 before:rounded-full before:absolute before:-inset-0.5 before:bg-blue-400'>
        <h2 className='realative font-semibold text-xl font-lekton text-dark-primary dark:text-white mb-4 mt-8 relative'>My Skills</h2>
        </span>
        <div>
          <div>
            <div>
              <h3 className='font-lekton text-base font-semibold dark:text-txt-clr mb-2'>Web Development</h3>
              <div className='flex mb-6'>
                <span className='mr-4'>
                  <img src="assets/images/html.png" alt="html" />
                </span>
                <span className='mr-4'>
                  <img src="assets/images/css.png" alt="css" />
                </span>
                <span className='mr-4'>
                  <img src="assets/images/javas.png" alt="javascript" />
                </span>
                <span className='mr-4'>
                  <img src="assets/images/react.png" alt="reactjs" />
                </span>
                <span className='mr-4'>
                  <img src="assets/images/tailwindcss.png" alt="tailwindcss" />
                </span>
                <span className='mr-4'>
                  <img src="assets/images/bootstrap.png" alt="bootstrap" />
                </span>
                <span>
                  <img src="assets/images/sass.png" alt="sass" />
                </span>
              </div>
            </div>
            <div>
              <h3 className='font-lekton text-base font-semibold dark:text-txt-clr mb-2'>UI/UX Design</h3>
              <div className='flex mb-6'>
                <span className='mr-4'>
                  <img src="assets/images/figma.png" alt="figma" />
                </span>
                <span className='mr-4'>
                  <img src="assets/images/photoshop.png" alt="photoshop" />
                </span>
              </div>
            </div>
            <div>
              <h3 className='font-lekton text-base font-semibold dark:text-txt-clr mb-2'>Tools & Platforms</h3>
              <div className='flex mb-6'>
                <span className='mr-4'>
                  <img src="assets/images/git.png" alt="git" />
                </span>
                <span>
                  <img src="assets/images/github.png" alt="github" />
                </span>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default About