import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./context/ThemeProvider.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./assets/styles/main.scss";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
