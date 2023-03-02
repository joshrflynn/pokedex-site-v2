import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PokemonDataProvider } from "./context/PokemonData.Context";
import { ModalProvider } from "./context/Modal.Context";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <PokemonDataProvider>
    <ModalProvider>
      <App />
    </ModalProvider>
  </PokemonDataProvider>
  // </React.StrictMode>
);
