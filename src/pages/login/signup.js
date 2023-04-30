import React from "react";
import { Link } from "react-router-dom";
import Account from "./account";
import { SignupForm } from "./account-components/form";

const Signup = () => {
  return (
    <>
      <Account
        header="Create Account"
        subHeader="Register to get started"
        formType={<SignupForm />}
        linkText="Already have an account?"
        link={<Link to="/signin"> Sign in</Link>}
      />
    </>
  );
};

export default Signup;