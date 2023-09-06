import style from "./checkout.module.css"
import debitcard from "../image/debitcard.png"
import mastercard from "../image/mastercard.png"
import  upi from "../image/rupaypng.png"
import upi2 from "../image/upi.png"
import { useParams } from "react-router-dom"
import productData from "./db.json"


const Checkout = () => {

    let { totalAmount } = useParams();

    let checkoutcomplete =()=>{
        alert("payment successfull")
    }
     
    
  return (
    <div id={style.supremebox}>
        <div id={style.itembox}>
            <div id={style.upperbox}>
                <div className={style.cardbox}> <img src={debitcard} alt="" /> </div>
                <div className={style.cardbox}> <img src={mastercard} alt="" /> </div>
                <div className={style.cardbox}> <img src={upi2} alt="" /> </div>
                <div className={style.cardbox}>  <img src={upi} alt="" /></div>
            </div>
            <div id={style.lowerbox}>
                
                <label htmlFor="">Name on Card</label>
                <input type="text" placeholder="Name" />
                <label htmlFor="">Card Number</label>
                <input type="text" placeholder="Card Number" />
                <label htmlFor="">Expiration Date</label>
                <input type="text"  placeholder="MM/YY"/>
                <label htmlFor="">CVV</label>
                <input type="text" placeholder="123" />
            </div>
          
            <div id={style.footerbox}>
                <div>
                  
                    <li>Total (Tax incl.)</li>
                    <li>Secure Payment</li>
                </div>
                <div>   
                    
                    <li><strong>${totalAmount} /-</strong></li>
                </div>
            </div>
            <div id={style.buttonbox}>
            <button onClick={checkoutcomplete}> <i class="fa-solid fa-credit-card"></i>  Checkout</button>

            </div>
        </div>
      
    </div>
  )
}

export default Checkout