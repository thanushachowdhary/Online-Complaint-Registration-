import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import RegisterComplaint from "./pages/RegisterComplaint";
import ComplaintDetails from "./pages/ComplaintDetails";
import PreviewComplaint from "./pages/PreviewComplaint";
import Success from "./pages/Success";
import TrackComplaint from "./pages/TrackComplaint";
import ContactUs from "./pages/ContactUs";
import AdminDashboard from "./pages/AdminDashboard";

function Layout() {

  const location = useLocation();

  return (
    <>
      {/* Show Navbar only on Home page */}
      {location.pathname === "/" && <Navbar />}

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<RegisterComplaint />} />

        <Route path="/details" element={<ComplaintDetails />} />

        <Route path="/preview" element={<PreviewComplaint />} />

        <Route path="/success" element={<Success />} />

        <Route path="/track" element={<TrackComplaint />} />

        <Route path="/contact" element={<ContactUs />} />

        <Route path="/admin" element={<AdminDashboard />} />

      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;