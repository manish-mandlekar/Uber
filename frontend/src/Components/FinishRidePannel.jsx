import React from "react";
import { ImLocation2 } from "react-icons/im";
import { ImLocation } from "react-icons/im";
import { MdPayment } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const FinishRidePannel = (props) => {
  const navigate = useNavigate();

  async function endRide() {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/rides/end-ride`,
      {
        rideId: props.ride._id,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    if (response.status === 200) {
      navigate("/captain-home");
    }
  }

  return (
    <div className="h-content pt-4">
      <h3 className="text-2xl font-semibold mb-4">Finish this Ride!</h3>

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
          <h4 className="text-lg font-medium">h-08 tulsi,parisar</h4>
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

      <button
        onClick={endRide}
        className="flex items-center justify-center w-full rounded-xl px-8 py-4 bg-green-600 text-white"
      >
        Finish Ride{" "}
      </button>

      <p className="text-center text-xs font-medium mt-2">
        Click on finish button if you have done with the payment
      </p>
    </div>
  );
};

export default FinishRidePannel;
