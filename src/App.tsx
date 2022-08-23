import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Welcome from "./components/home/Welcome";
import Layout from "./layout/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RegDate from "./features/authentication/components/RegisterDate";
import RegFinish from "./features/authentication/components/RegisterFinish";
import RegFoto from "./features/authentication/components/RegisterPhoto";
import RegName from "./features/authentication/components/RegisterName";
import Page from "./Page";
import RequireAuth from "./features/authentication/RequireAuth";

function App() {
  const isUserLogged = false;

  return (
    <Routes>
      <Route path="/" element={<Page></Page>}>
        <Route index element={<Register></Register>}></Route>
        <Route path="login" element={<Login></Login>} />
        <Route path="register" element={<Register></Register>} />

        <Route element={<RequireAuth></RequireAuth>}>
          <Route path="/" element={<Welcome></Welcome>}></Route>
        </Route>

        <Route path="*" element={<Navigate to="register"></Navigate>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
