import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { Link } from "react-router-dom";
import "./Authentication.css";
import { useAuth } from "../Store/auth-coontext";

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useAuth();

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter both email and password");
      return;
    }
    setIsLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const token = await userCredential.user.getIdToken();
      console.log(token, "SignIn token");
      setToken(token);
      console.log("User signed in successfully");
    } catch (error) {
      console.error("Error signing in:", error);
      alert("Invalid credentials. Please try again.");
    } finally {
      setIsLoading(false);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="form-container">
      <h3>Sign In</h3>
      <Form onSubmit={handleSignIn}>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="form-input"
            autoComplete="current-password"
          />
        </FloatingLabel>

        <div className="button-container">
          <Button
            type="submit"
            variant="primary"
            disabled={isLoading}
            className="submit-button"
          >
            {isLoading ? (
              <>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                  className="spinner"
                />
                Loading...
              </>
            ) : (
              "Sign In"
            )}
          </Button>
        </div>

        <div className="forgot-password">
          <Link to="/forgotpassword">Forgot Password?</Link>
        </div>
      </Form>
    </div>
  );
};

export default SignIn;
