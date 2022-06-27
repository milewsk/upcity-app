import React, { Fragment, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/storeHooks";

const RegFoto = (): JSX.Element => {
  const navigate = useNavigate();

  const submitHandler = async (
    event: React.SyntheticEvent<HTMLFormElement>
  ) => {
    navigate("date", { replace: true });
    event.preventDefault();
  };

  const insideCircle = <div>+</div>;

  return (
    <div className="register-template">
      <h1>Dodaj zdjęcie</h1>
      <p>Dodaj swoje zdjęcie, aby twoi znajomi z łatwością cię rozpoznali 😊</p>
      <form className="form" onSubmit={submitHandler}>
        <div className="photo-circle">{insideCircle}</div>
        <button type="submit" className="btn btn--medium btn-filled">
          Dalej
        </button>
        <p className="register__skip-btn">Pomiń</p>
      </form>
    </div>
  );
};

export default RegFoto;
