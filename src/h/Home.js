// import React from 'react'
import { Outlet } from 'react-router-dom'
// import Header from '../../components/Header'
// import Sidebar from '../../components/Sidebar'
import { useEffect, useState } from "react";
import "./Home.scss"
export default function Home() {
  return (
    <div className="home">
      Hello World!
      {/* <div className="home-sidebar">
      <Sidebar/>
      </div>
      <div className="home-body">
      <Header/>
      <Outlet/> */}
      {/* </div> */}
    </div>
  )
}
