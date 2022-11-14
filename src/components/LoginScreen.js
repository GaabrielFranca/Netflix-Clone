import React from "react";
import styles from "./LoginScreen.module.css";
import LoginUp from "./LoginUp";
import LoginIn from "./LoginUp";
const LoginScreen = () => {
  const [signIn, setSignIn] = React.useState(false);

  return (
    <div className={styles.loginScreen}>
      <div className={styles.login__background}>
        <img
          style={{ cursor: "pointer" }}
          onClick={() => setSignIn(false)}
          className={styles.logo}
          src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
        ></img>
        <button onClick={() => setSignIn(true)} className={styles.button}>
          Sign in
        </button>

        <div className={styles.bodyLogin}>
          {signIn ? (
            <LoginUp />
          ) : (
            <>
              <h1>Unlimited films, TV programes and more.</h1>
              <h2>Watch anywhere. Cancel at any time.</h2>
              <h3>Ready to watch ? Enter your email to membership.</h3>
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
            </>
          )}
        </div>

        <div className={styles.login_gradient} />
      </div>
    </div>
  );
};

export default LoginScreen;
