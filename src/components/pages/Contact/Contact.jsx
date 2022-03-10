import React from "react";
import "./Contact.css";
import Navbar from "../../Navbar/Navbar";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="container-contact">
        <h1 className="h1-contact">Contact us</h1>
        <form className="form-contact">
          <label htmlFor="email-input">Contact Email</label>
          <input type="email" id="email-input" />
          <label htmlFor="subject-input">Subject</label>
          <input type="text" id="subject-input" />
          <label htmlFor="content-input">Content</label>
          <input type="text" id="content-input" />
          <button className="btn-send-contact">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
