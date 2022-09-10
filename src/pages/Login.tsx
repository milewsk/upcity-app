import React, { Fragment, useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import IResponse from "../shared/interfaces/IResponse";
import UserService from "../features/authentication/services/UserService";
import { useAppDispatch, useAppSelector } from "../store/storeHooks";
import { userLogin } from "../store/userSilce";
import modalSilce, { openModal } from "../store/modalSilce";
import { ModalType } from "../shared/Enums";

const Login = (): JSX.Element => {
  const formRef = useRef<HTMLFormElement>(null);

  const isMoblieOpen = useAppSelector((state) => state.modalSlice.isOpen);
  const dispatch = useAppDispatch();

  const ff = () => {};

  // return ModalService.createModal({
  //   title: "witam oto tyluł tgfdgfdgdfgdfg dfg dfg fdg retg ",
  //   message: "wiadomość ładna fajna taka o gfdg tre hh gtsreg rdtg ertg reg ",
  //   type: ModalType.Confirm,
  //   isFunctionDefined: true,
  //   confirmFunction: ff,
  // });

  const hand = () => {
    dispatch(
      openModal({
        title: "witam oto tyluł tgfdgfdgdfgdfg dfg dfg fdg retg ",
        message:
          "wiadomość ładna fajna taka o gfdg tre hh gtsreg rdtg ertg reg ",
        type: ModalType.Confirm,
        isFunctionDefined: false,
      })
    );
  };

  const submitHandler = async (
    event: React.SyntheticEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      emailInput: { value: string };
      passwordInput: { value: string };
    };

    const email: string = formElements.emailInput.value;
    const password: string = formElements.passwordInput.value;

    let responseJSON: IResponse = await UserService.LoginUser(email, password);

    // if (responseJSON.Status === 200) {
    //   const expirationTime = new Date().getTime() + 100000;
    //   dispatch(
    //     userLogin({
    //       expirationTime: expirationTime,
    //     })
    //   );
    // }
  };

  return (
    <div className="login-page">
      <div className="login-page__intro">
        <div className="login-page__logo-box">Upcity</div>
        <div className="login-page__slogan">
          Upcity - Znajdź swoje miejsce w mieście
        </div>
      </div>
      <form className="login-page__form" ref={formRef} onSubmit={submitHandler}>
        <h2 className="login-page__title">Zaloguj się</h2>
        <label>Email</label>
        <input
          placeholder="Expample@gmail.com"
          type="text"
          id="emailInput"
        ></input>
        <label>Hasło</label>
        <input
          placeholder="Wpisz swoje hasło"
          type="passowrd"
          id="passwordInput"
        ></input>
        <label className="checkbox-container">
          <input type="checkbox" id="remember" name="remember"></input>
          <span className="checkmark"></span>
          Zapamiętaj mnie
        </label>
        <button className="btn btn--medium btn-filled" type="submit">
          Zaloguj się
        </button>
        <p onClick={hand} className="login-page__forgot-password">
          Nie pamiętasz hasła?
        </p>
        <p className="login-page__redirect">
          Nie masz konta? <Link to="/register">Zarejestruj się</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
