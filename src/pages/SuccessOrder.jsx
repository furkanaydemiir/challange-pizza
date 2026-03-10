import React from 'react'
import '../css/successOrder.css'
import logo from '../../images/iteration-1-images/logo.svg'
function SuccessOrder() {
  return (
    <div className='success-container'>
      <div className='logo-div'>
      <img src={logo} alt="teknolojikyemeklerlogosu" />
      </div>
      <div className='cs'>
        <span>TEBRİKLER!</span>
        <span>SİPARİŞİNİZ ALINDI!</span>
      </div>
    </div>
  )
}

export default SuccessOrder