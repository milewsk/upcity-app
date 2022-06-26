import React, { Fragment, useEffect, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";

const Login = (): JSX.Element => {
  const formRef = useRef<HTMLFormElement>(null);

  const dispatch = useAppDispatch();

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

    // let responseJSON: IResponse = await UserService.LoginUser(email, password);

    // if (responseJSON.Status === 200) {
    //   const expirationTime = new Date().getTime() + 100000;

    //   dispatch(
    //     userLogin({
    //       email: responseJSON.ReturnData,
    //       expirationTime: expirationTime,
    //     })
    //   );
    // }
  };

  return (
    <div className="login-page">
      <div className="login-page__intro">
        <div className="login-page__logo-box">Balance</div>
        <div className="login-page__slogan">
          Balance - kontroluj swoją firmę
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
        <p className="login-page__forgot-password">Nie pamiętasz hasła?</p>
        <p className="login-page__redirect">
          Nie masz konta? <Link to="/register">Zarejestruj się</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
