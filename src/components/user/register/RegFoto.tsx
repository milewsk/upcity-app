import React, { Fragment, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/storeHooks";

const RegFoto = (): JSX.Element => {
  const [imageUpload, setImageUpload] = useState<File | null>(null);
  const navigate = useNavigate();

  const submitHandler = async (
    event: React.SyntheticEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
   
    if(imageUpload !== null){

      //add Image to store
    }
    navigate("date", { replace: true });
    
  };

  const insideCircle = <div>+</div>;

  return (
    <div className="register-template">
      <h1>Dodaj zdjęcie</h1>
      <p>Dodaj swoje zdjęcie, aby twoi znajomi z łatwością cię rozpoznali 😊</p>
      <form className="form" onSubmit={submitHandler}>
        <input
          type="file"
          onChange={(event) => {
            console.log(event.target.files)
            setImageUpload(event.target.files ? event.target.files[0] : null);
            
          }}
          className="photo-circle"
        >
          {insideCircle}
        </input>
        <button type="submit" className="btn btn--medium btn-filled">
          Dalej
        </button>
        <p className="register__skip-btn">Pomiń</p>
      </form>
    </div>
  );
};

export default RegFoto;
