import React from 'react'

const Child = React.memo(({ onClick }) => {
    console.log("Child rendered");

    return (
        <div style={{ marginTop: "20px" }}>
            <h3>Child Component</h3>
            <button onClick={onClick}>Child Button</button>
        </div>
    );
});



export default Child
