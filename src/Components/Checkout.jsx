import style from "./checkout.module.css"
import debitcard from "../image/debitcard.png"
import mastercard from "../image/mastercard.png"
import  upi from "../image/rupaypng.png"
import upi2 from "../image/upi.png"
import { useNavigate, useParams } from "react-router-dom"
import productData from "./db.json"


const Checkout = () => {
let navigate = useNavigate()
    let { totalAmount } = useParams();

    let checkoutcomplete =()=>{
        alert("payment successfull")
        navigate('/')
    }
     
    
  return (
    <div id={style.supremebox}>
       <div id={style.outermainbox}>

        <div id={style.listmainbox}>
            
         <div id={style.itemnamebox}>
          <ul>
            <li>Sub Total</li>
            <li>Discount</li>
            <li>Tax</li>
            <li><strong>Total</strong></li>
          </ul>
          
         </div>
         <div id={style.itempricebox}>
      <ul>
        <li>$ {totalAmount}</li>
        <li>0.00</li>
        <li>0.00</li>
        <li><strong>$ {totalAmount}</strong></li>
       
      </ul>
         </div>
        
        </div>
       


        <div id={style.paymentbox}>
            <div id={style.paymentdetailsbox}>
            <h4>Payment Information</h4>
<label htmlFor=""><i class="fa-solid fa-user"></i> Name On Card</label>
<input type="text" name="" id=""  placeholder="Enter your full name"/> 
<label htmlFor=""><i class="fa-regular fa-credit-card"></i> Card Number</label> <img src={mastercard} alt="" />
<img src={upi} alt="" />
<img src={upi2} alt="" />
<input type="text" name="" id="" placeholder="Enter your card number" />
<p>Expires on</p>
<span>Month</span> <select name="" id="">
<option value="1">January</option>
  <option value="2">February</option>
  <option value="3">March</option>
  <option value="4">April</option>
  <option value="5">May</option>
  <option value="6">June</option>
  <option value="7">July</option>
  <option value="8">August</option>
  <option value="9">September</option>
  <option value="10">October</option>
  <option value="11">November</option>
  <option value="12">December</option> 
</select>
<span className={style.spanyear}>Year</span>  
<select>
  <option value="2022">2022</option>
  <option value="2023">2023</option>
  <option value="2024">2024</option>
  <option value="2025">2025</option>
  <option value="2026">2026</option>
  <option value="2027">2027</option>
  <option value="2028">2028</option>
  <option value="2029">2029</option>
  <option value="2030">2030</option>
  <option value="2031">2031</option>
  <option value="2032">2032</option>
  <option value="2033">2033</option>
</select> <br />
<label htmlFor="">CVV</label> 
<input  type="text" name="" id={style.cvv}  placeholder="CVV"/> 
<button className={style.checkoutbtn} onClick={checkoutcomplete}><i class="fa-solid fa-credit-card"></i> Checkout</button>
<p className={style.lasttext}><i class="fa-solid fa-lock"></i> Your credit card information is encrypted</p>
            </div>
        </div>


       </div>
      
    </div>
  )
}

export default Checkout