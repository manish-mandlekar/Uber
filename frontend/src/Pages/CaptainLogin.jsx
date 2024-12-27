import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { captainDataContext } from '../Context/CaptainContext';

const CaptainLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
  const {captain , setCaptain} = useContext(captainDataContext)

  const submitHandler =async (e)=>{
      e.preventDefault();
      const captainData = {
          email:email,
          password:password
      }
      const response  =await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/login`,captainData)
      if(response.status == 200){
        const data = response.data
        
        setCaptain(data.captain)
        localStorage.setItem('token',data.token)
        navigate('/captain-home')
      }



      setEmail('')
      setPassword('')
      
  }
  return (
    <div className="w-full h-screen px-6 py-5 flex flex-col justify-between ">
    <div>
      <img
        src="https://www.svgrepo.com/show/505031/uber-driver.svg"
        className="w-16 mb-5"
        alt=""
      />
      <form onSubmit={(e)=>{
submitHandler(e)
      }}>
        <h3 className="text-lg font-medium mb-2">What's your email</h3>
        <input
        value={email}
        onChange={(e)=>{
        setEmail(e.target.value)
        }}
          className="border rounded w-full px-2 py-3 bg-[#eeeeee] mb-5 placeholder:text-base"
          type="email"
          placeholder="youremail@example.com"
        />
        <h3 className="text-lg font-medium mb-2">Enter Password</h3>
        <input
        value={password}
        onChange={(e)=>{
        setPassword(e.target.value)
        }}
          className="border rounded w-full px-2 py-3 bg-[#eeeeee] placeholder:text-base"
          type="password"
          placeholder="password"
        />
        <button className="w-full bg-black text-white mt-3 px-2 py-3 rounded text-xl font-normal">
          Login
        </button>
      </form>
      <p className="text-center mt-2 font-normal text-l">
        Join a fleet?{" "}
        <Link to="/captain-signup" className="text-blue-500">
          Register as a Captain
        </Link>{" "}
      </p>
    </div>
    <div>
      <Link
        to="/user-login"
        className="flex items-center justify-center w-full bg-[#d5622d] text-white px-2 py-3 rounded text-xl font-normal"
      >
        Sign in as User
      </Link>
    </div>
  </div>
  )
}

export default CaptainLogin
