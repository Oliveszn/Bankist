import React from "react";
import { useState } from "react";

const Loan = () => {
  const [amount, setAmount] = useState("");
  // const [error, setError] = useState("");

  const handleLoanRequest = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/movements/loan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Ensure you have the token in local storage
        },
        body: JSON.stringify({ amount }),
      });

      const json = await response.json();

      if (response.ok) {
        alert("Loan acquired successfully");
        console.log("New balance:", json.balance); // Display the new balance
      } else {
        alert(`Error: ${json.error}`);
      }
    } catch (error) {
      console.error("Error acquiring loan:", error);
      alert("An error occurred while acquiring the loan. Please try again.");
    }
  };

  return (
    <div className="rounded-lg p-12 text-gray-700 bg-gradient-to-tl from-emerald-400 to-lime-500 my-6 sm:my-0">
      <h2 className="mb-6 text-3xl font-semibold text-gray-700">
        Request loan
      </h2>
      <form
        onSubmit={handleLoanRequest}
        className="grid grid-cols-3 grid-rows-auto gap-y-1 gap-x-4 md:grid-cols-3 md:grid-rows-auto md:gap-x-4 md:gap-y-1"
      >
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full bg-white bg-opacity-40 font-inherit text-center text-2xl text-gray-700 rounded-lg px-4 py-1 transition duration-300 focus:outline-none focus:bg-white focus:bg-opacity-60 form__input--loan-amount"
        />
        <button className="border-none rounded-lg text-3xl bg-white cursor-pointer transition duration-300 focus:outline-none focus:bg-white focus:bg-opacity-80 form__btn--loan">
          &rarr;
        </button>
        {/* {error && <p>{error}</p>} */}
        <label className="text-xl text-center md:row-start-2">Amount</label>
      </form>
    </div>
  );
};

export default Loan;
