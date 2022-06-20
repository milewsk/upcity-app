import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "../src/sass/App.scss";
import Welcome from "./components/home/Welcome";

function App() {
  const isUserLogged = false;

  return (
    <Routes>
      {!isUserLogged && (
        <Route path="/">
          <Route path="login"></Route>
          <Route path="login"></Route>
          <Route index element={<Welcome></Welcome>}></Route>
          <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
        </Route>
      )}
      {isUserLogged && <Route></Route>}
    </Routes>
  );
}

export default App;
