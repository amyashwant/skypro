import React from "react";
import { useSearchParams } from "react-router-dom";
const SuccessPage = () => {

  const searchQuery = useSearchParams()[0]
  console.log(searchQuery.get("reference"))

  const refrenceNum = searchQuery.get("reference")

  return (
    <div>
      <h1>Success! Your payment has been successfully done </h1>
      <h3>Refrence No. {refrenceNum}</h3>
    </div>
  );
};

export default SuccessPage;
