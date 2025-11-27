import React from 'react'
import './ProductCard.css'

const ProductCard = ({ product }) => {

  return (
    <div className='product-card'>
      {product.offer && <span className='offer-badge'>{product.offer}</span>}

      <div className='product-image-area'>
        <img src={product.Image} alt=
          {product.title} className='product-image' />
      </div>

      <p className='product-category'>{product.category}</p>

      <h3 className='product-title'>{product.title}</h3>

      <div className='product-rating'>
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i<product.rating ? "star filled" : "star"}>★</span>
        ))}
      </div>

    </div>


  )
}

export default ProductCard
