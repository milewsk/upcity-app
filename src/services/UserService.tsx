import React, { Fragment, useEffect } from "react";
import { JsonObjectExpression } from "typescript";
import IResponse from "../interfaces/IResponse";

const UserService = {
  LoginUser: async (email: string, passowrd: string) => {
    const response = await fetch(
      `https://localhost:44360/api/user/${email}/${passowrd}`,
      { method: "GET", headers: { "Access-Control-Allow-Origin": "*" } }
    );

    if (response.ok) {
      const data: IResponse = await response.json();
      console.log(data);
      return data;
    } else {
      const data: IResponse = await response.json();
      return data;
    }
  },

  RegisterUser: async (email: string, passowrd: string) => {
    const response = await fetch(`https://localhost:44360/api/user/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email: email,
        Password: passowrd,
      }),
    });

    if (response.ok) {
      const data: IResponse = await response.json();
      return data;
    } else {
      const data: IResponse = await response.json();
      return data;
    }
  },

  retriveStoredToken: () => {
    const storedToken: string | null = localStorage.getItem("email");
    const storedExpirationTime: string | null =
      localStorage.getItem("expirationTime");

    const remainingTime: number = calculateRemainingTime(
      Number(storedExpirationTime)
    );

    if (remainingTime <= 60000) {
      localStorage.removeItem("email");
      localStorage.removeItem("expirationTime");

      return null;
    }

    return { email: storedToken, duration: remainingTime };
  },
};

const calculateRemainingTime = (expirationTime: number): number => {
  const currentTime: number = new Date().getTime();
  const remainingTime: number = expirationTime - currentTime;

  return remainingTime;
};

export default UserService;
