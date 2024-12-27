import React, { useRef, useState } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import FinishRide from "../Components/FinishRidePannel";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link, useLocation } from "react-router-dom";
import LiveTracking from "../Components/LiveTracking";

const CaptainRiding = () => {
    const [finishRidePannel, setFinishRidePannel] = useState(false)
    const finishRidePannelRef = useRef(null)
    const location = useLocation()
    const rideData = location.state?.ride
    useGSAP(
        function () {
          if (finishRidePannel) {
            gsap.to(finishRidePannelRef.current, {
              transform: "translateY(0)",
            });
          } else {
            gsap.to(finishRidePannelRef.current, {
              transform: "translateY(100%)",
            });
          }
        },
        [finishRidePannel]
      );
  return (
    <div className="w-screen h-screen ">
      <div className="w-full h-4/5 ">
        <div className="w-full flex items-center justify-between p-2 absolute top-2 left-0">
          <img
            className="w-16 "
            src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg"
            alt=""
          />
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <IoLogOutOutline />
          </div>
        </div>
        <img
          className="w-full h-full object-cover"
          src="https://raw.githubusercontent.com/MindorksOpenSource/ridesharing-uber-lyft-app/master/assets/nearby-cabs.png"
          alt=""
        />
      </div>
      <div onClick={(e)=>{
        setFinishRidePannel(true)
      }} className="w-full h-1/5 flex items-center justify-center gap-8 rounded-t-lg bg-yellow-400">
        <h4 className="text-xl font-semibold">4KM Away</h4>
        <button className="py-3 px-5 bg-green-600 rounded-lg text-white">
          Complete Ride
        </button>
      </div>
      <div ref={finishRidePannelRef} className="fixed w-full bg-white bottom-0 p-2 translate-y-full z-10 ">
        <FinishRide ride={rideData} setFinishRidePannel={setFinishRidePannel}/>
      </div>
      <div className='h-screen fixed w-screen top-0 z-[-1]'>
                <LiveTracking />
            </div>
    </div>
  );
};

export default CaptainRiding;
