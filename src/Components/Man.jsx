import { useState } from "react";
import productsData from "./db.json"
import style from "./man.module.css"
import { Link } from "react-router-dom";
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
            <li><a href="">Electronics</a>
              <ul>
                <div id={style.dropcontent}>
                  <li> <a href="">Mobile</a></li>
                <li><a href="">Mobile Accessories</a></li>
                <li><a href="">Laptops</a></li>
                <li><a href="">Laptops Accessories</a></li>
                <li><a href="">Televisions</a></li>
                <li><a href="">Featured</a></li>
               
                </div>
              </ul>
            </li>
            <li><a href="">Tv & Appliences</a>
            <ul>
                <div id={style.dropcontent}>
                <li> <a href="">Television</a></li>
                <li><a href="">Washing Machine</a></li>
                <li><a href="">Kitchen Appliances</a></li>
                <li><a href="">Small Home Appliances</a></li>
                <li><a href="">Smart TV</a></li>
                <li><a href="">Buying Guides</a></li>
                </div>
              </ul>
            </li>
            <li><a href="">Men</a>
            <ul>
                <div id={style.dropcontent}>
                <li> <a href="">Footwear</a></li>
                <li><a href="">Clothing</a></li>
                <li><a href="">Winter Wear</a></li>
                <li><a href="">Casual Wear</a></li>
                <li><a href="">Watches</a></li>
                <li><a href="">Smart Watches</a></li>
                </div>
              </ul>
            </li>
            <li><a href="">Women</a>
            <ul>
                <div id={style.dropcontent}>
                <li> <a href="">Clothing</a></li>
                <li><a href="">Ethnic Wear</a></li>
                <li><a href="">Traditional Wear</a></li>
                <li><a href="">Footwear</a></li>
                <li><a href="">Beauty & Grooming</a></li>
                <li><a href="">Featured</a></li>
                </div>
              </ul>
            </li>
            <li> <a href="">Home & Furniture</a>
            <ul>
                <div id={style.dropcontent}>
                <li> <a href="">Kitchen Cookware</a></li>
                <li><a href="">Furniture Top Offers</a></li>
                <li><a href="">Furnishing</a></li>
                <li><a href="">Sofas</a></li>
                <li><a href="">Home Decor</a></li>
                <li><a href="">Certified Furniture</a></li>
                </div>
              </ul>
            </li>
            <li>  <a href="">Sports, Books</a>
            <ul>
                <div id={style.dropcontent}>
                <li> <a href="">Sports</a></li>
              
                <li><a href="">Food Essentials</a></li>
                <li><a href="">Books</a></li>
                <li><a href="">Auto Accessories</a></li>
                <li><a href="">Music</a></li>
                <li><a href="">Gaming</a></li>
                </div>
              </ul>
            </li>
            <li><a href="">Offer Zone</a></li>
        </ul>
    </div>
   
    <ul>
      {productsData.map((product) => (
        <div key={product.id}>
          
            <div id={style.mainlistcontainer}>
            
           <div id={style.productlist}>
           <div id={style.imagecontainer}><img  src={product.image} alt=""  /></div>
          
          <div id={style.listcontainer}>
            <div id={style.listbox}>
            <li><strong>{product.name}</strong></li>
            <li>{product.ram}</li>
            <li>{product.rom}</li>
            <li>{product.camera}</li>
            <li>{product.processor}</li>
              
            
          <button id={style.addbtn} onClick={() => addToCart(product)}><Link to={`/shoppingcart/${product.id}`}><i class="fa-solid fa-cart-shopping"></i>Add To Cart</Link></button>
          <button  id={style.buybtn}> <a href=""><i class="fa-solid fa-bolt"></i> Buy Now</a></button>
            </div>
            <div id={style.pricebox}>

            </div>
          </div>
           </div>
            </div>
        </div>
      ))}
    </ul>
    
    
    {/* <h2>Shopping Cart</h2>
    <ul>
      {cart.map((item) => (
        <li key={item.id}>
          {item.name} - ${item.price}
        </li>
      ))}
    </ul> */}
  </div>
  )
}

export default Man