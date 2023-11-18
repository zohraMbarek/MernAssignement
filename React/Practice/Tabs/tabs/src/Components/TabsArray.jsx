import React, { useState } from "react";
const TabsArray=(props)=>
{
const{tab}=props;
const [clicked,setCliked]=useState(false)
const [selectedIndex, setSelectedIndex]=useState()

const onClickHandler=(e, value,i)=>{
e.preventDefault();
props.dis(value);
setCliked(true)
setSelectedIndex(i)
}
const tabStyle = (cl,ind) => {
    if (cl===true && selectedIndex===ind)
    return "selectedTab";
    else
    return "nonSelectedTab";
    
  }

return(
    <div >
        {tab.map((item, index)=>
        <div   onClick={ (e) => onClickHandler(e, item.content,index)} className={`tab ${ tabStyle(clicked,index) }`}>{item.label}</div>)}
       {console.log("style:"+tabStyle(clicked))}
    </div>
)
}
export default TabsArray;