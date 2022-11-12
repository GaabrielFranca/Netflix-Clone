import React from "react";
import styles from "./LoginScreen.module.css";
const LoginScreen = () => {
  return (
    <div className={styles.loginScreen}>
      <div className={styles.login__background}>
        <img
          className={styles.logo}
          src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
        ></img>
        <button className={styles.button}>Sign in</button>
        <div className={styles.login_gradient} />
      </div>
      <div className={styles.bodyLogin}>
        <>
          <h1>Unlimited films, TV programes and more.</h1>
          <h2>Watch anywhere. Cancel at any time.</h2>
          <h3>Ready to watch ? Enter your email to membership.</h3>
        </>
        <div className={styles.loginScreen__input}>
          <form>
            <input
              className={styles.inputEmail}
              type="email"
              placeholder="Email Address"
            ></input>
            <button className={styles.buttonInput}>GET STARTED</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
