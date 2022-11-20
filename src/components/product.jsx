import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Product = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

  return (
    <div>Product</div>
  )
}

export default Product