import LoginPage from "./components/templates/LoginPage/LoginPage";
import HomePage from "./components/templates/HomePage/HomePage";
import SignUpPage from "./components/templates/SignUpPage/SignUpPage";
import RegisterPaaagae from "./components/templates/RegisterPaaaage/RegisterPaaaage";

const routes = [
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPaaagae /> },
  { path: "/", element: <HomePage /> },
];

export { routes };
