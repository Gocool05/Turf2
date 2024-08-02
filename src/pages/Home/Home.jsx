import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';

const Home = () => {

  const bookNow = () =>{
      window.location.href='/bookings'
  }
  const timings = {
    data: {
      0: {
        day: "Sunday",
        time: "8:00 AM - 10:30 PM",
      },
      1: {
        day: "Monday",
        time: "8:00 AM - 10:30 PM",
      },
      2: {
        day: "Tuesday",
        time: "8:00 AM - 10:30 PM",
      },
      3: {
        day: "Wednesday",
        time: "8:00 AM - 10:30 PM",
      },
      4: {
        day: "Thursday",
        time: "8:00 AM - 10:30 PM",
      },
      5: {
        day: "Friday",
        time: "8:00 AM - 10:30 PM",
      },
      6: {
        day: "Saturday",
        time: "8:00 AM - 10:30 PM",
      },
    },
  };


  return (
    <>
      <Navbar />
      <section class="pt-20 bg-white bg-[url('https://res.cloudinary.com/dx78kzenz/image/upload/v1721201664/meeting-white-snow-green-grass-close-up-winter-spring-concept-background_fviddx.png')] dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">SUNSHINE TURF</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Book your turf now for just 800 per hour and enjoy a premium sports experience</p>
            <button onClick={bookNow} class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center bg-gray text-dark-green rounded-lg bg-primary-700 hover:bg-primary-800 ">
                BOOK NOW
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        </div>
        <div class=" lg:mt-0 lg:col-span-5 lg:flex">
            <img className='pr-[30px] mt-[30px] lg:pr-0 drop-shadow-2xl lg:mt-0' src="https://res.cloudinary.com/dx78kzenz/image/upload/v1721203423/sports-balls-collection-vector_lh7i4o.png" alt="mockup"/>
        </div>                
    </div>
</section>

      {/* about us section */}
      <section className="bg-white">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Welcome to Sunshine Turf</h2>
              <p className="mt-4 text-gray-600 text-lg">At Sunshine Turf Booking, we are dedicated to providing a seamless and enjoyable experience for booking the best turfs in town. Whether you're planning a casual game with friends, organizing a sports event, or looking for a regular practice spot, we've got you covered.</p>
              <p className="mt-4 text-gray-600 text-lg">
              Be a part of our growing community and take your sports experience to the next level with Sunshine Turf Booking. Book your turf today and enjoy a hassle-free and enjoyable sports experience!
              </p>
              <p className="mt-4 text-gray-600 text-lg">
              Our mission is to make turf booking hassle-free and accessible for everyone. We believe in promoting sports and fitness by providing high-quality, well-maintained turfs that cater to a variety of sports and activities.
              </p>
            </div>
            <div class="card">
          <div class="bg">
            <img src='https://i.abcnewsfe.com/a/cf0c0747-e7b8-47b2-8925-1ac36a005f8c/artificial-turf-san-diego-gty-jt-240320_1710967199764_hpMain.jpg' alt=' ' className='' />
            {/* <h1 className='uppercase py-1'>Turf Details</h1> */}
            {/* <div className='p-3'>
              <h3>Rs 1200/hr</h3>
              <p>Get ready to have the experience of playing like professionals on Turf which will make you forget playing on ordinary grass.</p>
            </div> */}
          </div>
          <div class="blob"></div>
        </div>
          </div>
        </div>
      </section>

      {/* Timings section */}
        <h1 className='bg-white text-4xl uppercase text-center'>Timings</h1>
      <section className="flex bg-white justify-center items-center py-16">
        <div className="grid grid-cols-2  sm:grid-cols-7   gap-10">
          {Object.values(timings.data).map((timing, index) => (
            <div key={index} className="w-32 flex-none rounded-t  lg:rounded-t-none lg:rounded-l text-center shadow-lg">
              <div className="block rounded-t overflow-hidden text-center">
                <div className="bg-green text-white py-1">
                  {timing.day}
                </div>
                <div className="pb-2 border-l border-r border-b rounded-b-lg text-center border-white bg-white">
                  <span className="text-xs leading-normal">
                    {timing.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
            {/* testimonials section  */}
            <h1 className='bg-white text-4xl uppercase text-center'>Testimonials</h1>
            <Carousel
  additionalTransfrom={0}
  arrows
  autoPlay
  autoPlaySpeed={1000}
  centerMode={false}
  className="bg-white sm:mx-10 py-10"
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={2}
  swipeable
>
<div class="flex m-5 flex-col max-w-md align-center justify-between border border-solid border-gray-200 bg-white dark:bg-gray-800 rounded-xl">
    <div class="flex flex-col px-6 pt-8 mb-10 space-y-5">
        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="text-gray-A400 dark:text-gray-600 fill-current">
            <path d="M24 7.3h-5.1L22.3.4H17l-3.4 6.9v10.3H24V7.3zM10.3 17.6V7.3H5L8.6.4H3.4L0 7.3v10.3h10.3z"
                fill="current"></path>
        </svg>
        <p class="body-medium m-0 dark:text-gray-200">Sunshine Turf Booking made it so easy for our team to find a great turf for our weekend matches. The booking process was quick, and the turf was in excellent condition. Highly recommend!</p>
    </div>
    <div class="flex space-x-2 bg-gray-50 dark:bg-gray-900/60 dark:text-gray-200 px-6 pt-6 pb-5 rounded-b-xl">
        <div class="flex flex-col justify-center">
            <p class="heading-six m-0">John Doe</p>
            <p class="body-small m-0 mt-1">@Student</p>
        </div>
    </div>
</div>
<div class="flex m-5 flex-col max-w-md align-center justify-between border border-solid border-gray-200 bg-white dark:bg-gray-800 rounded-xl">
    <div class="flex flex-col px-6 pt-8 mb-10 space-y-5">
        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="text-gray-A400 dark:text-gray-600 fill-current">
            <path d="M24 7.3h-5.1L22.3.4H17l-3.4 6.9v10.3H24V7.3zM10.3 17.6V7.3H5L8.6.4H3.4L0 7.3v10.3h10.3z"
                fill="current"></path>
        </svg>
        <p class="body-medium m-0 dark:text-gray-200">I booked a turf for my son's birthday party, and it was a hit! The kids had a blast playing soccer, and the facilities were top-notch and the turfs are always well-maintained. Will definitely book again.</p>
    </div>
    <div class="flex space-x-2 bg-gray-50 dark:bg-gray-900/60 dark:text-gray-200 px-6 pt-6 pb-5 rounded-b-xl">
        <div class="flex flex-col justify-center">
            <p class="heading-six m-0">Sarah Williams</p>
            <p class="body-small m-0 mt-1">@Developer</p>
        </div>
    </div>
</div>
<div class="flex m-5 flex-col max-w-md align-center justify-between border border-solid border-gray-200 bg-white dark:bg-gray-800 rounded-xl">
    <div class="flex flex-col px-6 pt-8 mb-10 space-y-5">
        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="text-gray-A400 dark:text-gray-600 fill-current">
            <path d="M24 7.3h-5.1L22.3.4H17l-3.4 6.9v10.3H24V7.3zM10.3 17.6V7.3H5L8.6.4H3.4L0 7.3v10.3h10.3z"
                fill="current"></path>
        </svg>
        <p class="body-medium m-0 dark:text-gray-200">As a regular user, I appreciate the flexibility and ease of booking with Sunshine Turf Booking. The customer service is fantastic, and the turfs are always well-maintained</p>
    </div>
    <div class="flex space-x-2 bg-gray-50 dark:bg-gray-900/60 dark:text-gray-200 px-6 pt-6 pb-5 rounded-b-xl">
        <div class="flex flex-col justify-center">
            <p class="heading-six m-0">Michael Brown</p>
            <p class="body-small m-0 mt-1">@Employee</p>
        </div>
    </div>
</div>
<div class="flex m-5 flex-col max-w-md align-center justify-between border border-solid border-gray-200 bg-white dark:bg-gray-800 rounded-xl">
    <div class="flex flex-col px-6 pt-8 mb-10 space-y-5">
        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="text-gray-A400 dark:text-gray-600 fill-current">
            <path d="M24 7.3h-5.1L22.3.4H17l-3.4 6.9v10.3H24V7.3zM10.3 17.6V7.3H5L8.6.4H3.4L0 7.3v10.3h10.3z"
                fill="current"></path>
        </svg>
        <p class="body-medium m-0 dark:text-gray-200">We organized a corporate sports day using Sunshine Turf Booking, and it was a smooth experience from start to finish. The team was very supportive, and the turf quality was impressive.</p>
    </div>
    <div class="flex space-x-2 bg-gray-50 dark:bg-gray-900/60 dark:text-gray-200 px-6 pt-6 pb-5 rounded-b-xl">
        <div class="flex flex-col justify-center">
            <p class="heading-six m-0">Emily Johnson</p>
            <p class="body-small m-0 mt-1">@Student</p>
        </div>
    </div>
</div>



 
</Carousel>


      <Footer />
    </>
  );
};

export default Home;
