import { Link } from "react-router-dom"
import style from "./nav.module.css"
const NavigationBar = () => {
  return (
    <div>
      <nav className={style.navbar}>
        <div className={style.logo}>My Website</div>
        <ul className={style.navlist}>
            <li><a href="">Home</a></li>
            <li><Link to={'/manproducts'}>Man</Link></li>
            <li><a href="#">Woman</a></li>
            <li><a href="#">Whislist</a></li>
            <li><a href="#">Contact</a></li>
            {/* <i class="fa-duotone fa-house"></i> */}
        </ul>
    </nav>
    </div>
  )
}

export default NavigationBar