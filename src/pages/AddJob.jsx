import React, { useState } from "react";
import axios from "axios";

const AddJob = () => {
    const [formData, setFormData] = useState({
        companyName: "",
        jobTitle: "",
        description: "",
        salary: "",
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:5001/Job/create",
                formData,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log("Server Response:", response.data); // Log the server response

            setMessage("Job added successfully!");
            setFormData({
                companyName: "",
                jobTitle: "",
                description: "",
                salary: "",
            });
        } catch (error) {
            setMessage("Failed to add job. Please try again.");
        }
    };

    return (
        <div style={{ maxWidth: "600px", margin: "50px auto", fontFamily: "Arial" }}>
            <h2 style={{ textAlign: "center" }}>Add a New Job</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "15px" }}>
                    <label>Company Name</label>
                    <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        style={{
                            display: "block",
                            width: "100%",
                            padding: "8px",
                            marginTop: "5px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                        }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label>Job Title</label>
                    <input
                        type="text"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        required
                        style={{
                            display: "block",
                            width: "100%",
                            padding: "8px",
                            marginTop: "5px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                        }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label>Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        rows="4"
                        style={{
                            display: "block",
                            width: "100%",
                            padding: "8px",
                            marginTop: "5px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                        }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label>Salary</label>
                    <input
                        type="number"
                        name="salary"
                        value={formData.salary}
                        onChange={handleChange}
                        required
                        style={{
                            display: "block",
                            width: "100%",
                            padding: "8px",
                            marginTop: "5px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                        }}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        display: "block",
                        width: "100%",
                        padding: "10px",
                        backgroundColor: "#4CAF50",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "16px",
                    }}
                >
                    Add Job
                </button>
            </form>
            {message && (
                <p style={{ textAlign: "center", marginTop: "15px", color: message.includes("successfully") ? "green" : "red" }}>
                    {message}
                </p>
            )}
        </div>
    );
};

export default AddJob;
