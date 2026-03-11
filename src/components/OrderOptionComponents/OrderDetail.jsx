import React from 'react'
import '../../css/OrderOptionComponentsCSS/orderDetail.css'
function OrderDetail({ ingredientState,count,setCount }) {
    const increment = (e) => {
        e.preventDefault()
        setCount(count => count + 1)
    }
    const decrement = (e) => {
        e.preventDefault()
        if (count <= 0) {
            return
        }
        setCount(count => count - 1)

    }
    const pizza = count * 85.50
    return (
        <fieldset className='order-detail'>
            <div className='pizza-count'>
                <button onClick={decrement} className='count-button'>-</button>
                <p className='count'>{count}</p>
                <button onClick={increment} className='count-button'>+</button>
            </div>
            <div>
                <div className="order-container">
                    <h4>Sipariş Toplamı</h4>

                    <div className="row">
                        <span>Seçimler</span>
                        <span>{ingredientState.length * 5}.00₺</span>
                    </div>

                    <div className="row sum">
                        <span>Toplam</span>
                        <span>{pizza + (ingredientState.length * 5)}₺</span>
                    </div>
                </div>
                <button className='order-button' type='submit' style={{ width: "100%" }}>SİPARİŞ VER</button>
            </div>
        </fieldset>
    )
}

export default OrderDetail