import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import '../css/layout.css'

function Layout() {
  return (
    <div className="app-container"> 
        <main className="main-content"> 
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default Layout