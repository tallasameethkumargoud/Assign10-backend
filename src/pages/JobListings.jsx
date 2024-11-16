import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const jobPosts = [
  {
    id: 1,
    title: "Full Stack Developer",
    description:
      "Join our dynamic team to work on cutting-edge technologies. Develop and maintain sophisticated web applications for our diverse client base.",
    lastUpdated: "Last updated 2 days ago",
    applyLink: "https://example.com/apply/full-stack-developer",
  },
  {
    id: 2,
    title: "Digital Marketing Specialist",
    description:
      "Elevate our digital marketing strategies to promote our innovative products. Proficiency in SEO, SEM, and social media marketing is highly valued.",
    lastUpdated: "Last updated 1 day ago",
    applyLink: "https://example.com/apply/digital-marketing-specialist",
  },
  {
    id: 3,
    title: "UX/UI Designer",
    description:
      "Shape engaging user experiences and create visually captivating designs. Work alongside cross-functional teams to turn ideas into reality.",
    lastUpdated: "Last updated 4 hours ago",
    applyLink: "https://example.com/apply/ux-ui-designer",
  },
  {
    id: 4,
    title: "Data Scientist",
    description:
      "Leverage advanced analytics and machine learning to uncover insights from vast data sets. Proficiency with Python and R is a must.",
    lastUpdated: "Last updated 3 days ago",
    applyLink: "https://example.com/apply/data-scientist",
  },
  {
    id: 5,
    title: "Customer Support Representative",
    description:
      "Deliver unparalleled customer service and support. Exceptional communication skills and a knack for solving problems are key.",
    lastUpdated: "Last updated 6 hours ago",
    applyLink: "https://example.com/apply/customer-support-representative",
  },
];

const JobListings = () => {
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
      {jobPosts.map((job) => (
        <Card
          key={job.id}
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
              {job.title}
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
              {job.lastUpdated}
            </Typography>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#1976d2",
                color: "#fff",
                padding: "10px 20px",
                textTransform: "none",
              }}
              href={job.applyLink}
              target="_blank"
            >
              Apply Now
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default JobListings;
