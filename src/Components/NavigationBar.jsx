import { Link } from "react-router-dom"
import style from "./nav.module.css"
import mainimage from "../image/mainlogo.png"
const NavigationBar = () => {
  return (
    <div>
      <nav className={style.navbar}>
        <div id={style.logo}> <a href="#"><img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="" /></a> <input type="text" placeholder="search for products, brand and more" /> <button><i class="fa-solid fa-magnifying-glass"></i></button></div>
        <ul className={style.navlist}>
            <li><Link to={'/'}><i class="fa-solid fa-house"></i> Home</Link></li>
            <li><Link to={'/manproducts'}><i class="fa-solid fa-mobile"></i> SmartPhones</Link></li>
            <li><a href="#"><i class="fa-solid fa-bell"></i> Notifications</a></li>
            <li><a href="#"><i class="fa-solid fa-heart"></i> Whislist</a></li>
            <li><a href="#"><i class="fa-solid fa-address-book"></i> Contact</a></li>
            {/* <i class="fa-duotone fa-house"></i> */}
        </ul>
    </nav>
    </div>
  )
}

export default NavigationBar