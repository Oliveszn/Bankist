import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const Balance = () => {
  const { user } = useAuthContext();
  return (
    <div className="col-span-2 flex items-end justify-between mb-8">
      <div>
        <p className="text-2xl md:text-3xl lg:text-4xl font-medium mb-[-0.2rem]">
          Current balance
        </p>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-500">
          As of <span className="">05/03/2037</span>
        </p>
      </div>
      <div>
        {/* 0000€ */}
        {user && (
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal">
            {user.balance}€
          </span>
        )}
      </div>
    </div>
  );
};

export default Balance;
