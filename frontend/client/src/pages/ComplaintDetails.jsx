import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/ComplaintDetails.css";

function ComplaintDetails() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [category, setCategory] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    const imageUrls = files.map(file =>
      URL.createObjectURL(file)
    );

    setImages(imageUrls);
  };

  const handleSubmit = () => {

    const complaintId =
      "CMP" + Math.floor(100000 + Math.random() * 900000);

    const complaint = {

      complaintId,

      name: state?.fullName,
      email: state?.email,
      mobile: state?.mobile,
      address: state?.address,
      city: state?.city,
      state: state?.state,

      category,
      subject,
      description,

      images,

      status: "Pending"
    };

    const complaints =
      JSON.parse(localStorage.getItem("complaints")) || [];

    complaints.push(complaint);

    localStorage.setItem(
      "complaints",
      JSON.stringify(complaints)
    );

    navigate("/success", {
      state: complaint
    });
  };

  return (
    <div className="complaint-page">

      <h1>Complaint Details</h1>

      <div className="progress">
        <div className="done">✓</div>
        <div className="active">2</div>
        <div>3</div>
      </div>

      <div className="complaint-card">

        <h3>Registered User Details</h3>

        <div className="details-box">

          <p><b>Name:</b> {state?.fullName}</p>
          <p><b>Email:</b> {state?.email}</p>
          <p><b>Mobile:</b> {state?.mobile}</p>
          <p><b>Address:</b> {state?.address}</p>
          <p><b>State:</b> {state?.state}</p>
          <p><b>City:</b> {state?.city}</p>

        </div>

        <div className="form-group">

          <label>Category</label>

          <select
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
          >

            <option value="">Select Category</option>
            <option>Street Lights</option>
            <option>Water Supply</option>
            <option>Road Damage</option>
            <option>Garbage Collection</option>
            <option>Drainage</option>
            <option>Electricity</option>
            <option>Public Transport</option>
            <option>Others</option>

          </select>

        </div>

        <div className="form-group">

          <label>Subject</label>

          <input
            type="text"
            value={subject}
            onChange={(e)=>setSubject(e.target.value)}
            placeholder="Enter Subject"
          />

        </div>

        <div className="form-group">

          <label>Description</label>

          <textarea
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            placeholder="Enter Description"
          />

        </div>

        <div className="form-group">

          <label>Upload Images</label>

          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
          />

        </div>

        {images.length>0 && (

          <div className="image-grid">

            {images.map((img,index)=>(

              <img
                key={index}
                src={img}
                alt=""
                className="preview-image"
              />

            ))}

          </div>

        )}

        <div className="buttons">

          <button
            onClick={()=>navigate("/register")}
          >
            Back
          </button>

          <button
            className="next-btn"
            onClick={handleSubmit}
          >
            Submit Complaint
          </button>

        </div>

      </div>

    </div>
  );
}

export default ComplaintDetails;