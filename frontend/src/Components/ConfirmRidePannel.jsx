import React from 'react';
import { ImLocation2 } from "react-icons/im";
import { ImLocation } from "react-icons/im";
import { MdPayment } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
const ConfirmRidePannel = (props) => {
  return (
    <div className='overflow-hidden '>
     <h3 className='text-2xl font-semibold'>Confirm Your Ride</h3>
     <h5 className='absolute right-5 top-4'><IoIosArrowDown  onClick={()=>{
        props.setConfirmRidePannel(false)
     }}/></h5>
     <div className='flex items-center justify-center'>
        <img className='h-24' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_406,w_720/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="" />
     </div>
     <div className='flex items-center mb-2 leading-3 gap-5 border-b-2 border-gray-300 active:border-gray-900 py-2 px-2'>
        <ImLocation/>
        <div>
        <h4 className='text-lg font-medium'>563/11-A</h4>
        <p className='text-xs font-base text-gray-500 text-ellipsis'>{props.pickup}</p>
        </div>
     </div>
     <div className='flex items-center mb-2 leading-3 gap-5 border-b-2 border-gray-300 active:border-gray-900 py-2 px-2'>
        <ImLocation2/>
        <div>
        <h4 className='text-lg font-medium'>74/B-1</h4>
        
        <p className='text-xs font-base text-gray-500 text-ellipsis'>{props.destination}</p>
        </div>
     </div>
     <div className='flex items-center mb-6 leading-3 gap-5 border-b-2 border-gray-300 active:border-gray-900 py-2 px-2'>
        <MdPayment/>
        <div>
        <h4 className='text-lg font-medium'>₹{props.fare[props.vehicleType]}</h4>
        <p className='text-xs font-base text-gray-500'>Cash Cash</p>
        </div>
     </div>
     <button onClick={()=>{
      props.setLookingForRidePannel(true)
      props.setConfirmRidePannel(false)
      props.createRide()

     }} className='w-full rounded-xl mb-10 px-8 py-2 bg-green-600 text-white'>Confirm </button>
    </div>
  );
}

export default ConfirmRidePannel;
