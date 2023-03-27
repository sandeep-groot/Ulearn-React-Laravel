import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import Layout from "../layout";

const RouterComponent = () => {
  const routes = [
    {
      name: "Home",
      element: <HomePage />,
      url: "/",
      isPublic: true,
      layout: Layout,
    },
    {
      name: "Login",
      element: <LoginPage />,
      url: "/login",
      isPublic: false,
      layout: Layout,
    },
  ];

  return (
    <Routes>
      {routes.map((route, index) => {
        if (route.isPublic) {
          if (route?.layout) {
            const Layout = route.layout;
            return (
              <Route
                key={index}
                path={route?.url}
                element={<Layout>{route?.element}</Layout>}
              />
            );
          }
        } else {
          return (
            <Route
              key={index}
              path={route?.url}
              element={<PrivateRoute> {route?.element} </PrivateRoute>}
            />
          );
        }
      })}
    </Routes>
  );
};

export default RouterComponent;
