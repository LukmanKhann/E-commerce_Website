import { Link } from "react-router-dom"
import bg from "../image/Bg.png"
import style from "./home.module.css"
const Home = () => {
  return (
    <div>
     <div className={style.slider}>
<img src={bg} alt="" />
     </div>
    </div>
  )
}

export default Home