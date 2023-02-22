import React from "react";
import { AUTH_ROUTE } from "constants/routes";
import Auth from "pages/auth/Auth";
import { useRoutes } from "react-router-dom";

type Props = {};

const Routes = (props: Props) => {
  return useRoutes([
    {
      path: AUTH_ROUTE,
      element: <Auth />,
    },
  ]);
};

export default Routes;
