import React from 'react'

function RenderingLists() {

    const fruits = ["apple", "banana", "mango"];
    return (
        <div>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </div>
    )
}

export default RenderingLists
