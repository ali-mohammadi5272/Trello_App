import LoginPage from "./components/templates/LoginPage/LoginPage";
import HomePage from "./components/templates/HomePage/HomePage";
import RegisterPage from "./components/templates/RegisterPage/RegisterPage";
import IndexPage from "./components/templates/IndexPage/IndexPage";

const routes = [
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  {
    path: "/",
    element: <IndexPage />,
    children: [],
  },
];

export { routes };
