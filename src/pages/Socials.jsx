import React, { useState } from "react";
import "../components/Styles/Socials.css";

const Socials = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2500);
  };

  return (
    <section className="socials-page">
      <h1 className="socials-header">Let's Connect</h1>

      <p className="socials-description">
        Whether you're looking for a software developer, have a project in mind,
        or simply want to connect, I'd be happy to hear from you.
      </p>

      <div className="social-grid">

        <div
          className="social-card"
          onClick={() => handleCopy("patandjisoo@gmail.com")}
        >
          <h3>📧 Email</h3>
          <p>patandjisoo@gmail.com</p>
          <span>Click to Copy</span>
        </div>

        <div
          className="social-card"
          onClick={() => handleCopy("3237039533")}
        >
          <h3>📱 Phone</h3>
          <p>(323) 703-9533</p>
          <span>Click to Copy</span>
        </div>

        <a
          href="https://github.com/looksorn789"
          target="_blank"
          rel="noopener noreferrer"
          className="social-card"
        >
          <h3>💻 GitHub</h3>
          <p>github.com/looksorn789</p>
          <span>View Profile</span>
        </a>

        <a
          href="https://www.linkedin.com/in/pornthep-bootchot-35401225b/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-card"
        >
          <h3>💼 LinkedIn</h3>
          <p>Connect with me</p>
          <span>Open Profile</span>
        </a>

      </div>

      <p className="location">
        📍 Bellflower, California
      </p>

      {showMessage && (
        <div className="clipboard-message">
          ✓ Copied to Clipboard
        </div>
      )}
    </section>
  );
};

export default Socials;