import React, { Fragment, useEffect } from "react";
import { Outlet } from "react-router-dom";

const Main = (): JSX.Element => {
  return (
    <main>
      <Outlet></Outlet>
    </main>
  );
};

export default Main;
