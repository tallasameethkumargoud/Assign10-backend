import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent, Typography, CardMedia } from "@mui/material";
import axios from "axios"; // Import axios for API calls

const CompanyShowcase = () => {
    const [companies, setCompanies] = useState([]); // Initialize state for companies

// Fetch companies from the API
useEffect(() => {
  axios
    .get("http://localhost:5001/api/companies") // Replace with your API endpoint
    .then((response) => setCompanies(response.data)) // Update state with the API response
    .catch((error) => console.error("Error fetching companies:", error)); // Handle errors
}, []); // Empty dependency array ensures this runs once on component mount


  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Company Showcase</h1>
      <Grid container spacing={4} justifyContent="center">
        {companies.map((company, index) => (
          <Grid item key={index}>
            <Card style={{ maxWidth: 300 }}>
              <CardMedia component="img" height="140" image={`http://localhost:5001${company.image}`} />
              <CardContent>
                <Typography variant="h6">{company.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CompanyShowcase;
