import React from 'react'

const RealWorld = () => {

    const Products = [
        {id:'p1', name:'t-shirt'},
        {id:'p2', name:'jeans'},
        
    ]
  return (
    <div>
      <ul>
        {Products.map(prdt=>(
            <li key={prdt.id}>{prdt.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default RealWorld
