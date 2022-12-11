import {useState} from 'react';

// made to learn functional component

const ListItem = () =>{
    const [value,setValue] = useState(0);
    const increaseValue = ()=>{
        setValue(prevValue=>prevValue+1);
    }
    return(
        <>
            <p>{value}</p>
            <button onClick={increaseValue}>set Value</button>
        </>
    )
}

export default ListItem;