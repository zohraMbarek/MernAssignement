import React, { useState } from 'react';
    
const ColorForm = (props) => {
    const [color, setColor] = useState("");
    const [dimension, setDimension] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addBox( color,dimension );

        setColor("")
        setDimension("");

    }
    
    return (
        <fieldset>
        <form onSubmit={ handleSubmit }>
            <label>Color</label>
            <input type="text" value={color} onChange={ (e) => setColor(e.target.value) } />
            <label>Dimension</label>
            <input type="number" value={dimension} onChange={ (e) => setDimension(e.target.value) } />
            <input type="submit" value="Add" />
        </form>
        </fieldset>
    )
}
    
export default ColorForm;
