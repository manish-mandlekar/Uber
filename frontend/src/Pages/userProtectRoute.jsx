import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { userContextData } from '../Context/UserContext'
import axios from 'axios'


const userProtectRoute = ({children}) => {
  const [isLoading, setIsLoading] = useState('')
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const {user , setUser} = React.useContext(userContextData)
    useEffect(() => {
        if(!token){
            navigate('/user-login')
        }
        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
          headers:{
            Authorization:`Bearer ${token}`
          }
        }).then(response=>{
          if(response.status == 200){
            setUser(response.data)
            setIsLoading(false)
          }
        })
        .catch(err=>{
          console.log(err);
          localStorage.removeItem('token')
          navigate('/user-login')
        })
    }, [token]);
 
    if(isLoading){
      return <div>Loading....</div>
     }
  return (
    <>
      {children}
    </>
  )
}

export default userProtectRoute
