import React, { Fragment, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";

const Register = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submitHandler = async (
    event: React.SyntheticEvent<HTMLFormElement>
  ) => {
    navigate("name", { replace: true });
    event.preventDefault();

    const form = event.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      emailInput: { value: string };
      passwordInput: { value: string };
    };

    const email: string = formElements.emailInput.value;
    const password: string = formElements.passwordInput.value;

    // let responseJSON: IResponse = await UserService.RegisterUser(
    //   email,
    //   password
    // );

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
    <div className="register-page">
      <div className="register-page__intro">
        <div className="register-page__logo-box">Balance</div>
        <div className="register-page__slogan">
          Balance - kontroluj swoją firmę
        </div>
      </div>
      <form onSubmit={submitHandler} className="register-page__form">
        <h2 className="register-page__title">Zarejestruj się</h2>
        <label>Email</label>
        <input
          placeholder="Expample@gmail.com"
          type="text"
          id="emailInput"
        ></input>
        <label>Hasło</label>
        <input
          placeholder="Wpisz swoje hasło"
          id="passwordInput"
          type="passowrd"
        ></input>
        <p className="register-page__redirect">
          Masz już konto? <Link to="/login">Zaloguj się</Link>
        </p>
        <button className="btn btn--medium btn-filled" type="submit">
          Dołącz teraz
        </button>
      </form>
    </div>
  );
};

export default Register;
