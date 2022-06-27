import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Welcome from "./components/home/Welcome";
import Main from "./components/layout/Main";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import RegDate from "./components/user/register/RegDate";
import RegFinish from "./components/user/register/RegFinish";
import RegFoto from "./components/user/register/RegFoto";
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
          <Route
            path="register/name/photo"
            element={<RegFoto></RegFoto>}
          ></Route>
          <Route
            path="register/name/photo/date"
            element={<RegDate></RegDate>}
          ></Route>
          <Route
            path="register/name/photo/date/finish"
            element={<RegFinish></RegFinish>}
          ></Route>
          <Route index element={<Register></Register>}></Route>
          <Route path="*" element={<Navigate to="register"></Navigate>}></Route>
        </Route>
      )}
      {isUserLogged && <Route></Route>}
    </Routes>
  );
}

export default App;
