import React, { useContext } from "react";
import { RxTimer } from "react-icons/rx";
import { MdOutlineTimer } from "react-icons/md";
import { LuNotebook } from "react-icons/lu";
import { captainDataContext } from "../Context/CaptainContext";
const CaptainDetails = () => {
  const {captain} = useContext(captainDataContext);
  
  return (
    <div>
      <div className="flex items-center justify-between  p-4 mt-5">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <h3 className="text-xl font-medium capitalize">{captain.fullname.firstname+" "+captain.fullname.lastname}</h3>
        </div>
        <div className="text-center">
          <h4 className="text-xl font-semibold">Earned</h4>
          <p className="text-s font-normal"> ₹295.40</p>
        </div>
      </div>
      <div className="flex items-center justify-between px-10 py-4 mt-4 bg-yellow-300 mx-3 rounded-lg">
        <div className="flex flex-col items-center gap-1">
          <MdOutlineTimer className="scale-[1.7]" />
          <h3 className="text-lg font-medium">10.2</h3>
          <p className="text-xs text-black font-base">Hours Online</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <RxTimer className="scale-[1.7]" />
          <h3 className="text-lg font-medium">10.2</h3>
          <p className="text-xs text-black font-base">Hours Online</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <LuNotebook className="scale-[1.7]" />
          <h3 className="text-lg font-medium">10.2</h3>
          <p className="text-xs text-black font-base">Hours Online</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
