import { useParams } from "react-router-dom"
import productData from "./db.json"
import style from "./shoppingCart.module.css"
import { useState } from "react"
import { useCart } from "./CartContext"
const ShoppingCart = () => {
    const {id} = useParams()
    const [cart,removeFromCart] = useState()
    const selectProduct = productData.find((product)=> product.id === parseInt(id,10))

    
    if(!selectProduct){
        return <h3>product not found with this id</h3>
    }

    
  


  return (
    <div id={style.mainbox}>
      <div id={style.box1}>
        <div id={style.box2}>
      <div id={style.box3}><img src={selectProduct.image} alt={selectProduct.name} /></div>
      <div id={style.box4}>
      <li>Name: {selectProduct.name}</li>
      <li>Price: {selectProduct.price}</li>
      <li>Rom: {selectProduct.rom}</li>
      <li>Ram: {selectProduct.ram}</li>
      <li>Cmaera: {selectProduct.camera}</li>
      <li>Processor: {selectProduct.processor}</li>
      <button onClick={()=>{removeFromCart(selectProduct.id)}} >Remove</button>
      
      </div>
      </div>
      <div id={style.box5}></div>
      </div>
    </div>
  )
}

export default ShoppingCart