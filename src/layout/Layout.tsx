import React, { Fragment, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Layout = (): JSX.Element => {
  return (
    <Fragment>
      <Navigation></Navigation>
      <main className="App">
        <Outlet></Outlet>
      </main>
    </Fragment>
  );
};

export default Layout;
