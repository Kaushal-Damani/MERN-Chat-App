import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ChatPage from "../Pages/ChatPage";
import ForgotPass from "../components/Auth/ForgotPass";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/chats" Component={ChatPage} />
        <Route path="/forgotPass" Component={ForgotPass} />
      </Routes>
    </>
  );
}
