import React, { createContext, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { userContextData } from "../Context/UserContext";

const UserSignup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();
  const { user, setUser } = useContext(userContextData);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    };
const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)
if(response.status = 201){
  const data = response.data
setUser(data.user)
localStorage.setItem('token',data.token)
  navigate('/home')
}



    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
  };

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
          <h3 className="text-lg font-medium mb-2">What's your Name</h3>
          <div className="flex gap-2 mb-3">
            <input
              required
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              className="border rounded w-1/2 px-2 py-2 bg-[#eeeeee] placeholder:text-base"
              type="text"
              placeholder="First name"
            />
            <input
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              className="border rounded w-1/2 px-2 py-2 bg-[#eeeeee] placeholder:text-base"
              type="text"
              placeholder="Last name"
            />
          </div>

          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border rounded w-full px-2 py-2 bg-[#eeeeee] mb-4 placeholder:text-base"
            type="email"
            placeholder="youremail@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            value={password}
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="border rounded w-full px-2 py-2 bg-[#eeeeee] placeholder:text-base"
            type="password"
            placeholder="password"
          />
          <button className="w-full bg-black text-white mt-4 px-2 py-2 rounded text-xl font-normal">
         Create Account
          </button>
        </form>
        <p className="text-center mt-2 font-normal text-l">
          Already have a account?{" "}
          <Link to="/user-login" className="text-blue-500">
            Login here
          </Link>{" "}
        </p>
      </div>
      <div>
        <p className="text-[8px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quis
          ipsum quisquam ut dolore tempora, temporibus earum natus molestias
          quod illum quasi aliquid rerum iure eum nobis impedit minus obcaecati.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
