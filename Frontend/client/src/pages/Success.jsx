import { Link, useLocation } from "react-router-dom";
import "../styles/Success.css";

function Success() {

  const { state } = useLocation();

  const complaint =
    state || JSON.parse(localStorage.getItem("complaint"));

  if (!complaint) {

    return <h2>No Complaint Found</h2>;

  }

  return (

    <div className="success-page">

      <div className="success-card">

        <div className="checkmark">

          ✓

        </div>

        <h2>

          Complaint Registered Successfully

        </h2>

        <p>

          Your complaint has been submitted successfully.

        </p>

        <div className="complaint-id">

          <h4>Your Complaint ID</h4>

          <h2>{complaint.complaintId}</h2>

        </div>

        <div className="success-buttons">

          <Link to="/track">

            <button className="track-btn">

              Track Complaint

            </button>

          </Link>

          <Link to="/">

            <button className="home-btn">

              Go Home

            </button>

          </Link>

        </div>

      </div>

    </div>
    

  );

}

export default Success;