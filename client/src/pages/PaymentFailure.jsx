import React from "react";
import error from "../assets/error.png";
const PaymentFailure = () => {
  return (
    <div>
      <div className="w-fit m-auto mt-[50px]">
        <img src={error} alt="payment error" />
      </div>
    </div>
  );
};

export default PaymentFailure;
