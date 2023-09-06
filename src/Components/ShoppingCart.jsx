import { Link, useNavigate, useParams } from "react-router-dom";
import productData from "./db.json";
import style from "./shoppingCart.module.css";
import { useCart } from "./CartContext"; // Import the useCart hook
import Checkout from "./Checkout";

const ShoppingCart = () => {
  const { id } = useParams();
  const { cart, removeFromCart } = useCart(); // Use the useCart hook
  let navigate = useNavigate()
  const selectedProduct = productData.find(
    (product) => product.id === parseInt(id, 10)
  );

  if (!selectedProduct) {
    return <h3>Product not found with this ID</h3>;
  }

  const handleRemoveFromCart = () => {
    removeFromCart(selectedProduct.id);
  };



   // Calculate the total amount of charges
   const totalPrice = selectedProduct.price;
   const totalDiscount = selectedProduct.discount;
   const totalDeliveryCharge = selectedProduct.deliverycharge;
   const totalPackageFee = selectedProduct.packagefee;
   const totalAmount = totalPrice - totalDiscount + totalDeliveryCharge + totalPackageFee;

   let handleCheckout = ()=>{
    console.log("handle checkout is called");
    navigate(`/checkout/${totalAmount}`);
   
   }
  return (
    <div id={style.mainbox}>
      <div id={style.box1}>
        <div id={style.box2}>
          <div id={style.box3}>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
          </div>
          <div id={style.box4}>
            <li><strong>Name: {selectedProduct.name}</strong></li>
            <li>Price: $ {selectedProduct.price}</li>
            <li>Rom: {selectedProduct.rom}</li>
            <li>Ram: {selectedProduct.ram}</li>
            <li>Camera: {selectedProduct.camera}</li>
            <li>Processor: {selectedProduct.processor}</li>
            <button onClick={handleRemoveFromCart}> <i class="fa-solid fa-xmark"></i> Remove</button>
          </div>
        </div>
        <div id={style.box5}>
          <div id={style.abox5}>
            <li>Price</li>
            <li>Discount</li>
            <li>Delivery Charges</li>
            <li>Secured Packaging Fee</li>
            <hr />
            <li>
              <strong>Total Amount</strong>
            </li>
            <button onClick={handleCheckout}><i class="fa-brands fa-shopify"></i> Place Order</button>
          </div>
          <div id={style.bbox5}>
            <li> $ {selectedProduct.price}</li>
            <li> $ {selectedProduct.discount}</li>
            <li> $ {selectedProduct.deliverycharge}</li>
            <li> $ {selectedProduct.packagefee}</li>
            <hr />
            <li><strong>$ {totalAmount}</strong></li>
            <hr />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ShoppingCart;
