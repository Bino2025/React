import React from 'react'
import './details.css'
import { useParams } from 'react-router-dom'
import { products } from './Data/product';

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id)); //if number, use Number(). else, just p.

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Product not found</h2>
  }
  return (
    <div className='details-container'>
      {/* left */}
      <div>
        <img src={product.image}
          alt={product.title}
          className='details-image' />
        <div className="details-thumbnails">
          {product.gallery?.map((img, i) => (
            <img src={img}
              className='details-thumb'
              key={i}></img>
          ))}

        </div>
      </div>
      {/* right */}
      <div>
        <h1 className='details-title'>
          {product.title}
        </h1>
        <div>
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < product.rating ? "star filled" : "star"}>★</span>
          ))}
        </div>
        <p className="details-description">{product.description}</p>
        <div className="details-price-row">
          <span className="details-new-price">₹ {product.Price}</span>
          {product.oldPrice && (
            <span className="details-old-price">
              ₹{product.oldPrice}
            </span>
          )}
        </div>
        <button className="details-btn">
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default ProductDetails