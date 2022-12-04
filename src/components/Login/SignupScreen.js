import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef } from "react";
import { auth } from "../../firebase";
import "./SignupScreen.css";

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((user) => {
          console.log(user);
        })
        .catch((err) => {
          alert(err.message);
        });
  };
  return (
    <div className="signupScreen">
      <form action="">
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email Address" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button onClick={signIn} type="submit">
          Sign In
        </button>
        <h4>
          <span className="signupScreen__gray">New to Netflix? </span>
          <span onClick={register} className="signupScreen__link">
            Sign Up now
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
