import { createContext, useContext, useState } from "react"

 const CartContext = createContext()
    export const useCart = ()=>{
        return useContext(CartContext)
    }

export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([]) 
     
     const addItemToCart = (product)=>{
setCart([...cart,product])
     }
    const removeFromCart =(productId)=>{
        const updateCart = cart.filter((item)=>item.id !==productId)
        setCart(updateCart)
    }
  return (
    <div>
        <CartContext.Provider value = {{ cart, addItemToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
      
    </div>
  )
}

export default CartContext