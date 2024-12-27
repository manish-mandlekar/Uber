import React, { createContext, useState } from "react";

export const userContextData = createContext()

const UserContext = ({ children }) => {
    const [user, setUser] = useState({
        fullname:{
            firstname:'',
            lastname:''
        },
        email:'',
    })
  return (
    <div>
      <userContextData.Provider value={{user , setUser}} >
        {children}
        </userContextData.Provider>
    </div>
  );
};

export default UserContext;
