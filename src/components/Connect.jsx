import React, { useRef, useState } from "react";
import "../css/connect.css";
import axios from "axios";

const Connect = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const pattern = /@.*\./;

  const handleSend = (e) => {
    e.preventDefault();

    if(name==='' || email==='' || message==='' || !pattern.test(email)){
      alert('Please add proper details')
      return
    }
    const data = {
      service_id: import.meta.env.VITE_serviceId,
      template_id: import.meta.env.VITE_templateId,
      user_id: import.meta.env.VITE_publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "sweti",
        message: message,
      },
    };
    try {
      const res = axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      alert(
        "Thank you for your response. Will get back to you as soon as possible"
      );
      setEmail("");
      setMessage("");
      setName("");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="connect-container">
      <p>Connect With Me!</p>
      <div className="content">
        <div className="description">
          <form onSubmit={handleSend} className="form-container" >
            <label>Your Name</label>
            <input
              name="name"
              value={name}
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
              className="input-style"
            ></input>
            <label>Your Email</label>
            <input
              name="email"
              value={email}
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              className="input-style"
            ></input>
            <label>Message</label>
            <textarea
              name="message"
              value={message}
              placeholder="type here..."
              onChange={(e) => setMessage(e.target.value)}
              className="textarea-style"
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Connect;
