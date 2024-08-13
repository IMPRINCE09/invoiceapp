import React from "react";

function Login() {
  return (
    <div className=" w-full flex items-center justify-center">
      <div className="w-full">
        <div>
          <label htmlFor="email">Email</label>
          <input type="email"></input>
        </div>

        <div>
          <label htmlFor="password" className="font-bold text-xl ">
            Password
          </label>
          <input type="password" className=""></input>
        </div>
      </div>
      <div className="w-full"></div>
      <div className="className"></div>
      <div className=""></div>
    </div>
  );
}

export default Login;
