import React from "react";

const Movements = () => {
  return (
    <div className="movements bg-white rounded-lg overflow-auto">
      <div className="movements__row py-9 px-16 flex items-center border-b border-gray-300">
        <div className="text-base md:text-lguppercase font-semibold text-white bg-gray-800 py-1 px-4 rounded-full mr-8 bg-gradient-to-tl from-teal-400 to-lime-500">
          2 deposit
        </div>
        <div className="text-base md:text-lg uppercase font-semibold text-gray-600">
          3 days ago
        </div>
        <div className="text-xl md:text-2xl lg:text-3xl ml-auto">4 000€</div>
      </div>
      <div className="movements__row py-9 px-16 flex items-center border-b border-gray-300">
        <div className="text-base md:text-lguppercase font-semibold text-white bg-gray-800 py-1 px-4 rounded-full mr-8 bg-gradient-to-tl from-pink-500 to-red-500">
          1 withdrawal
        </div>
        <div className="text-base md:text-lg uppercase font-semibold text-gray-600">
          24/01/2037
        </div>
        <div className="text-xl md:text-2xl lg:text-3xl ml-auto">-378€</div>
      </div>
    </div>
  );
};

export default Movements;
