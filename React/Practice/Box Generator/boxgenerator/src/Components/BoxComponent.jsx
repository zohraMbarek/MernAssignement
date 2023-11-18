 
import React from 'react';

const BoxComponent = (props) => {
    const {boxes}=props
    return (
        <div>
              {
                boxes.map((item,index)=>
                <div key={index}
                style={{
                    width:item.dimension+"px",
                    height:item.dimension+"px",
                    backgroundColor:item.box_color,
                    display:"inline-block",
                    margin:"15px"
                }}>{item.box_color}</div> 
                ) }
        </div>
    )
}
    
export default BoxComponent;

