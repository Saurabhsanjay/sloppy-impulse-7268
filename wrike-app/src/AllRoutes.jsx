import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../src/Components/Home/Home'

import Features from '../src/Components/Features/Features'

import Resources from '../src/Components/Resources/Resources'

import Whywrike from './Components/WhyWrike/Whywrike'



const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
               
                <Route path='/resources' element={<Resources />} />
                <Route path='/Whywrike' element={<Whywrike />} />
                <Route path='/features' element={<Features />} />
            </Routes>
        </div>
    )
}

export default AllRoutes
