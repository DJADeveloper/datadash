import React from "react";
import cn from "classnames";
import styles from "./SignIn.module.sass";
import { use100vh } from "react-div-100vh";
import { Link } from "react-router-dom";
import TextInput from "../../components/TextInput";
import Image from "../../components/Image";

const SignIn = () => {
  const heightWindow = use100vh();

  return (
    <div className={styles.login} style={{ minHeight: heightWindow }}>
      <div className={styles.wrapper}>
        <Link className={styles.logo} to="/">
          <Image
            className={styles.pic}
            src="/images/DataDashLogo.svg"
            srcDark="/images/DataDashLogo.svg"
            alt="Core"
          />
        </Link>
        <div className={cn("h2", styles.title)}>Sign in</div>
        <div className={styles.head}>
          {/* <div className={styles.btns}>
            <button className={cn("button-stroke", styles.button)}>
              <img src="/images/content/google.svg" alt="Google" />
              Google
            </button>
            <button className={cn("button-stroke", styles.button)}>
              <Image
                className={styles.pic}
                src="/images/content/apple-dark.svg"
                srcDark="/images/content/apple-light.svg"
                alt="Apple"
              />
              Apple ID
            </button>
          </div> */}
        </div>
        <div className={styles.body}>
          <TextInput
            style={{ borderRadius: "4px" }}
            className="my-3"
            name="email"
            type="email"
            placeholder="Your email"
            required
            icon="mail"
          />
          <TextInput
            style={{ borderRadius: "4px" }}
            className="my-3"
            name="password"
            type="password"
            placeholder="Password"
            required
            icon="lock"
          />
          <button className={cn("button", styles.button)}>Sign in</button>

          {/* <div className={styles.info}>
            Don’t have an account?{" "}
            <Link className={styles.link} to="/sign-up">
              Sign up
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
