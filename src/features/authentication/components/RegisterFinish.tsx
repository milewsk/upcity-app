import React, { Dispatch, Fragment, SetStateAction, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/storeHooks";

interface IProps {
  setStep: Dispatch<SetStateAction<number>>;
}

const RegisterFinish = ({ setStep }: IProps): JSX.Element => {
  const navigate = useNavigate();

  const submitHandler = async (
    event: React.SyntheticEvent<HTMLFormElement>
  ) => {
    //send post request with stored data

    //log in and redirect

    event.preventDefault();
  };

  return (
    <div className="register-template">
      <h1>Konto utworzone!</h1>
      <p>
        Na twojego maila wysłaliśmy wiadomość z kodem potwierdzającym twoją
        rejestrację. Twoje konto jest już aktywne!
      </p>
      <form className="form">
        <button className="btn btn--medium btn-filled">Zaczynajmy</button>
      </form>
    </div>
  );
};

export default RegisterFinish;
