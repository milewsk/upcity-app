import React, { Dispatch, Fragment, SetStateAction, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/storeHooks";

interface IProps {
  setStep: Dispatch<SetStateAction<number>>;
}
const RegisterDate = ({ setStep }: IProps): JSX.Element => {
  const navigate = useNavigate();

  const submitHandler = async (
    event: React.SyntheticEvent<HTMLFormElement>
  ) => {
    navigate("finish", { replace: true });
    event.preventDefault();
  };

  return (
    <div className="register-template">
      <h1>Data urodzenia</h1>
      <p>
        Podaj swoją datę urodzenia.
        <b> UWAGA!</b> Podaj swoją prawdziwą datę, aby ewentualne zgadzała się z
        twoim dowodem tożsamości.
      </p>
      <form className="form" onSubmit={submitHandler}>
        <input placeholder="Imię" type="date"></input>

        <button type="submit" className="btn btn--medium btn-filled">
          Dalej
        </button>
      </form>
    </div>
  );
};

export default RegisterDate;
