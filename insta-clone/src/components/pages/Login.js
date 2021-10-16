import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const loginInputHandle = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={loginInputHandle}
          value={user.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={loginInputHandle}
          value={user.password}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
