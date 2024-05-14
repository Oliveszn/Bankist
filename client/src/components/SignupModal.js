import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useSignup } from "../hooks/useSignup";

const SignupModal = ({ open, onClose }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userName, password);
    await signup(userName, password);
  };

  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className="fixed top-0 left-0 bottom-0 right-0 over z-50"></div>
      <div className="fixed top-1/2 left-1/2 trans p-12 z-50">
        <div className="flex justify-between items-center gap-10">
          <h2 className="text-lg font-bold mb-4">SignUp</h2>
          <button onClick={onClose}>Close </button>
        </div>
        <form className="flex" onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            placeholder="user"
            className="border-none py-2 px-8 text-base sm:text-lg md:text-xl lg:text-2xl text-center w-32 sm:w-40 md:w-44 lg:w-48 rounded-3xl mr-4 border border-solid boredr-[#fff] duration-300 transition-all focus:outline-none focus:border focus:border-solid focus:border-[#ccc] placeholder-[#bbb]"
          />
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="PIN"
            maxLength={4}
            className="border-none py-2 px-8 text-base sm:text-lg md:text-xl lg:text-2xl text-center w-32 sm:w-40 md:w-44 lg:w-48 rounded-3xl mr-4 border border-solid boredr-[#fff] duration-300 transition-all focus:outline-none focus:border focus:border-solid focus:border-[#ccc] placeholder-[#bbb]"
          />
          <button className="border-none pointer transition-all duration-300 text-2xl md:text-3xl lg:text-4xl color-[#777]">
            &rarr;
          </button>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default SignupModal;
