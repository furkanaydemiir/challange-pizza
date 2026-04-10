import React, { useEffect, useRef } from 'react'
import '../css/successOrder.css'
import logo from '../../images/iteration-1-images/logo.svg'
import Deneme from '../deneme/Deneme'
import Footer from '../components/Footer'
import { behavior } from '@testing-library/user-event/dist/cjs/event/behavior/registry.js'
function SuccessOrder() {
  const ref = useRef()
  useEffect(()=>{
   ref.current.scrollIntoView({behavior:"smooth"})
  },[])
  return (
    <>   
    
     <div ref={ref} className='success-container'>
      <Deneme value={"Başarılı Sipariş"}/>
      <div className='logo-div'>
      <img src={logo} alt="teknolojikyemeklerlogosu" />
      </div>
      <div className='cs'>
        <span>TEBRİKLER!</span>
        <span>SİPARİŞİNİZ ALINDI!</span>
      </div>
    </div>
    </>

  )
}

export default SuccessOrder