import React, { Dispatch, Fragment, SetStateAction, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/storeHooks";

interface IProps {
  setStep: Dispatch<SetStateAction<number>>;
}

const RegisterName = ({ setStep }: IProps): JSX.Element => {
  const navigate = useNavigate();

  const submitHandler = async (
    event: React.SyntheticEvent<HTMLFormElement>
  ) => {
    navigate("photo", { replace: true });
    event.preventDefault();
  };

  return (
    <div className="register-template">
      <h1>Imię i nazwisko</h1>
      <p>
        Wpisz swoje prawdziwe imię i nazwisko.<b> To ważne.</b>
      </p>
      <form className="form" onSubmit={submitHandler}>
        <input placeholder="Imię" type="text"></input>
        <input placeholder="Nazwisko" type="text"></input>
        <button type="submit" className="btn btn--medium btn-filled">
          Dalej
        </button>
      </form>
    </div>
  );
};

export default RegisterName;
