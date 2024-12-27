import React from 'react';
import { ImLocation2 } from "react-icons/im";
import { ImLocation } from "react-icons/im";
import { MdPayment } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const RidePopUp = (props) => {
  
  return (
    <div>
     <h3 className='text-2xl font-semibold mb-4'>New Ride Available!</h3>
     <h5 className='absolute right-5 top-4'><IoIosArrowDown onClick={()=>{
        props.setRidePopUpPannel(false)
     }}/></h5>
      <div className='flex items-center justify-between bg-yellow-400 rounded-xl  p-4 mt-2 mb-2'>
  <div className='flex items-center gap-2'>
  <div className='w-12 h-12 rounded-full overflow-hidden'>
    <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
  </div>
  <h3 className='text-xl font-medium'>{props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname}</h3>
  </div>
    <div className='text-center'>
      <h4 className='text-s font-medium'>2.2 KM</h4>
    </div>
    </div>
    
     <div className='flex items-center mb-2 leading-3 gap-5 border-b-2 border-gray-300 active:border-gray-900 py-2 px-2'>
        <ImLocation/>
        <div>
        <h4 className='text-lg font-medium'>563/11-A</h4>
        <p className='text-xs font-base text-gray-500'>{props.ride?.pickup}</p>
        </div>
     </div>
     <div className='flex items-center mb-2 leading-3 gap-5 border-b-2 border-gray-300 active:border-gray-900 py-2 px-2'>
        <ImLocation2/>
        <div>
        <h4 className='text-lg font-medium'>h-08 tulsi,parisar</h4>
        <p className='text-xs font-base text-gray-500'>{props.ride?.destination}</p>
        </div>
     </div>
     <div className='flex items-center mb-6 leading-3 gap-5 border-b-2 border-gray-300 active:border-gray-900 py-2 px-2'>
        <MdPayment/>
        <div>
        <h4 className='text-lg font-medium'>₹{props.ride?.fare}</h4>
        <p className='text-xs font-base text-gray-500'>Cash Cash</p>
        </div>
     </div>
     <button onClick={()=>{
      props.setAcceptRidePopUpPannel(true)
      props.confirmRide()
     }} className='w-full rounded-xl px-8 py-2 bg-green-600 text-white'>Accept </button>
     <button onClick={()=>{
        props.setRidePopUpPannel(false)
     }} className='w-full rounded-xl px-8 py-2 bg-gray-300 mt-2 text-black'>Ignore</button>
    </div>
  );
}

export default RidePopUp;
