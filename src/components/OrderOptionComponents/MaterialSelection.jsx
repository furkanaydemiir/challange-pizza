import React from 'react'
import '../../css/OrderOptionComponentsCSS/MaterialSelection.css'
import { toast } from 'sonner'

function MaterialSelection({ingredientState,setIngredientState}) {
    const ingredients = ["Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Domates", "Mısır", "Mantar", "Jalepeno", "Sarımsak", "Biber", "Turşu", "Ananas", "Kabak", "Pastırma"]

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

    return (
        <fieldset className='material-selector'>
            <div className='material-selection-title'>
                <h4>Ek Malzemeler</h4>
                <p style={{ color: "grey" }}>En fazla 10 malzeme seçebilirsiniz. 5₺ (En az 4 malzeme seçmelisiniz.)</p>
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
    )
}

export default MaterialSelection