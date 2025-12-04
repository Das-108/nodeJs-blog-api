import React from 'react'
import { Outlet } from 'react-router-dom'

const ProtectedRoute = () => {

    const token = localStorage.getItem('token')

    if(token){
        return <Outlet />
    }

    return <Navigate to="/loginpage" replace />  
}

export default ProtectedRoute