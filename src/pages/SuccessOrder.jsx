import React, { useEffect, useRef } from 'react'
import '../css/successOrder.css'
import logo from '../../images/iteration-1-images/logo.svg'
import { useLocation } from 'react-router-dom'
function SuccessOrder() {
  const state = useLocation()
  const {count,dough,ingredientState,name,note,size} = state.state || {}
  const ingredients = []
  ingredients.push(state.state)
  console.log(ingredients)
  const ref = useRef()
  console.log(state.state)
  useEffect(()=>{
   ref.current.scrollIntoView({behavior:"smooth"})
  },[])
  
  return (
    <>   
    
     <div ref={ref} className='success-container'>
      <div className='logo-area'>
      <img className='logo' src={logo} alt="teknolojik-yemekler" />
      </div>
      <div className='header'>
      <p className='text'>lezzetin yolda</p>
      <h3 className='title'>SİPARİŞ ALINDI</h3>
      <hr  style={{width:"100%"}}/>
      </div>
      <div className='pizza-identifer'>
        <p>Position Absolute Acı Pizza</p>
      </div>
      <div className='pizza-ingredients'>
      {/* count,dough,ingredientstate,size */}
        {size && <p className='ingredientP'>Boyut: {state.state.size}</p>}
        {dough && <p className='ingredientP'>Hamur: {state.state.dough}</p>}
        {ingredientState && <p className='ingredientP'>Ek Malzemeler: {state.state.ingredientState.join(', ')}</p>}
      
      </div>
      <div className='order-review'>
          <div className='order'>
            <p>Sipariş Toplamı</p>
            <div className='choice'>
             <p>Seçimler</p>
             <p className='second'>{ingredientState.length*5}₺</p>
            </div>
             <div className='choice'>
             <p>Toplam</p>
             <p className='second'>{(count*85.50)+((ingredientState.length)*5)}₺</p>
            </div>
          </div>
      </div>
    </div>
    </>

  )
}

export default SuccessOrder 