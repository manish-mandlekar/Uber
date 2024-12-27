import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { captainDataContext } from '../Context/CaptainContext'
import axios from 'axios'

const CaptainProtectWrapper = ({children}) => {
  const [isLoading, setIsLoading] = useState(true)
  const {captain , setCaptain} = React.useContext(captainDataContext)
    const navigate = useNavigate()
    const token  = localStorage.getItem('token')
    useEffect(() => {
      if(!token){
        navigate('/captain-login')
      }
      axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      }).then(Response=>{
        if(Response.status == 200){
          
          setCaptain(Response.data)
          setIsLoading(false)
        }
      })
      .catch(err=>{
        console.log(err);
        localStorage.removeItem('token')
        navigate('/captain-login')
        
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

export default CaptainProtectWrapper
