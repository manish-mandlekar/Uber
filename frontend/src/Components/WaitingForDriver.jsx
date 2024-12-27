import React from 'react';
import { ImLocation, ImLocation2 } from 'react-icons/im';
import { IoIosArrowDown } from 'react-icons/io';
import { MdPayment } from 'react-icons/md';

const WaitingForDriver = (props) => {
  return (
    <div>
     <h3 className='text-2xl font-semibold'>Looking For A Driver</h3>
     <h5 className='absolute right-5 top-4'><IoIosArrowDown  onClick={()=>{
        props.setWaitingForDriverPannel(false)
     }}/></h5>
     <div className='flex items-center justify-between gap-5'>
        <img className='h-32' src="https://tc.mobile.yandex.net/static/images/10593/91374d77191a42079ae15eb589c42e23" alt="" />
        <div className='text-center'>
            <h3 className='text-base font-base'>{props.ride?.captain.fullname.firstname + " " +props.ride?.captain.fullname.lastname}</h3>
            <h2 className='font-semibold text-2xl'>{props.ride?.captain.vehicle.plate}</h2>
            <p className='text-xs font-normal text-gray-500'>Maruti Suzuki Alto 800</p>
            <h1 className='text-lg font-semibold'>  {props.ride?.otp} </h1>
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
        <h4 className='text-lg font-medium'>563/11-A</h4>
        <p className='text-xs font-base text-gray-500'>{props.ride?.destination}</p>
        </div>
     </div>
     <div className='flex items-center mb-6 leading-3 gap-5 border-b-2 border-gray-300 active:border-gray-900 py-2 px-2'>
        <MdPayment/>
        <div>
        <h4 className='text-lg font-medium'>₹{props.ride?.fare} </h4>
        <p className='text-xs font-base text-gray-500'>Cash Cash</p>
        </div>
     </div>
     
    </div>
  );
}

export default WaitingForDriver;
