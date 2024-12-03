import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem("authToken");

                if (!token) {
                    navigate("/login"); // Redirect if not authenticated
                    return;
                }

                const response = await axios.get("http://localhost:5001/user/getAll", {
                });

                console.log(response.data);

                setUsers(response.data);
                setLoading(false);
            } catch (err) {
                setError("Error fetching users.");
                setLoading(false);
            }
        };

        fetchUsers();
    }, [navigate]);

    if (loading) {
        return <p>Loading users...</p>;
    }

    if (error) {
        return <p style={{ color: "red" }}>{error}</p>;
    }

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1>Admin: Employee List</h1>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr style={{ backgroundColor: "#4CAF50", color: "white" }}>
                        <th style={{ padding: "10px", textAlign: "left" }}>Name</th>
                        <th style={{ padding: "10px", textAlign: "left" }}>Email</th>
                        <th style={{ padding: "10px", textAlign: "left" }}>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td style={{ padding: "10px" }}>{user.fullName}</td>
                            <td style={{ padding: "10px" }}>{user.email}</td>
                            <td style={{ padding: "10px" }}>{user.type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminPage;
