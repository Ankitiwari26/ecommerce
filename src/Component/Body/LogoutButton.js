import React from "react";
import Button from "react-bootstrap/Button";
import { useAuth } from "../Store/auth-coontext";

const LogoutButton = () => {
  const { handleSignOut } = useAuth();

  const handleLogout = async () => {
    try {
      await handleSignOut();
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <Button onClick={handleLogout} variant="secondary">
      Logout
    </Button>
  );
};

export default LogoutButton;
