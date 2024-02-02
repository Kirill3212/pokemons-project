import { Navigate } from "react-router";

import { localStorageHelpers } from "../utils/localStorageHelpers";

type PrivateRouteProps = {
  children: JSX.Element;
};

export function PrivateRoute(props: PrivateRouteProps) {
  const { children } = props;
  const isAuthorized = localStorageHelpers.getAuth();

  return isAuthorized ? children : <Navigate to={"/SignIn"} />;
}
