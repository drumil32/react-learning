import React, { useRef, useState, useEffect } from 'react'

function UseRefExample2() {
    const renders = useRef(0);
    const prevName = useRef('');
    const [name, setName] = useState('');
    useEffect(() => {
        renders.current = renders.current + 1;
        prevName.current = name;console.log(name)
    }, [name]);

    return (
        <div>
            <p>previous name: {prevName.current}</p>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <h1>number of renders {renders.current}</h1>
        </div>
    )
}

export default UseRefExample2