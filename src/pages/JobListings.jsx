import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import axios from "axios";

const JobListings = () => {
  const [jobPosts, setJobPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch job listings from the backend
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:5001/Job/getJobs"); // Replace with your API endpoint
        setJobPosts(response.data); // Update the state with the fetched data
        setLoading(false);
      } catch (error) {
        console.error("Error fetching job listings:", error);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading job listings...</p>;
  }

  return (
    <div
      style={{
        padding: "20px",
        background: "#f9f9f9",
        minHeight: "100vh",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#1976d2", marginBottom: "30px" }}>
        Job Listings
      </h1>
      {jobPosts.length === 0 ? (
        <p style={{ textAlign: "center", color: "#888" }}>No job listings available.</p>
      ) : (
        jobPosts.map((job) => (
          <Card
            key={job._id}
            style={{
              maxWidth: 600,
              margin: "20px auto",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <CardContent>
              <Typography
                variant="h5"
                style={{
                  color: "#1976d2",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                {job.jobTitle}
              </Typography>
              <Typography
                style={{
                  fontSize: "16px",
                  color: "#555",
                  lineHeight: "1.6",
                  marginBottom: "10px",
                }}
              >
                {job.description}
              </Typography>
              <Typography
                style={{
                  fontSize: "14px",
                  color: "#888",
                  marginBottom: "20px",
                }}
              >
                Company: {job.companyName} | Salary: ${job.salary}
              </Typography>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#1976d2",
                  color: "#fff",
                  padding: "10px 20px",
                  textTransform: "none",
                }}
                href={job.applyLink || "#"} // Use the apply link if available
                target="_blank"
              >
                Apply Now
              </Button>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};

export default JobListings;
