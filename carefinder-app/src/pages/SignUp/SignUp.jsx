import "./signup.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../contexts/AuthContext";

const SignUp = () => {
  // states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {createUser} = UserAuth();
  const navigate = useNavigate();

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/signin");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="signup__container">
      <div className="signup__image">
        <div className="signup__image-text">
          <h1>CareFinder</h1>
          <p>
            Getting the best medical care has never been easier. Find the best
            hospitals.
          </p>
        </div>
        <img src="./assets/doctors.jpg" alt="img" />
      </div>
      <div className="signup__content">
        <div className="signup__form">
          <h1>Create an account</h1>
          {/* {error && <p className="error">{error}</p>} */}
          <form onSubmit={handleSubmit} className="signup__form-content">
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" />
            <label>Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
            />
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
            />
            <label>Confirm Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
            />
            <button type="submit">Sign up</button>
          </form>
          <div className="signup-form_other">
            <img
              src="./assets/google.png"
              alt="google"
              className="signup-form_other-img"
            />
            Sign up with Google
          </div>
          {/* other signin options */}
          <div className="signin__footer">
            <p>
              Already have an account? <Link to="/signin">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
