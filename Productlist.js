import React from 'react'

function Productlist(props) {
    const {products} = props;
  return (
    <div>
        {products.map((product)=>(
            <div>
                <ul>
                {product.no}.
                <li>Name : {product.name}</li>
                <li>Price : {product.price}</li>
                <li><img src={product.imageUrl} style={{height:"75px",weight:"50px"}} alt={product.name}/></li>
                </ul>
            </div>
        ))}
    </div>
  )
}

export default Productlist
