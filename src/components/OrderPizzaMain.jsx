import React from 'react'
import '../css/orderPizzaMain.css' 
import OrderOptions from './OrderOptions'
import banner from '../../images/iteration-2-images/pictures/form-banner.png'
function OrderPizzaMain() {
  return (
    <>
    <img className='banner-img' src={banner} alt="" />
      <div className='page-header-line'></div>

      <main className='container'>
        <nav className='breadcrumbs'>
          <a href="#">Anasayfa</a> - <span className='active-crumb'>Sipariş Oluştur</span>
        </nav>

        <div className='product-info'>
          <h1 className='product-title'>Position Absolute Acı Pizza</h1>

          <div className='price-rating-row'>
            <h2 className='price-large'>85.50₺</h2>
            <div className='rating-info'>
              <span className='rating-point'>4.9</span>
              <span className='rating-count'>(200)</span>
            </div>
          </div>

          <p className='product-description'>
            Frontend Dev olarak halen position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli malzemelerle kaplanmış, daha sonra odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.
          </p>
        </div>

        <OrderOptions/>
      </main>

    </>
  )
}

export default OrderPizzaMain