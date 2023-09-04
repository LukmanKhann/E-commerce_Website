import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import LoginPage from "./Components/LoginPage"
import NavigationBar from "./Components/NavigationBar"
import Man from "./Components/Man"
import ShoppingCart from "./Components/ShoppingCart"
import { CartProvider } from "./Components/CartContext"

const App = () => {
  return (
    <div>
    <CartProvider>
     <BrowserRouter>
   <NavigationBar/>
     <Routes>
     {/* <Route path="/" element ={<LoginPage/>}></Route> */}
    {/* <Route path="/" element = {<NavigationBar/>}></Route> */}
    <Route path="/manproducts" element = {<Man/>}></Route>
    <Route path="/shoppingcart/:id" element = {<ShoppingCart/>}></Route>
     </Routes>

     </BrowserRouter>
     </CartProvider>
    </div>
  )
}

export default App