import React from "react";
import { Route, Routes } from "react-router-dom";
import Start from "./Pages/Start";
import UserLogin from "./Pages/UserLogin";
import UserSignup from "./Pages/UserSignup";
import CaptainLogin from "./Pages/CaptainLogin";
import CaptainSignup from "./Pages/CaptainSignup";
import Home from "./Pages/Home";
import UserProtectRoute from "./Pages/userProtectRoute";
import UserLogout from "./Pages/UserLogout";
import CaptainHome from "./Pages/CaptainHome";
import CaptainLogout from "./Pages/CaptainLogout";
import CaptainProtectWrapper from "./Pages/CaptainProtectWrapper";
import Riding from "./Pages/Riding";
import CaptainRiding from "./Pages/CaptainRiding";


const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/riding" element={<Riding />} />
        <Route path="/user-signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/Captain-riding"  element={<CaptainRiding/>} />
        <Route
          path="/home"
          element={
            <UserProtectRoute>
              <Home />
            </UserProtectRoute>
          }
        />
        <Route
          path="/users/logout"
          element={
            <UserProtectRoute>
              <UserLogout />
            </UserProtectRoute>
          }
        />
        <Route
          path="/captain-home"
          element={
            <CaptainProtectWrapper>
              <CaptainHome />
            </CaptainProtectWrapper>
          }
        />
        <Route
          path="/captain/logout"
          element={
            <CaptainProtectWrapper>
              <CaptainLogout />
            </CaptainProtectWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
