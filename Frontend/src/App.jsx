import React from "react";
import Router from "./Project/Router/Router";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <div>
      <Router />
      <ToastContainer/>
    </div>
  );
}
