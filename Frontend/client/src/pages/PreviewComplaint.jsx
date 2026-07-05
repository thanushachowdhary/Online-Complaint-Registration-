import { useLocation, useNavigate } from "react-router-dom";
import "../styles/PreviewComplaint.css";

function PreviewComplaint() {

  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state) {
    return <h2>No Complaint Data Found</h2>;
  }

  const handleSubmit = () => {

    const complaintId =
      "CMP" + Math.floor(100000 + Math.random() * 900000);

    const complaint = {
      complaintId,
      ...state,
      status: "Pending"
    };

    localStorage.setItem("complaint", JSON.stringify(complaint));

    navigate("/success", {
      state: complaint
    });

  };

  return (

    <div className="preview-page">

      <h1>Preview Complaint</h1>

      <div className="preview-card">

        <h3>Personal Details</h3>

        <p><b>Name :</b> {state.fullName}</p>

        <p><b>Email :</b> {state.email}</p>

        <p><b>Mobile :</b> {state.mobile}</p>

        <p><b>Address :</b> {state.address}</p>

        <p><b>State :</b> {state.state}</p>

        <p><b>City :</b> {state.city}</p>

        <hr />

        <h3>Complaint Details</h3>

        <p><b>Category :</b> {state.category}</p>

        <p><b>Subject :</b> {state.subject}</p>

        <p><b>Description :</b> {state.description}</p>

        {state.images.length > 0 && (

          <>

            <h3>Uploaded Image</h3>

            <img
              src={state.images[0]}
              alt="Complaint"
              className="preview-image"
            />

          </>

        )}

        <div className="buttons">

          <button
            className="back-btn"
            onClick={() => navigate(-1)}
          >
            Back
          </button>

          <button
            className="submit-btn"
            onClick={handleSubmit}
          >
            Submit Complaint
          </button>

        </div>

      </div>

    </div>

  );

}

export default PreviewComplaint;