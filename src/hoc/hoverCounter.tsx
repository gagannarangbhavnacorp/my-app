import React, { useState } from 'react';
import WithCounter from './withCounter';
const HoverCounter = (props: any) => {
    const {count,increment} = props
   
    return <>
        <p onMouseOver={increment}>Hover me {count}</p>
        
    </>
}

export default WithCounter(HoverCounter);