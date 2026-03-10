import React from 'react'
import OrderPizzaHeader from '../components/OrderPizzaHeader'
import OrderPizzaMain from '../components/OrderPizzaMain'
import '../css/orderpizza.css'
function OrderPizza() {
  return (
    <div className='orderContainer'>
      <OrderPizzaHeader/>
      <OrderPizzaMain/>
    </div>
  )
}

export default OrderPizza