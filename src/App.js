import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import Footer component
import ProtectedRoute from "./utils/ProtectedRoute";
import Login from "./components/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import JobListings from "./pages/JobListings";
import Contact from "./pages/Contact";
import CompanyShowcase from "./pages/CompanyShowcase";
import AdminPage from "./pages/AdminPage";
import AddJob from "./pages/AddJob";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute allowedRoles={["employee"]}>
              <About />
            </ProtectedRoute>
          }
        />
        <Route
          path="/job-listings"
          element={
            <ProtectedRoute allowedRoles={["employee"]}>
              <JobListings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute allowedRoles={["employee"]}>
              <Contact />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/createjobpost"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AddJob />
            </ProtectedRoute>
          }
        />
        <Route
          path="/company-showcase"
          element={
            <ProtectedRoute allowedRoles={["employee"]}>
              <CompanyShowcase />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Login />} />
      </Routes>
      <Footer /> {/* Add Footer here */}
    </Router>
  );
};

export default App;
