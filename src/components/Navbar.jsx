import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
const EmailID = localStorage.getItem('EmailId');
const jwt = localStorage.getItem('JwtToken');

const Navbar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const Login = () =>{
    window.location = 'https://api.sunshinemontessoriecr.in/api/connect/google';
  }


  const signOut = () =>{
    localStorage.removeItem('UserId');
    localStorage.removeItem('EmailId');
    localStorage.removeItem('JwtToken');
    setTimeout(()=>{
      window.location.reload();
    },1000)
    navigate('/');
  }


  return (
    <nav className="lg:backdrop-blur-[3px] bg-gray fixed w-full z-50">
      <div className="max-w-screen-xl relative flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-lite-green">SUNSHINE TURF</span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${menuOpen ? '' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li onClick={() => navigate('/')}>
              <a className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
            </li>
            <li onClick={() => navigate('/bookings')}>
              <a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Book Now</a>
            </li>
            <li onClick={() => navigate('/contact')}>
              <a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
            </li>
          </ul>
        </div>

        <div className="relative">
          <button
            id="dropdownInformationButton"
            onClick={toggleDropdown}
            className="font-medium rounded-lg text-sm text-center inline-flex items-center"
            type="button"
          >
            <svg width="512" height="512" viewBox="0 0 512 512" style={{ color: '#a1e600' }} xmlns="http://www.w3.org/2000/svg" className="h-12 w-12">
              <rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" strokeWidth="0" strokeOpacity="100%" paintOrder="stroke"></rect>
              <svg width="256px" height="256px" viewBox="0 0 32 32" fill="#a1e600" x="128" y="128" role="img" xmlns="http://www.w3.org/2000/svg">
                <g fill="#a1e600">
                  <path fill="currentColor" d="M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7zm10 28h-2v-5a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v5H2v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7zm0-26h10v2H22zm0 5h10v2H22zm0 5h7v2h-7z" />
                </g>
              </svg>
            </svg>
          </button>

          {dropdownOpen && (
            <div id="dropdownInformation" className="z-10 bg-white absolute divide-y divide-gray-100 rounded-lg shadow w-44 right-0   mt-2">
              {jwt?(
                <>
              <div className=" px-4 py-3 text-sm text-gray-900 text-gray">
                <div className="font-medium truncate">{EmailID}</div>
              </div>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
                <li>
                  <a href="/mybookings" className="block px-4 py-2 ">My Bookings</a>
                </li>
              </ul>
              <div className="py-2">
                <a onClick={signOut}  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer ">Sign out</a>
              </div>
                </>
              ):(
                <div className="py-2">
                <a onClick={Login} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer ">Login</a>
              </div>
              )}

            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
