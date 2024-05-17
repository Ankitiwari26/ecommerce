import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

const Authemtication = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = () => {
    // Perform sign up logic here, e.g., make API request
    setIsLoading(true);

    // Simulating a delay for demonstration purposes
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>

      {isLoading ? (
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      ) : (
        <Button variant="primary" onClick={handleSignUp}>
          Sign Up
        </Button>
      )}
    </>
  );
};
export default Authemtication;
