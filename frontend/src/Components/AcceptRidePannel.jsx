import React, { useState } from "react";
import { ImLocation2 } from "react-icons/im";
import { ImLocation } from "react-icons/im";
import { MdPayment } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AcceptRidePannel = (props) => {
  const [otp, setOtp] = useState("");
 
const navigate = useNavigate();
 
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/rides/start-ride`,
      {
        params: {
          rideId: props.ride._id,
          otp: otp
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    if (response.status === 200) {
      props.setAcceptRidePopUpPannel(false);
      props.setRidePopUpPannel(false);
      navigate("/captain-riding", { state: { ride: props.ride } });
    }
  }
  return (
    <div className="h-screen pt-4">
      <h3 className="text-2xl font-semibold mb-4">
        Confirm this ride to start!
      </h3>

      <div className="flex items-center justify-between border-2 border-yellow-400 rounded-xl  p-4 mt-4 mb-2">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <h3 className="text-xl font-medium">
            {props.ride?.user.fullname.firstname}
          </h3>
        </div>
        <div className="text-center">
          <h4 className="text-s font-medium">2.2 KM</h4>
        </div>
      </div>

      <div className="flex items-center mb-2 leading-3 gap-5 border-b-2 border-gray-300 active:border-gray-900 py-2 px-2">
        <ImLocation />
        <div>
          <h4 className="text-lg font-medium">563/11-A</h4>
          <p className="text-xs font-base text-gray-500">
            {props.ride?.pickup}
          </p>
        </div>
      </div>
      <div className="flex items-center mb-2 leading-3 gap-5 border-b-2 border-gray-300 active:border-gray-900 py-2 px-2">
        <ImLocation2 />
        <div>
          <h4 className="text-lg font-medium">563/11-A</h4>
          <p className="text-xs font-base text-gray-500">
            {props.ride?.destination}
          </p>
        </div>
      </div>
      <div className="flex items-center mb-6 leading-3 gap-5 border-b-2 border-gray-300 active:border-gray-900 py-2 px-2">
        <MdPayment />
        <div>
          <h4 className="text-lg font-medium">₹{props.ride?.fare}</h4>
          <p className="text-xs font-base text-gray-500">Cash Cash</p>
        </div>
      </div>
      <form onSubmit={submitHandler}>
        <h2 className="text-xl font-semibold text-center mb-2">Enter OTP</h2>
        <input value={otp} onChange={(e) => setOtp(e.target.value)} type="text" className='bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-3' placeholder='Enter OTP' />

        <button className='w-full mt-5 text-lg flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg'>Confirm</button>
        <button
          onClick={() => {
            props.setRidePopUpPannel(false);
            props.setAcceptRidePopUpPannel(false);
          }}
          className="w-full rounded-xl px-8 py-4 bg-red-600 mt-4 text-white"
        >
          Ignore
        </button>
      </form>
    </div>
  );
};

export default AcceptRidePannel;
