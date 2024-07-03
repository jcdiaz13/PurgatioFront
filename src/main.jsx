import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PlayerProvider } from "./app/contexts/PlayerContext";
import { GlobalStyle } from "../src/app/style/createGlobal.styles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PlayerProvider>
      <GlobalStyle />
      <App />
    </PlayerProvider>
  </React.StrictMode>
);
