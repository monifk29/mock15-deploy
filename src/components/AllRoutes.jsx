import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'
import Play from '../pages/Play'
import Score from '../pages/Score'

const AllRoutes = () => {
  return (
   
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/playzone' element={<Play/>}/>
    <Route path='/score' element={<Score/>}/>
    <Route path='/dash' element={<Dashboard/>}/>
   </Routes>
)
  }

export default AllRoutes