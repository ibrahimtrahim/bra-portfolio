import React from 'react';

const Contact = () => {
  return (
    <div>
      <div class="bg-white dark:bg-dark-primary lg:rounded-lg lg:w-[36rem] lg:h-[560px] py-10 px-10">
        <form action="https://formspree.io/f/xbjneodr" method='POST' class="space-y-8">
        <input type="hidden" name="form-name" value="contact" />
          <div>
            <label htmlFor="full-name" className="font-lekton font-semibold dark:text-txt-clr block mb-2 text-sm">Full Name</label>
            <input type="text" id="full-name" name="full-name" className="shadow-sm bg-txt-clr border border-gray-300 text-dark-primary text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required />
          </div>
          <div>
            <label htmlFor="email" className="font-lekton font-semibold dark:text-txt-clr block mb-2 text-sm">Email Address</label>
            <input type="email" id="email" name="email" className="block p-3 w-full text-sm text-dark-primary bg-txt-clr rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="font-lekton font-semibold dark:text-txt-clr block mb-2 text-sm">Your message</label>
            <textarea id="message" name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 bg-txt-clr dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"></textarea>
          </div>
          <div className="flex justify-center items-center mt-4 md:mt-6">
            <button type="submit" className="items-center px-4 py-2 text-sm font-lekton font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SEND MESSAGE</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact