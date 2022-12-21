import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    const auth=localStorage.getItem("user");

  return auth?
    <Outlet/>:<Navigate to='/signup'/>
  
}

export default PrivateRoute
