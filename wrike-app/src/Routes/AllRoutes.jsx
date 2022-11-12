import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../Components/Home/Home'

import Features from '../Components/Features/Features'

import Resources from '../Components/Resources/Resources'

import Whywrike from '../Components/WhyWrike/Whywrike'
import Signup from '../Components/signuplogin/Signup'
import PrivateRoute from '../Components/PrivateRoute/PrivateRoute'



const AllRoutes = () => {
    return (
        <div>
            <Routes>
            
               <Route element={<PrivateRoute/>} >
                <Route path='/' element={<Home />} />
                <Route path='/resources' element={<Resources />} />
                <Route path='/Whywrike' element={<Whywrike />} />
                <Route path='/features' element={<Features />} />
                </Route>

                <Route path='/signup' element={<Signup />} />
            </Routes>
        </div>
    )
}

export default AllRoutes
