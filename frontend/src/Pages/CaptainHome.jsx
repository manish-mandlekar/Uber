import React, { useContext, useEffect, useState } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CaptainDetails from "../Components/CaptainDetails";
import RidePopUp from "../Components/RidePopUp";
import AcceptRidePannel from "../Components/AcceptRidePannel";
import { SocketContext } from "../Context/SocketContext";
import { captainDataContext } from "../Context/CaptainContext";
import axios from "axios";
import LiveTracking from "../Components/LiveTracking";
const CaptainHome = () => {
  const [ridePopUpPannel, setRidePopUpPannel] = useState(false);
  const [AcceptRidePopUpPannel, setAcceptRidePopUpPannel] = useState(false);
  const ridePopUpPannelRef = useRef(null);
  const AcceptridePopUpPannelRef = useRef(null);
  const { socket } = useContext(SocketContext);
  const { captain } = useContext(captainDataContext);
  const [ ride, setRide ] = useState(null)
  useEffect(() => {
    socket.emit("join", {
      userId: captain._id,
      userType: "captain",
    });
    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log({userId: captain._id,
            location: {
              ltd: position.coords.latitude,
              lng: position.coords.longitude,
            },});
          
          socket.emit("update-location-captain", {
            userId: captain._id,
            location: {
              ltd: position.coords.latitude,
              lng: position.coords.longitude,
            },
          });
        });
      }
    };

    // const locationInterval = setInterval(updateLocation, 10000)
    updateLocation();
  }, []);
  socket.on("new-ride", (data) => {
    setRide(data);
    setRidePopUpPannel(true);
  });

  async function confirmRide() {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/rides/confirm`,
      {
        rideId: ride._id,
        captainId: captain._id,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    setRidePopUpPannel(false);
    setAcceptRidePopUpPannel(true);
  }

  useGSAP(
    function () {
      if (ridePopUpPannel) {
        gsap.to(ridePopUpPannelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ridePopUpPannelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopUpPannel]
  );
  useGSAP(
    function () {
      if (AcceptRidePopUpPannel) {
        gsap.to(AcceptridePopUpPannelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(AcceptridePopUpPannelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [AcceptRidePopUpPannel]
  );
  return (
    <div className="w-screen h-screen ">
      <div className="w-full h-3/5 ">
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
        <LiveTracking />
      </div>
      <div className="h-2/5 w-full ">
        <div>
          <CaptainDetails />
        </div>
      </div>
      <div
        ref={ridePopUpPannelRef}
        className="fixed w-full bg-white bottom-0 p-2 translate-y-full z-10 "
      >
        <RidePopUp
         ride={ride}
              confirmRide={confirmRide}
          setRidePopUpPannel={setRidePopUpPannel}
          setAcceptRidePopUpPannel={setAcceptRidePopUpPannel}
        />
      </div>
      <div
        ref={AcceptridePopUpPannelRef}
        className="fixed w-full bg-white bottom-0 p-2 translate-y-full z-10 "
      >
        <AcceptRidePannel
         ride={ride}
          setRidePopUpPannel={setRidePopUpPannel}
          setAcceptRidePopUpPannel={setAcceptRidePopUpPannel}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
