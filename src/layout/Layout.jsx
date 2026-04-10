import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import '../css/layout.css'
// Eğer index.css veya App.css kullanıyorsan ve o sınıfları oraya yazdıysan ekstra bir import'a gerek yok.

function Layout() {
  return (
    <div className="app-container"> {/* Bu sınıfı ekledik */}
        <main className="main-content"> {/* Bu sınıfı ekledik */}
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default Layout