import React from "react";
import { useNavigate } from "react-router";
import success from "../assets/success.png";
const PaymentSuccess = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 2000);
  return (
    <div>
      <div className="w-fit m-auto mt-[50px]">
        <img src={success} alt="payment success" />
      </div>
    </div>
  );
};

export default PaymentSuccess;
