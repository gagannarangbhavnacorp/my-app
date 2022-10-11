import React, { useState } from 'react';
import WithCounter from './withCounter';
const ClickCounter = (props: any) => {
    const {count,increment} = props
   
    return <>
        <button onClick={increment}>Click me </button>
        {count}
    </>
}

export default WithCounter(ClickCounter);