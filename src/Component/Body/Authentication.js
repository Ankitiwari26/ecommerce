// import React, { useState, useEffect } from "react";
// import FloatingLabel from "react-bootstrap/FloatingLabel";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Spinner from "react-bootstrap/Spinner";
// import "./Authentication.css"; // Import your CSS file

// const Authentication = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [isEmail, setIsEmail] = useState("");
//   const [isPassword, setIsPassword] = useState("");

//   const emailHandler = (e) => {
//     setIsEmail(e.target.value);
//     console.log(isEmail);
//   };

//   const passwordHandler = (e) => {
//     setIsPassword(e.target.value);
//   };
//   useEffect(() => {
//     console.log(isEmail);
//   }, [isEmail]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isEmail.trim().length === 0 || isPassword.trim().length === 0) {
//       return;
//     }
//     const newSignUpDetailsObj = {
//       email: isEmail,
//       password: isPassword,
//     };

//     setIsEmail("");
//     setIsPassword("");
//     handleSignUp(newSignUpDetailsObj);
//     console.log(newSignUpDetailsObj);
//   };

//   const handleSignUp = (newSignUpDetailsObj) => {
//     // Perform sign up logic here, e.g., make API request
//     setIsLoading(true);
//     fetch(
//       "https://securetoken.googleapis.com/v1/token?key=AIzaSyDJNq_CPfgRUxwU3tKtNHBaLo-ZipgvkiU",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newSignUpDetailsObj),
//       }
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Success:", data);
//       })
//       .catch((error) => {
//         console.error("Error adding movie:", error);
//         setIsLoading(false);
//       });
//   };

//   const handleSignIn = () => {
//     // Perform sign in logic here
//   };

//   return (
//     <div className="form-container">
//       <Form onSubmit={handleSubmit}>
//         <FloatingLabel
//           controlId="floatingInput"
//           label="Email address"
//           className="mb-3"
//         >
//           <Form.Control
//             type="email"
//             placeholder="name@example.com"
//             value={isEmail}
//             onChange={emailHandler}
//             className="form-input"
//           />
//         </FloatingLabel>
//         <FloatingLabel controlId="floatingPassword" label="Password">
//           <Form.Control
//             type="password"
//             value={isPassword}
//             onChange={passwordHandler}
//             placeholder="Password"
//             className="form-input"
//             autoComplete="current-password"
//           />
//         </FloatingLabel>

//         <div className="button-container">
//           <Button
//             type="submit"
//             variant="primary"
//             onClick={handleSubmit}
//             className="submit-button"
//           >
//             {isLoading ? (
//               <>
//                 <Spinner
//                   as="span"
//                   animation="grow"
//                   size="sm"
//                   role="status"
//                   aria-hidden="true"
//                   className="spinner"
//                 />
//                 Loading...
//               </>
//             ) : (
//               "Sign Up"
//             )}
//           </Button>
//           <span className="sign-in-text" onClick={handleSignIn}>
//             Already have an account? Sign in
//           </span>
//         </div>
//       </Form>
//     </div>
//   );
// };

// export default Authentication;

import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import "./Authentication.css"; // Import your CSS file
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import SignIn from "./SignIn";
import { useAuth } from "../Store/auth-coontext";

const Authentication = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useAuth();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (email.trim().length === 0 || password.trim().length === 0) {
  //     return;
  //   }
  //   const newSignUpDetailsObj = {
  //     email: email,
  //     password: password,
  //   };

  //   setEmail("");
  //   setPassword("");
  //   // handleSignUp(newSignUpDetailsObj);
  //   console.log(newSignUpDetailsObj);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (email.trim() === "" || password.trim() === "") {
  //     alert("Please enter both email and password");
  //     return;
  //   }

  //   setIsLoading(true);
  //   try {
  //     const response = await fetch(
  //       "https://securetoken.googleapis.com/v1/token?key=AIzaSyDJNq_CPfgRUxwU3tKtNHBaLo-ZipgvkiU",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           email: email,
  //           password: password,
  //           returnSecureToken: true,
  //           grant_type: "password",
  //         }),
  //       }
  //     );
  //     const data = await response.json();
  //     console.log("Success:", data);
  //   } catch (error) {
  //     console.error("Error adding movie:", error);
  //   } finally {
  //     setIsLoading(false);
  //     setEmail("");
  //     setPassword("");
  //   }
  // };

  // const emailHandler = (e) => {
  //       setEmail(e.target.value);
  //       console.log(email);
  //     };

  //     const passwordHandler = (e) => {
  //       setPassword(e.target.value);
  //     };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter both email and password");
      return;
    }
    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = auth.currentUser;
      const token = await userCredential.user.getIdToken();
      setToken(token);
      console.log(user);
      console.log("User Registerd Successfully");
    } catch (error) {
      console.log(error);
      if (error) {
        alert("Already have an account!! Please Sign in");
      }
      console.log("this is a error");
    } finally {
      setIsLoading(false);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="form-container">
      <Form onSubmit={handleSignUp}>
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
              "Sign Up"
            )}
          </Button>
          <span className="sign-in-text">
            Already have an account?{" "}
            <Link to="/signin" className="sign-in-link">
              Sign in
            </Link>
          </span>
        </div>
      </Form>
    </div>
  );
};

export default Authentication;
