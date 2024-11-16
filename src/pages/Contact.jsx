import React from "react";

const Contact = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #1976d2, #42a5f5)",
        color: "#ffffff",
        fontFamily: "'Poppins', sans-serif",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          marginBottom: "20px",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        }}
      >
        Contact Us
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          marginBottom: "10px",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
        }}
      >
        Email:{" "}
        <a
          href="mailto:contact@jobportal.com"
          style={{
            color: "#ffffff",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          contact@jobportal.com
        </a>
      </p>
      <p
        style={{
          fontSize: "1.2rem",
          marginBottom: "20px",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
        }}
      >
        Phone:{" "}
        <a
          href="tel:+11234567890"
          style={{
            color: "#ffffff",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          +1 (123) 456-7890
        </a>
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#ffffff",
            backgroundColor: "#4267B2",
            padding: "10px 20px",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "bold",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          Facebook
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#ffffff",
            backgroundColor: "#1DA1F2",
            padding: "10px 20px",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "bold",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          Twitter
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#ffffff",
            backgroundColor: "#0077B5",
            padding: "10px 20px",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "bold",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Contact;
