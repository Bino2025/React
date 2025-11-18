import React from 'react'
import { FaXbox } from "react-icons/fa";
import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {

  const { id } = useParams(); // useParams is a hook provided by react router.
  return (
    <div>
      <h2> <FaXbox /> Product id : {id} </h2>
    </div>
  )
}

export default ProductDetailPage
