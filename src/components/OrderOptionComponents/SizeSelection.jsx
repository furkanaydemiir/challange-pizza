import React from 'react'
import '../../css/OrderOptionComponentsCSS/sizeSelection.css'
function SizeSelection({ dough, setDough, size, setSize }) {
    const handleSizeChange = (e) => {
        setSize(e.target.value)
    }
    const handleDoughChange = (e) => {
        setDough(e.target.value)
    }
    return (
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
                    <option value="" disabled>Hamur Kalınlığı</option>
                    <option>İnce Hamur</option>
                    <option>Orta Hamur</option>
                    <option>Kalın Hamur</option>
                </select>
            </div>
        </fieldset>
    )
}

export default SizeSelection