import React, { useState } from "react";
import "./ContactUsPage.css";
import Header from "../Header/Header";

const ContactUsPage = ({ onAddContact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      name.trim().length === 0 ||
      email.trim().length === 0 ||
      phone.trim().length === 0
    ) {
      return;
    }

    const newContactObj = {
      name: name,
      email: email,
      phone: phone,
    };
    console.log(newContactObj);
    onAddContact(newContactObj);
    setName("");
    setEmail("");
    setPhone("");
  };

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const phoneHandler = (event) => {
    setPhone(event.target.value);
  };

  return (
    <div>
      <Header />
      <div className="form-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={nameHandler}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={emailHandler}
              required
            />
          </label>
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={phoneHandler}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
