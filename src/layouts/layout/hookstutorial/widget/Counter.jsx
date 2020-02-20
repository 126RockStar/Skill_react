import React, { useState } from 'react';
import { render } from '@testing-library/react';

const Counter = () => {

    const [ value, setValue] = useState(0);

    return(
        <div>
            <h3> Counter Sample </h3>
            <p>
                현재 값은 <b>{value}</b>입니다.
            </p>
            <button onClick = { () => setValue(value+1)}>+1</button>
            <button onClick = { () => setValue(value-1)}>-1</button>
        </div>
    )
}

export default Counter;