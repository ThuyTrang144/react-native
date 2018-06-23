import React, {Component} from 'react'
import './Product.css'

const Product = (props) => {
  return (
    props.products.map(p => (
      <div key = {p.id}>
       <h3>{p.name}</h3>
       <p>{p.price}</p>
     </div>
    ))
  )
}

export default Product
