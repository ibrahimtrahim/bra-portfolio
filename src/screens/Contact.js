import React from 'react';

const Contact = () => {
  return (
    <div>
        <div class="bg-dark-primary dark:bg-white lg:rounded-lg lg:w-[37rem] lg:max-h-[35rem] py-10 px-10">
            <form action="#" class="space-y-8">
                    <div>
                        <label for="email" class="font-lekton font-semibold text-txt-clr block mb-2 text-sm">Full Name</label>
                        <input type="email" id="email" class="shadow-sm bg-txt-clr border border-gray-300 text-dark-primary text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required/>
                    </div>
                    <div>
                        <label for="subject" class="font-lekton font-semibold text-txt-clr block mb-2 text-sm">Email Address</label>
                        <input type="text" id="subject" class="block p-3 w-full text-sm text-dark-primary bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required/>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="font-lekton font-semibold text-txt-clr block mb-2 text-sm">Your message</label>
                        <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 bg-txt-clr dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"></textarea>
                    </div>
                    <div class="flex justify-center items-center mt-4 md:mt-6">
                        <a href="#" class="items-center px-4 py-2 text-sm font-lekton font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SEND MESSAGE</a>
                    </div>
            </form>
      </div>
    </div>
  )
}

export default Contact