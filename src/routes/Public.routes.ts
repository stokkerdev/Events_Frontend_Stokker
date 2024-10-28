import { lazy } from "react";
import { Route } from "../interfaces/Route.interfaces";

export enum PUBLICROUTES {
  LANDING = "/",
  LOGIN = "/login",
  SIGNUP = "/signup",
}

// Here are routes to unauthenticated role
export const PublicRoutes: Route[] = [
  {
    component: lazy(() => import("../pages/common/LandingPage")),
    index: true,
    path: PUBLICROUTES.LANDING,
  },
  {
    component: lazy(() => import("../pages/auth/LoginPage")),
    path: PUBLICROUTES.LOGIN,
  },
  {
    component: lazy(() => import("../pages/auth/SingupPage")),
    path: PUBLICROUTES.SIGNUP,
  },
];
