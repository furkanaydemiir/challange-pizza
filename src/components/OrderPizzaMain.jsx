import React from 'react'
import '../css/orderPizzaMain.css'
import OrderOptions from './OrderOptions'

function OrderPizzaMain() {
  return (
    <main className='container'>
      <div className='product-info'>
        <p className='product-title'>Position Absolute Acı Pizza</p>
        <div className='product-price'>
          <p className='price'>85.50₺</p>
          <p className='product-point'>4.9</p>
          <p className='number'>(200)</p>
        </div>
        <p className='product-description'>Frontend Dev olarak halen position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli malzemelerle kaplanmış, daha sonra odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir</p>
      </div>
      <OrderOptions/>
    </main>
  )
}

export default OrderPizzaMain