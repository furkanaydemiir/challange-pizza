import React from 'react'
import '../../css/OrderOptionComponentsCSS/orderNote.css'
function OrderNote({name,setName,note,setNote}) {

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleNoteChange = (e) => {
        setNote(e.target.value)
    }
    return (
        <fieldset className='order-note'>
            <h4 className='h4-note'>Sipariş Notu</h4>
            <input type='text'  onChange={handleNameChange} className='order-input' placeholder='Lütfen İsiminizi Girin (Zorunlu)' />
            <input type="text" value={note} onChange={handleNoteChange} className='order-input' placeholder='Siparişinize eklemek istediğiniz bir not var mı?' />
        </fieldset>
    )
}

export default OrderNote