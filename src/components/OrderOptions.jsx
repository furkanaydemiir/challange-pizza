import React, { useEffect, useState } from 'react'
import '../css/OrderOptions.css'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
function OrderOptions() {
    const navigate = useNavigate()
    const [size, setSize] = useState("")
    const [dough, setDough] = useState("")
    const [ingredientState, setIngredientState] = useState([])
    const [note, setNote] = useState("")
    const [count, setCount] = useState(1)
   
    
   const pizza = count*85.50

    const increment = (e) => {
        e.preventDefault()
        setCount(count => count + 1)
    }
    const decrement = (e) => {
        e.preventDefault()
        setCount(count => count - 1)
    }


    const handleNoteChange = (e) => {
        setNote(e.target.value)
    }
    const handleSizeChange = (e) => {
        setSize(e.target.value)
    }
    const handleDoughChange = (e) => {
        setDough(e.target.value)
    }
    const handleIngredientChange = (e) => {
        const value = e.target.value
        if (ingredientState.includes(value)) {
            setIngredientState(ingredientState.filter(i => i !== value))
        } else {
            if (ingredientState.length == 9) {
                toast.warning("En fazla 10 malzeme seçebilirsin")

            }
            setIngredientState([...ingredientState, value])
        }
    }

    const ingredients = ["Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Domates", "Mısır", "Mantar", "Jalepeno", "Sarımsak", "Biber", "Turşu", "Ananas", "Kabak", "Pastırma"]
    
     const handleSubmit = (e) =>{
        e.preventDefault()
        if(size===""){
            toast.error("Lütfen Boyut Seçimi Yapınız!")
            return
        }else{
            if(dough===""){
                toast.error("Lütfen Hamur Seçimi Yapınız!")
                return
            }
        }
        navigate('/SuccessOrder')
     }

    return (
        <form onSubmit={handleSubmit} className='order-form'>
            <fieldset className='size-selector'>
                <legend className='size-title'>Boyut Seç
                    <span className='required'>*</span>
                </legend>
                <div className='radio-group'>
                    <label>
                        <input name='size' type="radio" value="Küçük" checked={size === "Küçük"} onChange={handleSizeChange} />Küçük
                    </label>
                    <label>
                        <input name='size' type="radio" value="Orta" checked={size === "Orta"} onChange={handleSizeChange} />Orta
                    </label>
                    <label>
                        <input name='size' type="radio" value="Büyük" checked={size === "Büyük"} onChange={handleSizeChange} />Büyük
                    </label>
                </div>

                <div className='dough-selection'>
                    <h4 className='dough-title'>Hamur Seç<span className='required'>*</span></h4>
                    <select value={dough} onChange={handleDoughChange}>
                        <option value="" disabled selected>Hamur Kalınlığı</option>
                        <option>İnce Hamur</option>
                        <option>Orta Hamur</option>
                        <option>Kalın Hamur</option>
                    </select>
                </div>
            </fieldset>
            <fieldset className='material-selector'>
                <div className='material-selection-title'>
                    <h4>Ek Malzemeler</h4>
                    <p style={{color:"grey"}}>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
                    <div className='checkbox-container'>
                        {
                            ingredients.map((ingredient) => (
                                <label className='checkbox-item' key={ingredient}>
                                    <input disabled={ingredientState.length >= 10 && !ingredientState.includes(ingredient)} onClick={handleIngredientChange} className='material' type='checkbox' value={ingredient} /><span>{ingredient}</span>
                                </label>
                            ))
                        }
                    </div>
                </div>
            </fieldset>
            <fieldset className='order-note'>
                <h4>Sipariş Notu</h4>
                <input type="text" value={note} onChange={handleNoteChange} className='order-input' placeholder='Siparişinize eklemek istediğiniz bir not var mı?' />
            </fieldset>
            <fieldset className='order-detail'>
                <div className='pizza-count'>
                    <button onClick={decrement} className='count-button'>-</button>
                    <p className='count'>{count}</p>
                    <button onClick={increment} className='count-button'>+</button>
                </div>
             <div>
                <div className="order-container">
                    <h3>Sipariş Detayı</h3>

                    <div className="row">
                        <span>Seçimler</span>
                        <span>{ingredientState.length*5}.00₺</span>
                    </div>

                    <div className="row sum">
                        <span>Toplam</span>
                        <span>{pizza+(ingredientState.length*5)}₺</span>
                    </div>
                </div>
                <button className='order-button' type='submit' style={{ width: "100%" }}>SİPARİŞ VER</button>
                </div>
            </fieldset>
            
        </form>
    )
}

export default OrderOptions