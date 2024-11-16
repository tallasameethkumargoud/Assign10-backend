import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1976d2, #42a5f5)",
        color: "#fff",
        fontFamily: "'Poppins', sans-serif",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Welcome to Your Career Portal
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          marginBottom: "30px",
          maxWidth: "600px",
          lineHeight: "1.5",
        }}
      >
        Unlock endless opportunities with our platform. Start exploring job
        listings and connect with leading companies to elevate your career.
      </p>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => navigate("/job-listings")}
          style={{
            backgroundColor: "#fff",
            color: "#1976d2",
            fontWeight: "bold",
            border: "none",
            padding: "15px 30px",
            fontSize: "1rem",
            borderRadius: "30px",
            cursor: "pointer",
            transition: "0.3s",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
          }}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = "#1976d2") &&
            (e.target.style.color = "#fff")
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = "#fff") &&
            (e.target.style.color = "#1976d2")
          }
        >
          Explore Jobs
        </button>
        <button
          onClick={() => navigate("/company-showcase")}
          style={{
            backgroundColor: "#fff",
            color: "#1976d2",
            fontWeight: "bold",
            border: "none",
            padding: "15px 30px",
            fontSize: "1rem",
            borderRadius: "30px",
            cursor: "pointer",
            transition: "0.3s",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
          }}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = "#1976d2") &&
            (e.target.style.color = "#fff")
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = "#fff") &&
            (e.target.style.color = "#1976d2")
          }
        >
          View Companies
        </button>
      </div>
      <button
        onClick={handleLogout}
        style={{
          marginTop: "40px",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          color: "#fff",
          fontWeight: "bold",
          border: "2px solid #fff",
          padding: "15px 30px",
          fontSize: "1rem",
          borderRadius: "30px",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onMouseOver={(e) =>
          (e.target.style.backgroundColor = "#fff") &&
          (e.target.style.color = "#1976d2")
        }
        onMouseOut={(e) =>
          (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)") &&
          (e.target.style.color = "#fff")
        }
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
