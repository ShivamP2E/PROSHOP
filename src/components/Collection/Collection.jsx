import React from 'react'
import Item from '../Item/Item'
import all_product from '../Assets/all_product'
import './Collection.css'

const Collection = () => {
  return (
    <div className='collection'>
        {
            all_product.map((item,i) =>{
                return <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price}/>
            })
        }

    </div>
  )
}

export default Collection