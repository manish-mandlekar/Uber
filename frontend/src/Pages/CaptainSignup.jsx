import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {captainDataContext} from '../Context/CaptainContext';
import axios from 'axios';


const CaptainSignup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('')


  const navigate = useNavigate()
  const {captain , setCaptain} = useContext(captainDataContext)

  const submitHandler =async (e) => {
    e.preventDefault();
    const captainData = {
     fullname:{
      firstname: firstname,
      lastname: lastname,
     },
      email: email,
      password: password,
      vehicle:{
        color:vehicleColor,
        plate:vehiclePlate,
        capacity:vehicleCapacity,
        vehicleType:vehicleType
      }
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`,captainData)
    if(response.status == 201){
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token',data.token)
      
      navigate('/captain-home')
    }


    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
    setVehicleCapacity('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleType('')
  };
  return (
    <div className="w-full h-screen px-6 py-5 flex flex-col justify-between ">
      <div>
      <img
        src="https://www.svgrepo.com/show/505031/uber-driver.svg"
        className="w-16 mb-5"
        alt=""
      />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's our captain's Name</h3>
          <div className="flex gap-2 mb-5">
            <input
              required
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              className="border rounded w-1/2 px-2 py-2 bg-[#eeeeee] placeholder:text-base"
              type="text"
              placeholder="First name"
            />
            <input
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              className="border rounded w-1/2 px-2 py-2 bg-[#eeeeee] placeholder:text-base"
              type="text"
              placeholder="Last name"
            />
          </div>

          <h3 className="text-lg font-medium mb-2">What's our captain's email</h3>
          <input
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border rounded w-full px-2 py-2 bg-[#eeeeee] mb-5 placeholder:text-base"
            type="email"
            placeholder="youremail@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            value={password}
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="border rounded w-full px-2 py-2 bg-[#eeeeee] placeholder:text-base"
            type="password"
            placeholder="password"
          />

<h3 className="text-lg font-medium mb-2 mt-5">Vehicle Information</h3>
          <div className="flex gap-2 mb-5">
            <input
              required
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value);
              }}
              className="border rounded w-1/2 px-2 py-2 bg-[#eeeeee] placeholder:text-base"
              type="text"
              placeholder="Vehicle Color"
            />
            <input
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value);
              }}
              className="border rounded w-1/2 px-2 py-2 bg-[#eeeeee] placeholder:text-base"
              type="text"
              placeholder="Vehicle Plate"
            />
          </div>
          <div className="flex gap-2 mb-5">
            <input
              required
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value);
              }}
              className="border rounded w-1/2 px-2 py-2 bg-[#eeeeee] placeholder:text-base"
              type="number"
              placeholder="Vehicle Capacity"
            />
           <select
  value={vehicleType}
  onChange={(e) => {
    setVehicleType(e.target.value);
  }}
  className="border rounded w-1/2 px-2 py-2 bg-[#eeeeee] placeholder:text-base"
>
  <option value="" disabled>
   Vehicle Type
  </option>
  <option value="car">Car</option>
  <option value="motorcycle">Motorcycle</option>
  <option value="auto">Auto</option>
</select>
          </div>
          
          <button className="w-full bg-black text-white mt-4 px-2 py-2 rounded text-xl font-normal">
           Create Captain Account
          </button>
        </form>
        <p className="text-center mt-2 font-normal text-l">
          Already have a account?{" "}
          <Link to="/captain-login" className="text-blue-500">
            Login here
          </Link>{" "}
        </p>
      </div>
     
    </div>
  )
}

export default CaptainSignup
