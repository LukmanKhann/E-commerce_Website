import { useState } from "react";
import productsData from "./db.json"
import style from "./man.module.css"
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
const Man = () => {
    const [cart, setCart] = useState([]);
  

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // const { cart, addToCart } = useCart();

  
  return (
    <div id={style.maincontainer}>
    <div id={style.dropdownmenu}>
        <ul>
            <li>Electronics</li>
            <li>Electronics</li>
            <li>Electronics</li>
            <li>Electronics</li>
            <li>Electronics</li>
            <li>Electronics</li>
            <li>Electronics</li>
        </ul>
    </div>
   
    <ul>
      {productsData.map((product) => (
        <div key={product.id}>
            <div id={style.mainlistcontainer}>
            
           <div id={style.productlist}>
           <div id={style.imagecontainer}><img  src={product.image} alt=""  /></div>
          
          <div id={style.listcontainer}>
            <li>{product.name}</li>
            <li>{product.ram}</li>
            <li>{product.rom}</li>
            <li>{product.camera}</li>
            <li>{product.processor}</li>
            
          <button onClick={() => addToCart(product)}><Link to={`/shoppingcart/${product.id}`}>Add To Cart</Link></button>
          <button>Buy Now</button>
          </div>
           </div>
            </div>
        </div>
      ))}
    </ul>
    
    
    <h2>Shopping Cart</h2>
    <ul>
      {cart.map((item) => (
        <li key={item.id}>
          {item.name} - ${item.price}
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Man