import React, { useEffect, useState } from 'react'
import '../css/OrderOptions.css'
function OrderOptions() {

    const [size, setSize] = useState("")
    const [dough, setDough] = useState("")
    const [ingredients,setIngredients] = useState([])
    const handleSizeChange = (e) => {
        setSize(e.target.value)
    }
    const handleDoughChange = (e) =>{
        setDough(e.target.value)
    }
   const handleIngredient = (e)=>{
      setIngredients(e.target.value)
      
   }
    useEffect(()=>{
     console.log(dough,size)
    },[dough,size])
    return (
        <form className='order-form'>
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
                    <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
                </div>
                <div className='material-selection'>
                    <div className='flex-column'>
                        {/* Bu kısım düzeltilecek malzeme içeriği array haline getirilip maple döneceğim. */}
                        <label>
                            <input type="checkbox" value={ingredients} onChange={handleIngredient} /><span>Pepperoni</span>
                        </label>
                        <label>
                            <input type="checkbox" /><span>Tavuk Izgara</span>
                        </label> <label>
                            <input type="checkbox" /><span>Mısır</span>
                        </label> <label>
                            <input type="checkbox" /><span>Sarımsak</span>
                        </label> <label>
                            <input type="checkbox" /><span>Ananas</span>
                        </label>

                    </div>
                    <div className='flex-column'>
                        <label>
                            <input type="checkbox" /><span>Sosis</span>
                        </label>
                        <label>
                            <input type="checkbox" /><span>Soğan</span>
                        </label> <label>
                            <input type="checkbox" /><span>Sucuk</span>
                        </label> <label>
                            <input type="checkbox" /><span>Biber</span>
                        </label> <label>
                            <input type="checkbox" /><span>Kabak</span>
                        </label>

                    </div>
                    <div className='flex-column'>
                        <label>
                            <input type="checkbox" /><span>Kanada Jambonu</span>
                        </label>
                        <label>
                            <input type="checkbox" /><span>Pastırma</span>
                        </label>
                        <label>
                            <input type="checkbox" /><span>Jalepeno</span>
                        </label>
                        <label>
                            <input type="checkbox" /><span>Mantar</span>
                        </label>
          
                    </div>
                </div>
            </fieldset>
            <fieldset className='order-note'>
               
            </fieldset>
        </form>
    )
}

export default OrderOptions