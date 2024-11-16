import React from "react";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar style={{ justifyContent: "center", gap: "20px" }}>
          <Button color="inherit" component={Link} to="/home">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/job-listings">
            Job Listings
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
          <Button color="inherit" component={Link} to="/company-showcase">
            Company Showcase
          </Button>
        </Toolbar>
      </AppBar>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          backgroundColor: "#1976d2",
          color: "white",
          textAlign: "center",
          padding: "10px 0",
          marginTop: "auto",
          position: "fixed",
          bottom: 0,
          width: "100%",
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} Job Portal. All Rights Reserved.
        </Typography>
        <Typography variant="body2" sx={{ marginTop: "5px" }}>
          <a
            href="/terms"
            style={{ color: "white", textDecoration: "none", marginRight: "10px" }}
          >
            Terms of Service
          </a>
          |
          <a
            href="/privacy"
            style={{
              color: "white",
              textDecoration: "none",
              marginLeft: "10px",
            }}
          >
            Privacy Policy
          </a>
        </Typography>
      </Box>
    </div>
  );
};

export default Navbar;
