// PasswordReset.js
import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase"; // Make sure to correctly import your Firebase config
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import "./Authentication.css"; // Import your CSS file

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      setMessage("Please enter your email address");
      return;
    }
    setIsLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent successfully!");
    } catch (error) {
      console.error("Error sending password reset email:", error);
      setMessage("Error sending password reset email. Please try again.");
    } finally {
      setIsLoading(false);
      setEmail("");
    }
  };

  return (
    <div className="form-container">
      <Form onSubmit={handlePasswordReset}>
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
                Sending...
              </>
            ) : (
              "Reset Password"
            )}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ForgotPassword;
