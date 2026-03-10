import React from 'react'
import '../css/pizzaHeader.css'
import logo from '../../images/iteration-1-images/logo.svg'

function OrderPizzaHeader() {
  return (
    <header className='orderHeader' >
      <div className='headerLogoContainer'>
        <img className='headerLogo' src={logo} alt="" />
        <div className='subHeader'>
          <p className='mainP'>Ana Sayfa -</p>
          <p className='createP'>Sipariş Oluştur</p>
        </div>
      </div>

    </header>
  )
}

export default OrderPizzaHeader