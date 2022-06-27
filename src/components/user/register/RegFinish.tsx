import React, { Fragment, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/storeHooks";

const RegFinish = (): JSX.Element => {
  const navigate = useNavigate();

  const submitHandler = async (
    event: React.SyntheticEvent<HTMLFormElement>
  ) => {
    navigate("/register", { replace: true });
    event.preventDefault();
  };

  return (
    <div className="register-template">
      <h1>Konto utworzone!</h1>
      <p>
        Na twojego maila wysłaliśmy wiadomość z kodem potwierdzającym twoją
        rejestrację. Twoje konto jest już aktywne!
      </p>
      <form className="form" onSubmit={submitHandler}>
        <button type="submit" className="btn btn--medium btn-filled">
          Zaczynajmy
        </button>
      </form>
    </div>
  );
};

export default RegFinish;
