import React, { useContext, useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useGSAP } from "@gsap/react";
import axios from "axios";
import gsap from "gsap";
import { SocketContext } from '../Context/SocketContext';
import { userContextData } from '../Context/UserContext';
import LocationSearchPannel from "../Components/LocationSearchPannel";
import VehiclePannel from "../Components/VehiclePannel";
import ConfirmRidePannel from "../Components/ConfirmRidePannel";
import LookingForDriver from "../Components/LookingForDriver";
import WaitingForDriver from "../Components/WaitingForDriver";
import { useNavigate } from 'react-router-dom';
import LiveTracking from "../Components/LiveTracking";
const Home = () => {
  
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [pannelOpen, setPannelOpen] = useState(false);
  const [vehiclePannel, setVehiclePannel] = useState(false);
  const [confirmRidePannel, setConfirmRidePannel] = useState(false);
  const [lookingForRidePannel, setLookingForRidePannel] = useState(false);
  const [waitingForDriverPannel, setWaitingForDriverPannel] = useState(false);
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [activeField, setActiveField] = useState(null);
  const [ vehicleType, setVehicleType ] = useState(null)
  const [fare, setFare] = useState({});
  const pannelRef = useRef(null);
  const closePannelRef = useRef(null);
  const vehiclePannelRef = useRef(null);
  const confirmRidePannelRef = useRef(null);
  const LookingForRideRef = useRef(null);
  const WaitingForDriverRef = useRef(null);
  const [ ride, setRide ] = useState(null)
  const navigate = useNavigate()

    const { socket } = useContext(SocketContext)
    const { user } = useContext(userContextData)
  
    useEffect(() => {
      socket.emit("join", { userType: "user", userId: user._id })
  }, [ user ])

  socket.on('ride-confirmed', ride => {
      setVehiclePannel(false)
      setWaitingForDriverPannel(true)
      setRide(ride)
  })
  socket.on('ride-started', ride => {
    console.log("ride")
    setWaitingForDriverPannel(false)
    navigate('/riding', { state: { ride } }) // Updated navigate to include ride data
})
  const handlePickupChange = async (e) => {
    setPickup(e.target.value);

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,
        {
          params: { input: e.target.value },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setPickupSuggestions(response.data);
    } catch {}
  };
  const handleDestinationChange = async (e) => {
    setDestination(e.target.value);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,
        {
          params: { input: e.target.value },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setDestinationSuggestions(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  useGSAP(
    function () {
      if (pannelOpen) {
        gsap.to(pannelRef.current, {
          height: "70%",
          padding: 24,
          opacity: 1,
        });
        gsap.to(closePannelRef.current, {
          opacity: "1",
        });
      } else {
        gsap.to(pannelRef.current, {
          height: "0%",
          padding: 0,
          opacity: 0,
        });
        gsap.to(closePannelRef.current, {
          opacity: "0",
        });
      }
    },
    [pannelOpen]
  );
  useGSAP(
    function () {
      if (vehiclePannel) {
        gsap.to(vehiclePannelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePannelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePannel]
  );
  useGSAP(
    function () {
      if (confirmRidePannel) {
        gsap.to(confirmRidePannelRef.current, {
          transform: "translateY(0)",
        });
        setVehiclePannel(false);
      } else {
        gsap.to(confirmRidePannelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePannel]
  );
  useGSAP(
    function () {
      if (lookingForRidePannel) {
        gsap.to(LookingForRideRef.current, {
          transform: "translateY(0)",
        });
        setVehiclePannel(false);
      } else {
        gsap.to(LookingForRideRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [lookingForRidePannel]
  );
  useGSAP(
    function () {
      if (waitingForDriverPannel) {
        gsap.to(WaitingForDriverRef.current, {
          transform: "translateY(0)",
        });
        setVehiclePannel(false);
      } else {
        gsap.to(WaitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriverPannel]
  );
  async function findTrip() {
    setVehiclePannel(true);
    setPannelOpen(false);
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/rides/get-fare`,
      {
        params: { pickup, destination },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    
    setFare(response.data);
  }
  async function createRide() {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`, {
        pickup,
        destination,
        vehicleType
    }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })


}
  return (
    <div className="relative w-full h-full overflow-hidden">
      <img
        className="w-16 absolute top-6 left-6"
        src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg"
        alt=""
      />
      <div className="w-screen h-screen ">
      <LiveTracking />
      </div>
      <div className=" absolute top-0 h-screen w-full flex flex-col justify-end">
        <div className="w-full p-3 h-[30%] bg-white relative">
          <h4 className="text-2xl font-semibold mb-2">Find a trip</h4>
          <h5
            onClick={() => {
              setPannelOpen(false);
            }}
            ref={closePannelRef}
            className="absolute opacity-0 top-5 right-5"
          >
            <IoIosArrowDown />
          </h5>
          <div className="line w-1 rounded-full absolute left-6 top-20 h-16 bg-gray-600 "></div>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              onClick={() => {
                setPannelOpen(true);
                setActiveField("pickup");
              }}
              value={pickup}
              onChange={handlePickupChange}
              type="text"
              className="px-8 py-4 rounded-lg bg-[#eeeeee] w-full"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => {
                setPannelOpen(true);
                setActiveField("destination");
              }}
              value={destination}
              onChange={handleDestinationChange}
              type="text"
              className="px-8 py-4 rounded-lg bg-[#eeeeee] w-full mt-3"
              placeholder="Enter your destination"
            />
          </form>
          <button
            onClick={findTrip}
            className="w-full rounded-lg bg-black text-white px-4 py-2 mt-4"
          >
            find trip
          </button>
        </div>
        <div ref={pannelRef} className="bg-white h-[0%] opacity-0 w-full">
          <LocationSearchPannel
            suggestions={
              activeField === "pickup"
                ? pickupSuggestions
                : destinationSuggestions
            }
            setPickup={setPickup}
            setDestination={setDestination}
            activeField={activeField}
            setPannelOpen={setPannelOpen}
            setVehiclePannel={setVehiclePannel}
          />
        </div>
      </div>
      <div
        ref={vehiclePannelRef}
        className="fixed w-full bg-white bottom-0 p-2 translate-y-full"
      >
        <VehiclePannel
        fare={fare}
        selectVehicle={setVehicleType}
          setVehiclePannel={setVehiclePannel}
          setConfirmRidePannel={setConfirmRidePannel}
        />
      </div>
      <div
        ref={confirmRidePannelRef}
        className="fixed overflow-hidden w-full bg-white bottom-0 p-2 translate-y-full"
      >
        <ConfirmRidePannel
        fare={fare}
        createRide={createRide}
        pickup={pickup}
        destination={destination}
        vehicleType={vehicleType}
          setConfirmRidePannel={setConfirmRidePannel}
          setLookingForRidePannel={setLookingForRidePannel}
        />
      </div>
      <div
        ref={LookingForRideRef}
        className="fixed overflow-hidden w-full bg-white bottom-0 p-2 translate-y-full"
      >
        <LookingForDriver
          fare={fare}
        createRide={createRide}
        pickup={pickup}
        destination={destination}
        vehicleType={vehicleType} setLookingForRidePannel={setLookingForRidePannel} />
      </div>
      <div
        ref={WaitingForDriverRef}
        className="fixed w-full bg-white bottom-0 p-2 "
      >
        <WaitingForDriver
        ride={ride}
        setVehiclePannel={setVehiclePannel}
          setWaitingForDriverPannel={setWaitingForDriverPannel}
          waitingForDriverPannel={waitingForDriverPannel}
        />
      </div>
    </div>
  );
};

export default Home;
