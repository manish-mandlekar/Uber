import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { userContextData } from "../Context/UserContext";

const UserLogin = () => {
  const {user,setUser} = useContext(userContextData)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();


  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    }
    
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData)
    if(response.status === 200){
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token',data.token)
      navigate('/home')
    }
    setEmail("");
    setPassword("");
  }
  
  return (
    <div className="w-full h-screen px-6 py-5 flex flex-col justify-between ">
      <div>
        <img
          src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"
          className="w-14 mb-5"
          alt=""
        />
        <form
          onSubmit={(e) => {
           submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border rounded w-full px-2 py-3 bg-[#eeeeee] mb-2 placeholder:text-base"
            type="email"
            placeholder="youremail@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="border rounded w-full px-2 py-3 bg-[#eeeeee] placeholder:text-base"
            type="password"
            placeholder="password"
          />
          <button className="w-full bg-black text-white mt-3 px-2 py-3 rounded text-xl font-normal">
            Login
          </button>
        </form>
        <p className="text-center mt-2 font-normal text-l">
          New here?{" "}
          <Link to="/user-signup" className="text-blue-500">
            Create new Account
          </Link>{" "}
        </p>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="flex items-center justify-center w-full bg-[#10b461] text-white px-2 py-3 rounded text-xl font-normal"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
