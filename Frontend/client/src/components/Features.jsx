import "../styles/Features.css";

function Features() {
  return (
    <section className="features">

      <div className="feature-card">
        <h2>📝</h2>
        <h3>Easy Registration</h3>
        <p>Register your complaint in simple steps.</p>
      </div>

      <div className="feature-card">
        <h2>📍</h2>
        <h3>Track Status</h3>
        <p>Track the status of your complaint anytime.</p>
      </div>

      <div className="feature-card">
        <h2>⚡</h2>
        <h3>Faster Resolution</h3>
        <p>We ensure faster resolution of issues.</p>
      </div>

      <div className="feature-card">
        <h2>🔒</h2>
        <h3>Secure & Private</h3>
        <p>Your information is safe and secure.</p>
      </div>

    </section>
  );
}

export default Features;