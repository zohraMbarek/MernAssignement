import { useState } from "react"

const DeleteForm=(props)=>{
    const {taskList}=props
    const[checkeditems,setCheckeditems]=useState([])
    const addChecked=(itm,i)=>
    { 
    itm.comp=true;
    setCheckeditems([...checkeditems,i])
    console.log("le checked items sont:  "+checkeditems)
    }
    const updateStyle = (i) => {
        if (i.comp===true)
        return "checked";
        else
        return "nonchecked";
        
      }
   

    const submitHandler=(e)=>{
        e.preventDefault()
        // taskList.map((item,index)=>
        // {if(item.completed===true) {
        //     taskList.
        // }})
        const nondonetasks = taskList.filter( t => t.comp===false );
        console.log(nondonetasks)
        
    }
   

    return(
        <div className="deletestyle">
            <form onSubmit={submitHandler}>
               <div className="main">
                <div className="tasks">
                {
                taskList.map((item,index)=>
                <div key={index}>
                <input type="checkbox"  onChange={e=>addChecked(item,index)} />
                <label className={`${ updateStyle(item) }`}>{item.text_task}</label> 
                </div>
                )
                }
        </div>
           <div className="del"> <button className="delbtn">Delete</button></div>
           </div>
            </form>
        </div>
    )





}
export default DeleteForm;