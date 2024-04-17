import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "modern-normalize";
import "./index.css";
import { LangProvider } from "./context/langContext";
import { ThemeProvider } from "./context/themeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LangProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LangProvider>
  </React.StrictMode>
);
