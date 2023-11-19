import { useState } from "react"

const AddForm=(props)=>{
    const[text,setText]=useState('')
    const addHandler=(e)=>{
        e.preventDefault()
        props.addNewTask(text,false)
        setText('')
    }

    return(
        <div className="addstyle">
            <form >
            <input type="text" value={text} onChange={e=>setText(e.target.value)}/>
            <button className="addbtn" onClick={addHandler}>Add</button>
            </form>
        </div>
    )





}
export default AddForm;