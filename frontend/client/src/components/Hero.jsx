import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <h1>Raise Your Concern,<br />We Are Here to Help</h1>

        <p>
          Register your complaint online easily and get
          it resolved as soon as possible.
        </p>

        <div className="hero-buttons">
          <button className="register-btn">
            Register a Complaint
          </button>

          <button className="track-btn">
            Track Your Complaint
          </button>
        </div>

      </div>

      <div className="hero-right">

        <img
          src="https://static.vecteezy.com/system/resources/previews/066/870/678/non_2x/woman-customer-service-representative-working-at-a-desk-she-is-typing-on-a-laptop-vector.jpg"
          alt="Complaint"
        />

      </div>

    </section>
  );
}

export default Hero;