import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { SignUp } from "./pages/sign-up";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);
