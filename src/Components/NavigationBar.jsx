import { Link } from "react-router-dom"
import style from "./nav.module.css"
import mainimage from "../image/mainlogo.png"
const NavigationBar = () => {
  return (
    <div>
      <nav className={style.navbar}>
        <div id={style.logo}> <img src={mainimage} alt="" /> </div>
        <ul className={style.navlist}>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/manproducts'}>SmartPhones</Link></li>
            <li><a href="#">SmartWatches</a></li>
            <li><a href="#">Whislist</a></li>
            <li><a href="#">Contact</a></li>
            {/* <i class="fa-duotone fa-house"></i> */}
        </ul>
    </nav>
    </div>
  )
}

export default NavigationBar