import { createContext, useState, useContext, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = createContext({ user: '' });

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState("");

  const value = {
    user,
  };

  useEffect(() => {
    console.log(user);
    const unsubscribed = auth.onAuthStateChanged((user: any) => {
      setUser(user);
    });
    return () => {
      unsubscribed();
    };
  });

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
