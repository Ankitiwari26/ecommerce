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
          localStorage.setItem("authToken", token);
          localStorage.setItem("loginTimestamp", Date.now().toString());
          setAutoLogout(5 * 60 * 1000);
        });
      } else {
        setCurrentUser(null);
        setToken(null);
        localStorage.removeItem("authToken");
        localStorage.removeItem("loginTimestamp");
      }
    });

    checkTokenExpiration();

    return () => unsubscribe();
  }, []);

  const checkTokenExpiration = () => {
    const loginTimestamp = localStorage.getItem("loginTimestamp");
    if (loginTimestamp) {
      const currentTime = Date.now();
      if (currentTime - parseInt(loginTimestamp) > 5 * 60 * 1000) {
        // 5 minutes
        handleSignOut();
      }
    }
  };

  const setAutoLogout = (milliseconds) => {
    setTimeout(() => {
      handleSignOut();
    }, milliseconds);
  };

  const handleSignOut = async () => {
    const auth = getAuth();
    await signOut(auth);
    setCurrentUser(null);
    setToken(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("loginTimestamp");
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
