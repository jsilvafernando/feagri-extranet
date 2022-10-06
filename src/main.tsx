import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/extranet/graduacao/protocolo/solicitacao/:title/:menu/*"
          element={<App />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
