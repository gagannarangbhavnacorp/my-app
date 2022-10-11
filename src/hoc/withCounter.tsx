import React, { useState } from 'react';

const WithCounter = (CounterComponent: any) => {

    const WrappedCompnent = (props: any) => {
        const [count, setCount] = useState(0);
        const increment = () => {

            setCount(prev => prev + 1)
        }
        return <CounterComponent count={count} increment={increment} {...props}/>;
    }

    return WrappedCompnent
}

export default WithCounter;