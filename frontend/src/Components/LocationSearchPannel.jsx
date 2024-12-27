import React from "react";
import { TiLocation } from "react-icons/ti";

const LocationSearchPannel = ({
  suggestions = [], // Default to an empty array
  setPickup,
  setDestination,
  activeField,
  setPannelOpen,
  setVehiclePannel,
}) => {
  const handleSuggestionClick = (suggestion) => {
    const selectedValue = suggestion.description; 
    if (activeField === "pickup") {
      setPickup(selectedValue);
    } else if (activeField === "destination") {
      setDestination(selectedValue);
    }
     
  };

  return (
    <div className="mt-8">
      {Array.isArray(suggestions) && suggestions.length > 0 ? (
        suggestions.map((elem, idx) => (
          <div
            key={idx}
            onClick={() => handleSuggestionClick(elem)}
            className="w-full mb-3 flex items-center justify-start gap-4 active:border-black border-2 p-2 rounded-xl"
          >
            <h5 className="w-12 h-10 rounded-full bg-[#eee] flex items-center justify-center">
              <TiLocation />
            </h5>
            {/* Render the description field */}
            <h4 className="font-medium">{elem.description}</h4>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No suggestions available.</p>
      )}
    </div>
  );
};

export default LocationSearchPannel;
