import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import LoginPage from "./Components/LoginPage";
import NavigationBar from "./Components/NavigationBar";
import Man from "./Components/Man";
import ShoppingCart from "./Components/ShoppingCart";
import { CartProvider } from "./Components/CartContext";
import Checkout from "./Components/Checkout";
import Test from "./Components/Test";

const App = () => {
  return (
    <div>
      <CartProvider>
        <BrowserRouter basename="/E-commerce_Website">
          <NavigationBar />
          <Routes>
            <Route path="/" element = {<Home/>}></Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/manproducts" element={<Man />} />
            <Route path="/shoppingcart/:id" element={<ShoppingCart />} />
            <Route path="/checkout/:totalAmount" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
      {/* <Test /> */}
   
    </div>
  );
};

export default App;
