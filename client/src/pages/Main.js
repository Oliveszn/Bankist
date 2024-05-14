import React from "react";
import Balance from "../components/Balance";
import Movements from "../components/Movements";
import Summary from "../components/Summary";
import Transfers from "../components/Transfers";
import Loan from "../components/Loan";
import Close from "../components/Close";
import LogoutTimer from "../components/LogoutTimer";

const Main = () => {
  return (
    <div className="relative max-w-[100rem] mx-auto my-16 block sm:grid grid-cols-4fr md:grid-cols-3fr grid-rows-auto repeat-3 md:grid-rows-15rem grid-rows-auto gap-8 ">
      <Balance />
      <Movements />
      <Transfers />
      <Loan />
      <Close />
      <Summary />
      <LogoutTimer />
    </div>
  );
};

export default Main;
