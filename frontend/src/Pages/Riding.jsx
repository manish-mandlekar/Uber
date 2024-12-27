import React from 'react';
import { ImLocation2 } from 'react-icons/im';
import { MdPayment } from 'react-icons/md';
import { IoHomeOutline } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom' // Added useLocation
import { useEffect, useContext } from 'react'
import { SocketContext } from '../Context/SocketContext'
import { useNavigate } from 'react-router-dom'
import LiveTracking from '../Components/LiveTracking'

const Riding = () => {
  const location = useLocation()
    const { ride } = location.state || {} // Retrieve ride data
    const { socket } = useContext(SocketContext)
    const navigate = useNavigate()


    socket.on("ride-ended", () => {
      navigate('/home')
  })

  return (
    <div className='h-screen w-screen'>
        <Link to='/home' className='fixed w-8 h-8 rounded-full bg-white flex items-center justify-center right-5 top-5'>
            <IoHomeOutline/>
        </Link>
        <div className='h-1/2'>
               

            </div>
       <div className="w-full h-1/2 ">
       <LiveTracking />
      </div>
      <div className='h-1/2'>
      <div className='flex align-center justify-between p-2'>
      <div>
            <img className='h-24' src="https://tc.mobile.yandex.net/static/images/10593/91374d77191a42079ae15eb589c42e23" alt="" />
        </div>
        <div className='text-center flex flex-col items-center'>
            <h3 className='text-base font-base mt-4'>{ride?.captain.fullname.firstname}</h3>
            <h2 className='font-semibold text-xl'>{ride?.captain.vehicle.plate}</h2>
            <p className='text-xs font-normal text-gray-500'>Maruti Suzuki Alto 800</p>
        </div>
      </div>
      <div  className='p-4'>
        
     
     <div className='flex items-center mb-2 leading-3 gap-5 border-b-2 border-gray-300 active:border-gray-900 py-2 px-2'>
        <ImLocation2/>
        <div>
        <h4 className='text-lg font-medium'>h-08 tulsi,parisar</h4>
        <p className='text-xs font-base text-gray-500'>{ride?.destination}</p>
        </div>
     </div>
     <div className='flex items-center mb-4 leading-3 gap-5 border-b-2 border-gray-300 active:border-gray-900 py-2 px-2'>
        <MdPayment/>
        <div>
        <h4 className='text-lg font-medium'>₹{ride?.fare}</h4>
        <p className='text-xs font-base text-gray-500'>Cash Cash</p>
        </div>
     </div>
     <button className='w-full rounded-xl px-8 py-2 bg-green-600 text-white'>Make a Payment</button>
      </div>
      </div>
    </div>
  );
}

export default Riding;
