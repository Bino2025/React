import React, { useCallback, useState } from 'react'
import Child from './Child';

const Parent = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState(" ");

    // useCallback -> memoizes the function
    const handleChildClick = useCallback(() => {
        alert("child button clicked!");
    }, []);
    return (
        <div 
        style={{
             padding: "20px", 
             border: "2px solid #333",
             width: "350px" }}>
            <h2>Parent Component</h2>

            <p>Count: {count}</p>

            <button onClick={() => setCount(count + 1)}>
                Increase Count
            </button>

            <br /><br />

            <input
                type="text"
                placeholder="Type something..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <Child onClick={handleChildClick} />
        </div>
    );
};


export default Parent
