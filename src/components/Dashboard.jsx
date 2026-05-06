import React from "react";
import API from "../api/api.jsx";

function Dashboard() {
  const getData = async () => {
    try {
      const res = await API.get("/auth/protected");
      alert(res.data.message);
    } catch {
      alert("Unauthorized");
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={getData}>Call Protected API</button>
    </div>
  );
}

export default Dashboard;