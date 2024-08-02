import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'


const MyBookings = () => {
  return (
   <>
   <Navbar/>
   <h1 className='text-center text-2xl pt-[10%]'>My Bookings</h1>
   <div className='h-[calc(100vh-40vh)]'></div>
   <Footer/>
   </>
  )
}

export default MyBookings