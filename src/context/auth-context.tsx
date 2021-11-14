import React, {ReactNode, useState} from "react";
import {Login, Register, Logout} from "../auth-provider";
import {AuthForm, User} from "../interface/TypeUser";

const AuthContext = React.createContext<{
    user: User | null,
    LoginAPI: (form: AuthForm) => Promise<void>,
    RegisterAPI: (form: AuthForm) => Promise<void>,
    logoutAPI: () => Promise<void>,
} | undefined>(undefined);

AuthContext.displayName = 'AuthContext';

const AuthProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<User | null>(null);

    const LoginAPI = (form: AuthForm) => Login(form).then(setUser);
    // @ts-ignore
    const RegisterAPI = (form: AuthForm) => Register(form).then(setUser);
    const logoutAPI = () => Logout().then(() => setUser(null));

    return <AuthContext.Provider children={children} value={{user, LoginAPI, RegisterAPI, logoutAPI}} />
}

const useAuth = () => {
  const context = React.useContext(AuthContext);

  if (!context) {
      throw new Error('useAuth 必须在 AuthContext 中使用')
  }

  return context;
}

export {
    useAuth,
    AuthProvider,
}
