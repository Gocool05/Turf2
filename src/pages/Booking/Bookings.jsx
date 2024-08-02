import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Bookings.css';
import axios from 'axios';
import { useMutation, useQuery } from 'react-query';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const Bookings = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [updatedDate, setupdatedDate] = useState(null);
  const [updatedTime, setupdatedTime] = useState(null);
  const [agreed, setAgreed] = useState(false);
  const [isAlreadyBooked, setIsAlreadyBooked] = useState(false);
  const [timeSlots, setTimeSlots] = useState(new Map());
  const jwt = localStorage.getItem('JwtToken');
  const navigate = useNavigate();

  const nextStep = () => {
    if(jwt){
      setCurrentStep((prevStep) => Math.min(prevStep + 1, 3));
    }
    else{
      window.location = 'https://api.sunshinemontessoriecr.in/api/connect/google';
    }
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const Login = () =>{
  }

  const time = [
    "A09:00AM", "B10:00AM", "C11:00AM", "D12:00PM", "E01:00PM",
    "F02:00PM", "G03:00PM", "H04:00PM", "I05:00PM"
  ];

  const indexTime = [
    "9AM", "10AM", "11AM", "12PM", "1PM",
    "2PM", "3PM", "4PM", "5PM"
  ];

  const convertHourTo12HourFormat = (hour24) => {
    const hour = hour24 % 12 || 12;
    const suffix = hour24 >= 12 ? 'PM' : 'AM';
    return `${hour}${suffix}`;
  };

  const isDisabled = (key, value) => {
    const currentDate = new Date();
    const currentTimeIndex = indexTime.indexOf(convertHourTo12HourFormat(currentDate.getHours()));

    // Check if the selected date is today
    const isToday = startDate.toDateString() === currentDate.toDateString();

    // Disable past times if the selected date is today
    if (isToday ) {
      return value[0] <= time[currentTimeIndex] || timeSlots.get(key) ;
    }

    if(value[1] ){
      return true;
    }

    // Disable past dates
    return startDate < currentDate || timeSlots.get(key) === true;
  };

  const toggleAgreement = () => {
    setAgreed(!agreed);
  };

  const handleBookingPost = async () => {
    const userId = localStorage.getItem('userId');
    const response = await axios.post(
      'https://api.sunshinemontessoriecr.in/api/bookings',
      {
        data: {
          timeslots: selectedTime,
          date: startDate,
          payment_id: '123456789',
          users_permissions_user: userId
        }
      }
    );
    return response.data;
  };

  const { mutate, isLoading, isError } = useMutation(handleBookingPost, {
    onSuccess: () => {
      console.log('Booking successful, moving to next step');
      nextStep();
    },
    onError: (error) => {
      if (error.response.data.error.status === 400) {
        setIsAlreadyBooked(true);
      } else if (error.response.data.error.status === 500) {
        setIsAlreadyBooked(true);
        alert('Already booked');
      }
    }
  });

  const handleDateChange = async (date) => {
    setStartDate(date);
    const formattedDate = format(date, 'yyyy-MM-dd');
    const res = await axios.get(`https://api.sunshinemontessoriecr.in/api/booking-check/${formattedDate}`);
    const timeSlotsMap = new Map(Object.entries(res.data));
    setTimeSlots(timeSlotsMap);
    console.log(timeSlots,'time slots')
  };

  const { data } = useQuery(['selectedDate', startDate], () => handleDateChange(startDate), {
    enabled: !!startDate,
  });

  const handleSubmit = (e) => {
    const amount = 800;
    var options = {
      key: "rzp_test_FzfEBFEFw0x0yv",
      key_secret: "HuRE9TPgjqpBLYLuDMBn1fCS",
      amount: amount * 100,
      currency: "INR",
      name: "SUNSHINE_TURF",
      description: "for testing purpose",
      handler: async function (Paymentresponse) {
        const userId = localStorage.getItem("userId");
        await axios.post(
          "https://api.sunshinemontessoriecr.in:/api/bookings",
          {
            data: {
              timeslots: updatedTime,
              date: updatedDate,
              payment_id: Paymentresponse.razorpay_payment_id,
              users_permissions_user: userId,
            },
          }
        );
        navigate('/')
      },
      prefill: {
        name: "GOCOOL",
        email: "GOCOOL@gmail.com",
        contact: "8888888888",
      },
      notes: {
        address: "Razorpay Corporate office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var pay = new window.Razorpay(options);
    pay.open();
  };

  const Details = () => (
    <>
      <div className='flex gap-10 justify-between min-w-full flex-col sm:flex-row'>
        <div className="max-w-lg">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
          <p className="mt-4 text-gray-600 text-lg">At Sunshine Turf Booking, we are dedicated to providing a seamless and enjoyable experience for booking the best turfs in town. Whether you're planning a casual game with friends, organizing a sports event, or looking for a regular practice spot, we've got you covered.</p>
          <p className="mt-4 font-bold text-gray-600 text-lg">Book your turf now for just 800 per hour and enjoy a premium sports experience!</p>
        </div>
        <div className="mt-12 md:mt-0 sm:p-0 p-10 drop-shadow-2xl">
              <img  src="https://res.cloudinary.com/dx78kzenz/image/upload/v1721203445/three-boxes-full-sport-equipments-white-background_h7suic.png" alt="About Us Image" className="object-cover rounded-lg drop-shadow-2xl" />
            </div>
      </div>
      <button
        className="bg-gray text-white mt-5 p-2 rounded float-right"
        onClick={nextStep}
        disabled={currentStep === 2 && (!startDate || !selectedTime)}
      >
        Next
      </button>
    </>
  );

  const Booking = () => (
    <section>
      <div>
        <h1 className="text-center uppercase font-bold pt-10 pb-3">
          Pick a Date: -
        </h1>
        <div className="flex justify-center pb-10 items-center">
          <DatePicker
            selected={startDate}
            onChange={(date) => handleDateChange(date)}
            inline
            className="my-custom-datepicker"
            minDate={Date.now()}
          />
        </div>
      </div>
      <div>
        <h1 className="text-center uppercase font-bold pt-10 pb-3">
          Select Time Range: -
        </h1>
        <div className="flex justify-center pb-10 items-center">
          <div id="timeButtons">
            {Array.from(timeSlots.entries()).map(([key,value]) => (
              <button
                key={value[0]}
                style={{
                  backgroundColor: value[0] === selectedTime ? "green" : "white",
                  color: value[0] === selectedTime ? "white" : "black",
                  border: "3px inset #054775",
                  padding: '5px',
                  borderRadius: "5px",
                  cursor: "pointer",
                  pointerEvents: isDisabled(key, value) ? 'none' : 'auto',
                  opacity: isDisabled(key, value) ? 0.5 : 1,
                }}
                className='m-3 p-3'
                onClick={() => {
                  setSelectedTime(value[0]);
                  setupdatedDate(startDate);
                  setupdatedTime(value[0]);
                }}
                disabled={isDisabled(key, value)}
              >
               {value[0].substring(1).replace(/([0-9]+)(AM|PM)/, '$1 $2')}
              </button>
            ))}
          </div>
        </div>
        <button
          className="bg-gray text-white p-2 rounded float-right"
          onClick={nextStep}
          disabled={!startDate || !selectedTime}
        >
          Next
        </button>
      </div>
    </section>
  );

  const Confirm = () => (
    <section className='container'>
      <h1 className='text-center font-bold text-3xl uppercase'>
        Confirm your booking
      </h1>
      <div className='flex flex-col justify-center items-center'>
        <div className='p-5 flex flex-col justify-center items-center'>
          <h3>
            <strong>Selected Date:</strong> {updatedDate ? updatedDate.toDateString() : 'No date selected'}
          </h3>
          <h3>
            <strong>Selected Time:</strong> {updatedTime ? indexTime[time.indexOf(updatedTime)] : 'No time selected'}
          </h3>
        </div>
        <div className="terms-and-conditions">
        <div className='mt-4'>
        <h4 className='font-bold'>Terms and Conditions for Turf Booking</h4>
        <ul className='list-disc pl-5'>
          <li>Booking Confirmation: Your booking is confirmed only after full payment has been received. A confirmation email will be sent to the email address provided during the booking process.</li>
          <li>Cancellation Policy: Cancellations made more than 48 hours before the scheduled booking time will receive a full refund. Cancellations made within 48 hours of the booking time will not be refunded.</li>
          <li>Usage: The turf can be used only for the booked time slot. Any extension of time is subject to availability and additional charges.</li>
          <li>Responsibility: Users are responsible for their own safety and the safety of others. The management is not liable for any injuries or accidents that occur on the turf.</li>
          <li>Maintenance: Please ensure the turf is kept clean. Any damage caused to the turf will result in a penalty fee.</li>
          <li>Compliance: Users must comply with all rules and regulations set by the management. Failure to comply may result in expulsion from the premises without a refund.</li>
        </ul>
      </div>
          <input
            type="checkbox"
            id="agreement"
            checked={agreed}
            onChange={toggleAgreement}
            className="my-10 mr-2"
          />
          <label htmlFor="agreement">I agree to the terms and conditions</label>
        </div>
      </div>
      <div className="buttons flex justify-between">
        <button className="bg-gray text-white p-2 rounded" onClick={prevStep}>
          Previous
        </button>
        <button
          className="bg-gray text-white p-2 rounded"
          disabled={!agreed}
          onClick={handleSubmit}
        >
          Confirm & Pay
        </button>
      </div>
    </section>
  );

  const renderContent = () => {
    switch (currentStep) {
      case 1:
        return <Details />;
      case 2:
        return <Booking />;
      case 3:
        return <Confirm />;
      default:
        return <Details />;
    }
  };

  return (
    <>
      <Navbar />
      <div className='body-font'>
        <div className='w-full'>
          <div className='flex justify-between items-center'>
            <div className='p-5 lg:mx-[15%] sm:mx-0 w-full'>
              <h1 className='font-bold text-xl uppercase text-center py-20'>
                BOOK YOUR SLOT NOW!
              </h1>
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Bookings;
