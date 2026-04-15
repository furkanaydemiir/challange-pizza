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
        <div className='size-dough-container'>
            <div className='size-section'>
                <h4 className='section-title'>
                    Boyut Seç <span className='required'>*</span>
                </h4>
                <div className='radio-group'>
                    <label className={`size-label ${size === "S" ? "active" : ""}`}>
                        <input name='size' type="radio" value="S" checked={size === "S"} onChange={handleSizeChange} className='hidden-radio' />
                        S
                    </label>
                    <label className={`size-label ${size === "M" ? "active" : ""}`}>
                        <input name='size' type="radio" value="M" checked={size === "M"} onChange={handleSizeChange} className='hidden-radio' />
                        M
                    </label>
                    <label className={`size-label ${size === "L" ? "active" : ""}`}>
                        <input name='size' type="radio" value="L" checked={size === "L"} onChange={handleSizeChange} className='hidden-radio' />
                        L
                    </label>
                </div>
            </div>

            <div className='dough-section'>
                <h4 className='section-title'>
                    Hamur Seç <span className='required'>*</span>
                </h4>
                <select className='custom-select' value={dough} onChange={handleDoughChange}>
                    <option value="" disabled>--Hamur Kalınlığı Seç--</option>
                    <option value="İnce">İnce</option>
                    <option value="Orta">Orta</option>
                    <option value="Kalın">Kalın</option>
                </select>
            </div>
        </div>
    )
}

export default SizeSelection