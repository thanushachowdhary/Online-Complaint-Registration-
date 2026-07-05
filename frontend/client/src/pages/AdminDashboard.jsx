import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/AdminDashboard.css";

function AdminDashboard() {
  const [complaints, setComplaints] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/complaints/all"
      );

      setComplaints(res.data.complaints);
    } catch (err) {
      console.log(err);
      alert("Failed to fetch complaints");
    }
  };

  const filteredComplaints = complaints.filter((item) =>
    item.fullName.toLowerCase().includes(search.toLowerCase()) ||
    item.email.toLowerCase().includes(search.toLowerCase()) ||
    item.mobile.includes(search) ||
    item.complaintType.toLowerCase().includes(search.toLowerCase())
  );

  const total = complaints.length;
  const pending = complaints.filter(
    (c) => c.status === "Pending"
  ).length;
  const progress = complaints.filter(
    (c) => c.status === "In Progress"
  ).length;
  const resolved = complaints.filter(
    (c) => c.status === "Resolved"
  ).length;

  return (
    <div className="admin-dashboard">

      <h1 className="dashboard-title">
        ⚖️ Complaint Management Dashboard
      </h1>

      <div className="dashboard-cards">

        <div className="card total">
          <h2>{total}</h2>
          <p>Total Complaints</p>
        </div>

        <div className="card pending-card">
          <h2>{pending}</h2>
          <p>Pending</p>
        </div>

        <div className="card progress-card">
          <h2>{progress}</h2>
          <p>In Progress</p>
        </div>

        <div className="card resolved-card">
          <h2>{resolved}</h2>
          <p>Resolved</p>
        </div>

      </div>

      <input
        className="search-box"
        type="text"
        placeholder="🔍 Search by Name, Email, Mobile or Complaint Type..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="table-container">

        <table className="complaint-table">

          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Address</th>
              <th>Type</th>
              <th>Subject</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {filteredComplaints.length > 0 ? (

              filteredComplaints.map((item) => (

                <tr key={item._id}>

                  <td>{item.fullName}</td>

                  <td>{item.mobile}</td>

                  <td>{item.email}</td>

                  <td>{item.address}</td>

                  <td>{item.complaintType}</td>

                  <td>{item.subject}</td>

                  <td>

                    <span
                      className={
                        item.status === "Pending"
                          ? "status-pending"
                          : item.status === "In Progress"
                          ? "status-progress"
                          : "status-resolved"
                      }
                    >
                      {item.status}
                    </span>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td colSpan="7" className="no-data">

                  No Complaints Found

                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default AdminDashboard;