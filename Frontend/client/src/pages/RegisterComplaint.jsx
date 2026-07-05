import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RegisterComplaint.css";

function RegisterComplaint() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    address: "",
    state: "",
    city: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {

    const {
      fullName,
      email,
      mobile,
      address,
      state,
      city
    } = formData;

    if (
      !fullName ||
      !email ||
      !mobile ||
      !address ||
      !state ||
      !city
    ) {
      alert("Please fill all fields");
      return;
    }

    navigate("/details", {
      state: formData
    });

  };

  return (

    <div className="register-page">

      <h1>Register a Complaint</h1>

      <p>Please fill in your details below.</p>

      <div className="progress">

        <div className="active">1</div>

        <div>2</div>

        <div>3</div>

      </div>

      <div className="register-card">

        <div className="form-group">

          <label>Full Name</label>

          <input
            type="text"
            name="fullName"
            placeholder="Enter Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>Email</label>

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>Mobile Number</label>

          <input
            type="text"
            name="mobile"
            placeholder="Enter Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>Address</label>

          <textarea
            name="address"
            placeholder="Enter Address"
            value={formData.address}
            onChange={handleChange}
          ></textarea>

        </div>

        <div className="form-group">

          <label>State</label>

          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
          >

            <option value="">Select State</option>

            <option>Andhra Pradesh</option>

            <option>Telangana</option>

            <option>Tamil Nadu</option>

            <option>Karnataka</option>

          </select>

        </div>

        <div className="form-group">

          <label>City</label>

          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
          >

            <option value="">Select City</option>

            <option>Kadapa</option>

            <option>Tirupati</option>

            <option>Hyderabad</option>

            <option>Chennai</option>

            <option>Bangalore</option>

          </select>

        </div>

        <button
          className="next-btn"
          onClick={handleNext}
        >
          Next →
        </button>

      </div>

    </div>

  );

}

export default RegisterComplaint;