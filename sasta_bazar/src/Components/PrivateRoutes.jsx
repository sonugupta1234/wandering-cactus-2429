import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRoutes = ({children}) => {
   const  isAuth=useSelector((store)=>store.AuthReducer.isAuth)
   const location=useLocation()

   if(!isAuth){
    return <Navigate to="/login" search={location.pathname} replace />
   }

   return children
}
