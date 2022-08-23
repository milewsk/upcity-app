import React, { Fragment, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/storeHooks";

const MissingPage = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location;

  const goBackButtonHandler = () => {
    navigate("/", { replace: true });
  };

  return (
    <Fragment>
      <div className="missing-page__container">
        <h2>Page not found</h2>
        <p>
          We are sorry but we couldn't find a page you are looking for. Please
          check if your URL is correct.
        </p>
        <button onClick={goBackButtonHandler} className="btn btn--medium">
          Welcome Page
        </button>
      </div>
    </Fragment>
  );
};

export default MissingPage;
