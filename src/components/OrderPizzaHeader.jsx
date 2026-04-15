import React, { useEffect, useRef } from 'react'
import '../css/pizzaHeader.css'
import logo from '../../images/iteration-1-images/logo.svg'

function OrderPizzaHeader() {
  useEffect(()=>{
   headerRef.current.scrollIntoView({behavior:"smooth"})
  },[])
  const headerRef = useRef()
  return (
    <header className='orderHeader' >
      <div ref={headerRef} className='headerLogoContainer'>
        <img className='headerLogo' src={logo} alt="" />
        
      </div>
    </header>
  )
}

export default OrderPizzaHeader