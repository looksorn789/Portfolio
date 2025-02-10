import React, { useState } from "react";
import "../components/Styles/Socials.css";

const Socials = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000); // Hide message after 3 seconds
  };

  return (
    <div className="socials-page">
      <h2 className="socials-header">Socials</h2>
      <div className="socials-container">
        <div className="left-content">
          <p>
            Hi everyone! Here’s my contact information. Feel free to reach out to me anytime! <br />
            <br />
            <strong>First Name:</strong> Pornthep <br />
            <strong>Last Name:</strong> Bootchot <br />
            <strong>Email:</strong>{" "}
            <span
              className="copyable"
              onClick={() => handleCopy("patandjisoo@gmail.com")}
            >
              patandjisoo@gmail.com
            </span>{" "}
            <br />
            <strong>Phone Number:</strong>{" "}
            <span
              className="copyable"
              onClick={() => handleCopy("3237039533")}
            >
              323-703-9533
            </span>{" "}
            <br />
            <strong>Location:</strong> Bellflower, CA
          </p>
        </div>
      </div>
      {showMessage && (
        <div className="clipboard-message">Copied to Clipboard!</div>
      )}
    </div>
  );
};

export default Socials;
