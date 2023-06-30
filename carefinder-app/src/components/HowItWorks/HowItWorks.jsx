import "./howitworks.css";

const HowItWorks = () => {
  return (
    <section className="section">
      <div className="overlay__images">
        <img src="./assets/light.png" alt="overlay" className="light" />
        <img src="./assets/medium.png" alt="overlay" className="medium" />
        <img src="./assets/dark.png" alt="overlay" className="dark" />
        <div className="how__it__works-image">
          <img src="./assets/howitworks.png" alt="how_it_works" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
