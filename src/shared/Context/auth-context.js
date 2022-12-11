import { createContext } from "react";

export const AuthContext = createContext({
  isLogin: true,
  login: () => {},
  logout: () => {},
});

