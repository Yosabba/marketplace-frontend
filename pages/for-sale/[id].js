import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

const HouseDetails = () => {
  const router = useRouter();
  const { isLoggedIn } = useSelector((state) => state.user);

  useEffect(() => {
    const userToken = localStorage.getItem("token");
    isLoggedIn ? localStorage.getItem("user") : router.push("/login");
  }, [isLoggedIn]);

  return (
    <div>
      <h1>for sale house details</h1>
    </div>
  );
};

export default HouseDetails;
