import React from "react";
import styles from "./LoginUp.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase.js";
import { useRef } from "react";
const LoginUp = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = () => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const signupScreen = (e) => {
    e.preventDefault();
  };

  const signInScreen = (e) => {};

  return (
    <div className={styles.siginUp}>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email"></input>
        <input ref={passwordRef} placeholder="Password" type="password"></input>
        <button type="submit" onClick={signInScreen}>
          Sign In
        </button>
      </form>
      <div className={styles.upScreenText}>
        <span className={styles.gray}>New to netflix?</span>
        <p onClick={signupScreen}>Sign Up now</p>
      </div>
    </div>
  );
};

export default LoginUp;
