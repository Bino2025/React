import React from 'react'

const Items = () => {

    const fruitsItems = ['apple','mango','banana']

  return (
    <div>
      <ul>
        {fruitsItems.map((itm,index)=>(
            <li>{itm}</li>
        ))}
      </ul>
    </div>
  )
}

export default Items
