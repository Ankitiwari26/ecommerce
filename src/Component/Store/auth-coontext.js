import React, { createContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        user.getIdToken().then((token) => {
          setToken(token);
        });
      } else {
        setCurrentUser(null);
        setToken(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    const auth = getAuth();
    await signOut(auth);
    setCurrentUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{ currentUser, token, setToken, handleSignOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
