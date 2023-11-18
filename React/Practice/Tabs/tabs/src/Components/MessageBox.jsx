import React from 'react';

const MessageBox=(props)=>{

    const{msg}=props
    return(
        <div className='boxstyle'>
            {msg}
        </div>
    )
}
export default MessageBox;