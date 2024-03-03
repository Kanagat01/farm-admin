import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { isTokenExpired } from "~/shared/api";

export type AuthContextType = {
  isAuthenticated: boolean;
  setAuth: Dispatch<SetStateAction<boolean>>;
};

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  setAuth: () => {},
});

export const withAuthContext = (component: () => ReactNode) => () => {
  let jwtToken = localStorage.getItem("refresh_token");
  let isAuth = false;
  if (jwtToken) {
    isTokenExpired(jwtToken);
    isAuth = true;
  }
  const [isAuthenticated, setAuth] = useState(isAuth);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuth }}>
      {component()}
    </AuthContext.Provider>
  );
};
