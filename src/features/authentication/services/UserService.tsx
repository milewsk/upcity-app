import React, { Fragment, useEffect } from "react";
import { JsonObjectExpression } from "typescript";
import IResponse from "../../../shared/interfaces/IResponse";

const UserService = {
  LoginUser: async (email: string, passowrd: string) => {
    const response = await fetch(`https://localhost:44360/api/User/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email: email,
        Password: passowrd,
      }),
    });

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
    const response = await fetch(`https://localhost:44360/api/User/register`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Access-Control-Allow-Origin": "*",
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
    const storedToken: string | null = localStorage.getItem("token");
    const storedExpirationTime: string | null =
      localStorage.getItem("expirationTime");

    const remainingTime: number = calculateRemainingTime(
      Number(storedExpirationTime)
    );

    if (remainingTime <= 60000) {
      localStorage.removeItem("token");
      localStorage.removeItem("expirationTime");

      return null;
    }

    return { storedToken: storedToken, duration: remainingTime };
  },
};

const calculateRemainingTime = (expirationTime: number): number => {
  const currentTime: number = new Date().getTime();
  const remainingTime: number = expirationTime - currentTime;

  return remainingTime;
};

export default UserService;
