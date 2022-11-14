import React from "react";
import styles from "./LoginUp.module.css";
const LoginUp = () => {
  return (
    <div className={styles.siginUp}>
      <form>
        <h1>Sign In</h1>
        <input placeholder="Email" type="email"></input>
        <input placeholder="Password" type="password"></input>
        <button type="submit">Sign In</button>
      </form>
      <h4>
        <span className={styles.gray}>New to netflix?</span>
        <span clasName={styles.upLink}> Sign Up now</span>
      </h4>
    </div>
  );
};

export default LoginUp;
