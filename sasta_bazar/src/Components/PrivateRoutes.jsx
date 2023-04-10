import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRoutes = ({children}) => {
   const  isAuth=useSelector((store)=>store.AuthReducer.isAuth)
   const location=useLocation()

   if(!isAuth){
    return <Navigate state={location.pathname } to={"/login"}  replace />
   }

   return children
}
