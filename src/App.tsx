import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Welcome from "./components/home/Welcome";
import Main from "./layout/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RegDate from "./features/authentication/components/RegisterDate";
import RegFinish from "./features/authentication/components/RegisterFinish";
import RegFoto from "./features/authentication/components/RegisterPhoto";
import RegName from "./features/authentication/components/RegisterName";

function App() {
  const isUserLogged = false;

  return (
    <Routes>
      {!isUserLogged && (
        <Route path="/" element={<Main></Main>}>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="register" element={<Register></Register>}></Route>
          <Route index element={<Register></Register>}></Route>
          <Route path="*" element={<Navigate to="register"></Navigate>}></Route>
        </Route>
      )}
      {isUserLogged && <Route></Route>}
    </Routes>
  );
}

export default App;
