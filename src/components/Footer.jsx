import React from 'react'
import './style.css'

const Footer = () => {
  return (
   

<footer class="bg-gray  shadow text-gray ">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" /> */}
                <span class="self-center text-lite-green text-2xl font-semibold whitespace-nowrap ">SUNSHINE TURF</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-lite-green sm:mb-0 ">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Home</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Book Now</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-dark-green sm:mx-auto lg:my-8" />
        <span class="block text-sm text-lite-green sm:text-center ">© 2023 <a href="" class="hover:underline">Sunshine Turf.</a> All Rights Reserved.</span>
    </div>
</footer>

  )
}

export default Footer