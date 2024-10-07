import LoginPage from "./components/templates/LoginPage/LoginPage";
import HomePage from "./components/templates/HomePage/HomePage";
import RegisterPage from "./components/templates/RegisterPage/RegisterPage";
import IndexPage from "./components/templates/IndexPage/IndexPage";
import AuthProvider from "./context/AuthProvider";
import NotFoundPage from "./components/templates/NotFoundPage/NotFoundPage";
import DBProvider from "./context/DBProvider";

const routes = [
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  {
    path: "/",
    element: (
      <AuthProvider>
        <DBProvider>
          <IndexPage />
        </DBProvider>
      </AuthProvider>
    ),
    children: [],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export { routes };
