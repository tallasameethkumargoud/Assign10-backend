import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authToken, userType } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar style={{ justifyContent: "space-between" }}>
          {/* Admin Links */}
          {authToken && userType === "admin" && (
            <Box display="flex" gap="20px">
              <Button color="inherit" component={Link} to="/admin">
                Admin Panel
              </Button>
              <Button color="inherit" component={Link} to="/createjobpost">
                Job Post
              </Button>
            </Box>
          )}

          {/* Employee Links */}
          {authToken && userType === "employee" && (
            <Box display="flex" gap="20px">
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
            </Box>
          )}

          {/* Logout Button */}
          {authToken ? (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
