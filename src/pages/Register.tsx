import React, { useRef, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/storeHooks";
import RegisterStart from "../features/authentication/components/RegisterStart";
import RegisterName from "../features/authentication/components/RegisterName";
import RegisterPhoto from "../features/authentication/components/RegisterPhoto";
import RegisterDate from "../features/authentication/components/RegisterDate";
import RegisterFinish from "../features/authentication/components/RegisterFinish";

const Register = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [step, setStep] = useState<number>(1);
  const errRef = useRef();
  const [errMsg, setErrMsg] = useState("");

  return (
    <section className="register-page">
      {step === 1 && <RegisterStart setStep={setStep}></RegisterStart>}
      {step === 2 && <RegisterName></RegisterName>}
      {step === 3 && <RegisterPhoto></RegisterPhoto>}
      {step === 4 && <RegisterDate></RegisterDate>}
      {step === 5 && <RegisterFinish></RegisterFinish>}
    </section>
  );
};

export default Register;
