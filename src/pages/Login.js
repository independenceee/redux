import React from "react";
import { useDispatch } from "react-redux";
import { authAction } from "../store/auth-slice";

const Login = () => {
  const dispatch = useDispatch();

  const handdleSubmit = function (event) {
    event.preventDefault();
    dispatch(authAction.login());
  };
  return (
    <div className="">
      <h1>Login</h1>
      <form onSubmit={handdleSubmit}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
