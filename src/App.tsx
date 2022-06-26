import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Welcome from "./components/home/Welcome";
import Main from "./components/layout/Main";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import RegName from "./components/user/register/RegName";

function App() {
  const isUserLogged = false;

  return (
    <Routes>
      {!isUserLogged && (
        <Route path="/" element={<Main></Main>}>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="register" element={<Register></Register>}></Route>
          <Route path="register/name" element={<RegName></RegName>}></Route>
          <Route index element={<Welcome></Welcome>}></Route>
          <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
        </Route>
      )}
      {isUserLogged && <Route></Route>}
    </Routes>
  );
}

export default App;
