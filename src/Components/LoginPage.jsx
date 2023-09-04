import styles from "./login.module.css"
const LoginPage = () => {
  return (
    <div>
      <div id={styles.maincontainer}>
      <div id={styles.leftdiv}>
       
       </div>
      <div id={styles.rightdiv}>
        <div id={styles.formdiv}>
          {/* <h2>Log in</h2> */}
          <form action="">
            <h2 id={styles.headinglogin}>Login</h2>
            <p id={styles.para}>Get Access to your Orders And Wishlist</p>
            <label htmlFor="">Enter Email/Mobile Number</label>
            <input type="text" name="" id="" placeholder="Enter Email/Phone" />
            <label htmlFor="">Enter Password</label>
            <input type="text" name="" id="" placeholder="Enter Password" />
            <p id={styles.forgotpassword}><a href="">Forgot Password</a></p>
            <button className={styles.btn}><a href="">Login</a></button>
            <button className={styles.btn}>Sign-Up</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default LoginPage