import LoginPage from "./components/templates/LoginPage/LoginPage";
import HomePage from "./components/templates/HomePage/HomePage";
import RegisterPage from "./components/templates/RegisterPage/RegisterPage";

const routes = [
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/", element: <HomePage /> },
];

export { routes };
