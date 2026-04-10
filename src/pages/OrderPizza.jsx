import React from 'react'
import OrderPizzaHeader from '../components/OrderPizzaHeader'
import OrderPizzaMain from '../components/OrderPizzaMain'
import '../css/orderpizza.css'
import Deneme from '../deneme/Deneme'
import Footer from '../components/Footer'
function OrderPizza() {
  return (
    <div className='orderContainer'>
      <Deneme value={"Sipariş Sayfası"}/>
      <OrderPizzaHeader/>
      <OrderPizzaMain/>
      
    </div>
  )
}

export default OrderPizza