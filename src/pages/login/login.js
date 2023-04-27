import React from "react";
import { useLocation, Link } from "react-router-dom";
import Account from "./account";
import { LoginForm } from "./account-components/form";

const Login = () => {
  const location = useLocation();
  return (
    <>
      <Account
        header="Welcome Back!"
        subHeader="Log in to continue"
        formType= {<LoginForm />}
        linkText="Don't have an account?"
        link={<Link to="/signup">Sign up</Link>}
      />
    </>
  );
};

export default Login;