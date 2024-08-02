import React, { useState, useEffect } from 'react'
import { Navigate,useNavigate, useLocation, useParams } from 'react-router-dom'
import axios from 'axios'
function GoogleCallBackAuth() {
  const [auth, setAuth] = useState()
  const [jwt, setJwt] = useState()
  const location = useLocation()
  const navigate = useNavigate();
  const id_token = useParams();
  useEffect(() => {
    if (!location) {
      return
    }
    const { search } = location
    axios({
      method: 'GET',
      url: `https://api.sunshinemontessoriecr.in/api/auth/google/callback?${search}`,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) =>  res.data)
    .then(setAuth)
  },[location] )

    // console.log(JSON.stringify(auth),'auth')
    localStorage.setItem('User',auth)
    const jwtToken = auth?.jwt

    localStorage.setItem('UserId',auth?.user.id)
    localStorage.setItem('EmailId',auth?.user.email)
    localStorage.setItem('JwtToken',jwtToken)

    const redirectUrl = localStorage.getItem('redirect');

    if(redirectUrl){
      setTimeout(() => {
        navigate(redirectUrl)
      },2000)
    }
    else{
      // setTimeout(() => {
        localStorage.setItem('redirectToHome','/')
        navigate('/');
        setTimeout(()=>{
          window.location.reload();
        },1000)
      // },1000)
    }
    
}



export default GoogleCallBackAuth;