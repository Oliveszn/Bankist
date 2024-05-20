import React, { useState } from "react";
import { useLogout } from "../hooks/useLogout";

const Close = () => {
  const { logout } = useLogout();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/user/close", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const json = await response.json();

      if (response.ok) {
        alert("Account closed successfully");
        logout();
      } else {
        alert(`Error: ${json.error}`);
      }
    } catch (error) {
      console.error("Error closing account:", error);
      alert("An error occurred while closing the account. Please try again.");
    }
  };

  return (
    <div className="rounded-lg p-12 text-gray-700 bg-gradient-to-tl from-rose-500 to-red-500 my-6 sm:my-0">
      <h2 className="mb-6 text-3xl font-semibold text-gray-700">
        Close account
      </h2>
      <form
        className="grid grid-cols-3 grid-rows-auto gap-y-1 gap-x-4 md:grid-cols-3 md:grid-rows-auto md:gap-x-4 md:gap-y-1"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full bg-white bg-opacity-40 font-inherit text-center text-2xl text-gray-700 rounded-lg px-4 py-1 transition duration-300 focus:outline-none focus:bg-white focus:bg-opacity-60 form__input--user"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          maxLength={6}
          className="w-full bg-white bg-opacity-40 font-inherit text-center text-2xl text-gray-700 rounded-lg px-4 py-1 transition duration-300 focus:outline-none focus:bg-white focus:bg-opacity-60 form__input--pin"
        />
        <button
          type="submit"
          className="border-none rounded-lg text-3xl bg-white cursor-pointer transition duration-300 focus:outline-none focus:bg-white focus:bg-opacity-80 form__btn--close"
        >
          &rarr;
        </button>
        <label className="text-xl text-center">Confirm user</label>
        <label className="text-xl text-center">Confirm PIN</label>
      </form>
    </div>
  );
};

export default Close;
