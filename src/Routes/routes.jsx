import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Completed from '../Components/Home/Completed';
import SingleEmployeePage from '../Components/Home/SingleEmployeePage';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Completed />}/>
        <Route path='' element={<SingleEmployeePage />}/>
    </Routes>
  )
}

export default AllRoutes;