import React, { Fragment, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/storeHooks";

const RegName = (): JSX.Element => {
  return (
    <div className="register-template">
      <h1>Imię i nazwisko</h1>
      <p>
        Wpisz swoje prawdziwe imię i nazwisko.<b> To ważne.</b>
      </p>
      <form></form>
    </div>
  );
};

export default RegName;
