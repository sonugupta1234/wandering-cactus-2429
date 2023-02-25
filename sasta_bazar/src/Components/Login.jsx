import { useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import {  authstatus, getdata } from '../Redux/AuthReducer/action'
import { Navbar } from './Navbar'

export const Login = () => {

    const userdata=useSelector((store)=>store.AuthReducer.userdata)
    
    console.log(userdata)
    const toast=useToast()
    const toast2=useToast()
    const dispatch=useDispatch()
    const location=useLocation()

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        let new_data=userdata.find((item)=>item.email===email && item.password===password)

        if(new_data){
         
        //   console.log(isAuth)
          toast({
            title: 'Login Successfull',
            description: "Logged In as Sonu Gupta",
            position: 'top',
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
          dispatch(authstatus) .then(()=>{
            navigate(location.state, {replace: true})
          })
        //   return navigate(location.search, replace)
        }else{
            toast2({
                title: 'Invalid User',
                position: 'top',
                status: 'error',
                duration: 5000,
                isClosable: true,
              })
        }
          
    }

    useEffect(()=>{
        dispatch(getdata)
    },[])
  return (
    < >
        
        <Navbar />
        
        <div style={{ width: "100%",marginTop: "150px", zIndex: "1", position: "fixed"}}>
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
          <label>Email </label>
          <input type="text" style={{width: "30%", height: "30px"}} placeholder='email' onChange={(e)=>setEmail(e.target.value)}/><br/>
          <label>Password</label>
          <input type="password" style={{width: "30%", height: "30px", marginTop: "12px"}} placeholder='password' onChange={(e)=>setPassword(e.target.value)}/><br/>
          <button type="submit" style={{backgroundColor: "teal", marginTop: "10px"}}>Submit</button>
        </form>
        </div>
        

    </>
  )
}
