import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);

    setemail("");
    setpassword("");
  };

  return (
    <div
      className="flex h-screen w-screen items-center justify-center bg-cover bg-center font-[Open_Sans]"
      style={{ backgroundImage: "url('/images/login-background.jpg')" }}
    >
      <div className="border-1 p-20 font-semibold text-xl backdrop-blur-md rounded-2xl">
        <form
          onSubmit={(e) => {
            SubmitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
            className="text-cyan-100 rounded-full p-3 border-2 placeholder:text-gray-300"
            type="email"
            placeholder="Enter Your Email"
          />

          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
            className="text-cyan-100 rounded-full mt-4 p-3 border-2 placeholder:text-gray-300"
            type="password"
            placeholder="Enter Your Password"
          />

          <button className="text-black rounded-2xl text-2xl bg-blue-300 mt-4 w-full hover:bg-blue-350 p-3">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
