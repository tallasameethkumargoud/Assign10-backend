import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1976d2",
        color: "white",
        textAlign: "center",
        padding: "10px 0",
        position: "fixed",
        bottom: 0,
        width: "100%",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Job Portal. All Rights Reserved.
      </Typography>
      <Typography variant="body2" sx={{ marginTop: "5px" }}>
        <Link
          href="/terms"
          color="inherit"
          underline="hover"
          sx={{ marginRight: "10px" }}
        >
          Terms of Service
        </Link>
        |
        <Link
          href="/privacy"
          color="inherit"
          underline="hover"
          sx={{ marginLeft: "10px" }}
        >
          Privacy Policy
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
