import React, {createContext, FC, useContext} from "react";
import {Nullable} from "@frappe/common/utils";
import {User, UserCredential} from 'firebase/auth';
import {useFirebaseAuth} from "../hooks/useFirebaseAuth";

type AuthUserContextType = {
  readonly user: Nullable<User>;
  readonly loading: boolean;
  readonly signInWithCredentials: (email: string, password: string) => Promise<UserCredential>;
  readonly signOut: () => Promise<void>;
}

export const AuthUserContext = createContext<AuthUserContextType>({
  user: null,
  loading: true,
  signInWithCredentials: (email, password) => {
    return undefined;
  },
  signOut: () => Promise.resolve()
});

export const AuthUserProvider: FC = ({ children }) => {
  const { currentUser: user, loading, signInWithCredentials, signOut } = useFirebaseAuth();

  return (
    <AuthUserContext.Provider value={{ user, loading, signInWithCredentials, signOut }} >
      { children }
    </AuthUserContext.Provider>
  )
}

export const useAuth = () => useContext(AuthUserContext);
