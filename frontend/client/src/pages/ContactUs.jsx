import { useState } from "react";
import "../styles/ContactUs.css";

function ContactUs() {

  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {

    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    alert("✅ Message Sent Successfully!\n\nWe will contact you soon.");

    setContact({
      name: "",
      email: "",
      subject: "",
      message: ""
    });

  };

  return (

    <div className="contact-page">

      <div className="contact-card">

        <h1>Contact Us</h1>

        <p className="subtitle">
          Have a question or need assistance? Feel free to contact us.
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={contact.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={contact.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={contact.subject}
            onChange={handleChange}
            required
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Enter your message..."
            value={contact.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

        <div className="contact-info">

          <h2>Contact Information</h2>

          <p>
            📍 Municipal Corporation Office,<br />
            Kadapa, Andhra Pradesh - 516001
          </p>

          <p>
            📞 +91 98765 43210
          </p>

          <p>
            📧 support@complaintsystem.com
          </p>

          <p>
            🕒 Monday - Friday (9:00 AM - 6:00 PM)
          </p>

        </div>

      </div>

    </div>

  );

}

export default ContactUs;