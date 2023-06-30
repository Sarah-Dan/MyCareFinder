import "./signin.css";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../contexts/AuthContext";
import { signInWithRedirect, auth, provider } from "../../utils/firebase";

// create a sign in component
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signin(email, password);
      navigate("/profile");
    } catch (e) {
      setError(e.message);
    }
  };

  // sign in user
  const { signin } = UserAuth();

  // sign in with google
  const signInWithGoogle = (event) => {
    event.preventDefault();
    signInWithRedirect(auth, provider);
  };

  return (
    <div className="signin__container">
      <div className="signin__image-content">
        <div className="signin__image-text">
          <h1>CareFinder</h1>
          <p>
            Getting the best medical care has never been easier. Find the best
            hospitals.
          </p>
        </div>
        <img src="./assets/doctors.jpg" alt="img" />
      </div>

      <div className="signin__form-container">
        {/* <h1>CareFinder</h1> */}
        <div className="signin__form">
          <h1>Welcome back!</h1>
          <form onSubmit={handleSubmit} className="signin-form_content">
            <label>Email address</label>
            <input 
            type="email"
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="johndoe@email.com" required />
            <label>Password</label>
            <input 
            type="password"
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="*******" required />
            <button type="submit">Sign in</button>
          </form>
          {/* other signin options */}
          <div className="signin-form_other">
            <button onClick={signInWithGoogle}>
              <FcGoogle className="signin-form_other-icon" />
              Sign in with Google
            </button>
          </div>
          <div className="signin__footer">
            <p>
              Dont have an account? <Link to="/signup">Sign up for free</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// export the sign in component
export default SignIn;
