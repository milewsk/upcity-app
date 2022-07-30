import {
  Dispatch,
  Fragment,
  SetStateAction,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../../../hooks/useInput";
import API from "../../../lib/API";
import {
  email_REGEX,
  passowrd_REGEX,
  username_REGEX,
} from "../../../shared/helper/Regex";
import { useAppDispatch } from "../../../store/storeHooks";

interface IProps {
  setStep: Dispatch<SetStateAction<number>>;
}

const RegisterStart = ({ setStep }: IProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const errRef = useRef();
  const [errMsg, setErrMsg] = useState("");

  const {
    valueRef: emailRef,
    enteredValue: emailValue,
    setEnteredValue: setEmailValue,
    hasError: hasEmailError,
    inputBlurrHandler: emailBlurrHandler,
    isValueValid: isEmailValid,
  } = useInput("email");
  const {
    valueRef: passwordRef,
    enteredValue: passowrdValue,
    setEnteredValue: setPassowrdValue,
    hasError: hasPasswordError,
    inputBlurrHandler: passowrdBlurrHandler,
    isValueValid: isPassowrdValid,
  } = useInput("password");

  useLayoutEffect(() => {
    if (emailRef.current !== null) {
      emailRef.current.focus();
    }
  }, []);

  useEffect(() => {}, [emailValue, passowrdValue]);

  const submitHandler = async (
    event: React.SyntheticEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      email: { value: string };
      passoword: { value: string };
    };

    const emailValue: string = formElements.email.value;
    const passwordValue: string = formElements.email.value;

    if (isEmailValid && isPassowrdValid) {
      //wyślij sprawdzenie czy mail jest w bazie
      const response = API.get(`api/user/checkEmail/${emailValue}`);
      console.log(response);
      //jeśli jest - error
      // jeśli nie zapisz zmiany do boxa i przejdź kolejny krok
    }
  };

  return (
    <Fragment>
      <div className="register-page__intro">
        <div className="register-page__logo-box">Upcity</div>
        <div className="register-page__slogan">
          Upcity - Znajdź swoje miejsce w mieście
        </div>
      </div>
      <form onSubmit={submitHandler} className="register-page__form">
        <h2 className="register-page__title">Zarejestruj się</h2>
        <label htmlFor="email">Email</label>
        <input
          placeholder="Expample@gmail.com"
          type="text"
          id="email"
          autoComplete="off"
        ></input>
        <label htmlFor="passowrd">Hasło</label>
        <input
          id="passowrd"
          type="passowrd"
          placeholder="Wpisz swoje hasło"
          ref={passwordRef}
          onChange={(e) => setUsernameValue(e.target.value)}
          required
          aria-invalid={isPassowrdValid ? "false" : "true"}
          aria-describedby="pswidnote"
          onBlur={() => {
            passowrdBlurrHandler();
          }}
        ></input>
        <p className="register-page__redirect">
          Masz już konto? <Link to="/login">Zaloguj się</Link>
        </p>
        <button
          disabled={isPassowrdValid && isUsernameValid}
          className="btn btn--medium btn-filled"
          type="submit"
        >
          Dołącz teraz
        </button>
      </form>
    </Fragment>
  );
};

export default RegisterStart;
