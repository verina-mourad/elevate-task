import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import backgroundImage from '../../assets/a5157907c99809298ae7939a8960fd8e13c50b76.jpg'

export default function Layoout() {
  return <>
   <div
  className="bg-center bg-cover bg-no-repeat h-screen overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
  <Navbar/>
   
      <Outlet/>
   
    </div>
  </>
}
