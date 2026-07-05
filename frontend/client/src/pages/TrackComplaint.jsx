import { useState } from "react";
import "../styles/TrackComplaint.css";

function TrackComplaint() {

  const [complaintId, setComplaintId] = useState("");
  const [complaint, setComplaint] = useState(null);

  const handleTrack = () => {

    const complaints =
      JSON.parse(localStorage.getItem("complaints")) || [];

    const foundComplaint = complaints.find(
      (item) => item.complaintId === complaintId
    );

    if (foundComplaint) {
      setComplaint(foundComplaint);
    } else {
      alert("Complaint ID Not Found");
      setComplaint(null);
    }
  };

  return (
    <div className="track-page">

      <h1>Track Your Complaint</h1>

      <div className="search-box">

        <input
          type="text"
          placeholder="Enter Complaint ID"
          value={complaintId}
          onChange={(e) => setComplaintId(e.target.value)}
        />

        <button onClick={handleTrack}>
          Track
        </button>

      </div>

      {complaint && (

        <div className="track-card">

          <h2 className="status">
            Status : {complaint.status}
          </h2>

          <p>
            <b>Complaint ID :</b> {complaint.complaintId}
          </p>

          <p>
            <b>Name :</b> {complaint.name}
          </p>

          <p>
            <b>Email :</b> {complaint.email}
          </p>

          <p>
            <b>Mobile :</b> {complaint.mobile}
          </p>

          <p>
            <b>Address :</b> {complaint.address}
          </p>

          <p>
            <b>State :</b> {complaint.state}
          </p>

          <p>
            <b>City :</b> {complaint.city}
          </p>

          <p>
            <b>Category :</b> {complaint.category}
          </p>

          <p>
            <b>Subject :</b> {complaint.subject}
          </p>

          <p>
            <b>Description :</b> {complaint.description}
          </p>

          {complaint.images && complaint.images.length > 0 && (

            <div>

              <h3>Uploaded Images</h3>

              <div className="image-grid">

                {complaint.images.map((img, index) => (

                  <img
                    key={index}
                    src={img}
                    alt="Complaint"
                    className="preview-image"
                  />

                ))}

              </div>

            </div>

          )}

        </div>

      )}

    </div>
  );
}

export default TrackComplaint;