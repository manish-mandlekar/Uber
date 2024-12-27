import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaUser } from "react-icons/fa";
const VehiclePannel = (props) => {
  
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-5">Choose a vehicle</h3>
      <h5 className="absolute right-5 top-5">
        {" "}
        <IoIosArrowDown
          onClick={() => {
            props.setVehiclePannel(false);
          }}
        />
      </h5>
      <div
        onClick={() => {
          props.setConfirmRidePannel(true);
          props.selectVehicle('car')
        }}
        className="flex items-center justify-between p-2 mb-3 border-2 active:border-black bg-gray-100 rounded-xl  gap-2"
      >
        <img
          className="h-10"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="flex font-semibold  gap-2 items-center">
            UberGo{" "}
            <span>
              <FaUser />
            </span>
            <span>4</span>
          </h4>
          <h5 className="font-normal text-sm">2 mins away</h5>
          <p className="text-xs text-gray-600">Affordable Motorcycle rides</p>
        </div>
        <h2 className="text-xl font-semibold">₹{props.fare.car}</h2>
      </div>
      <div  onClick={() => {
          props.setConfirmRidePannel(true);
          props.selectVehicle('motorcycle')
        }} className="flex items-center justify-between p-2 mb-3 border-2 active:border-black bg-gray-100 rounded-xl  gap-2">
        <img
          className="h-10"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="flex font-semibold gap-2 items-center">
            Moto{" "}
            <span>
              <FaUser />
            </span>
            <span>1</span>
          </h4>
          <h5 className="font-normal text-sm">3 mins away</h5>
          <p className="text-xs text-gray-600">Affordable,compact rides</p>
        </div>
        <h2 className="text-xl font-semibold">₹{props.fare.motorcycle}</h2>
      </div>
      <div  onClick={() => {
          props.setConfirmRidePannel(true);
          props.selectVehicle('auto')
        }} className="flex items-center justify-between p-2 mb-3 border-2 active:border-black bg-gray-100 rounded-xl  gap-2">
        <img
          className="h-10"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="flex font-semibold gap-2 items-center">
            UberAuto{" "}
            <span>
              <FaUser />
            </span>
            <span>3</span>
          </h4>
          <h5 className="font-normal text-sm">2 mins away</h5>
          <p className="text-xs text-gray-600">Affordable Auto rides</p>
        </div>
        <h2 className="text-xl font-semibold">₹{props.fare.auto}</h2>
      </div>
    </div>
  );
};

export default VehiclePannel;
