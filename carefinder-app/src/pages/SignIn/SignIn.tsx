import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { SelectedPage } from "@/shared/types";

import { UserAuth } from "@/contexts/AuthContext";
import { signInWithRedirect, auth, provider } from "@/utils/firebase";
import patient from "@/assets/patient01.png";
// import { FaEye } from "react-icons/fa";

// type Props = {
//   setSelectedPage: (value: SelectedPage) => void;

// };

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
      await login(email, password);
      navigate("/profile");
    } catch (e) {
      setError(e.message);
    }
  };

  // sign in user
  const { login } = UserAuth();

  // sign in with google
  const signInWithGoogle = (event: unknown) => {
    event.preventDefault();
    signInWithRedirect(auth, provider);
  };

  return (
    <section className="bg-cf-gray min-h-screen flex justify-center items-center">
      <div className="flex rounded-2xl shadow-lg shadow-cf-dark-blue max-w-4xl items-center mt-16">
      <div className="sm:block hidden relative w-1/2 min-h-full">
        <div className="absolute top-[40%] z-10 flex flex-col px-5">
          <h1 className="text-3xl font-bold text-cf-blue">CareFinder</h1>
          <p className="mt-4 text-base font-medium">
            Getting the best medical care has never been easier. Find the best
            hospitals.
          </p>
        </div>
        <div className="bg-[#0d3160] sm:block hidden h-68 rounded-2xl">
        <img className="w-[80] h-full object-cover mix-blend-screen" src={patient} alt="img" />
        </div>
      </div>
{/* form */}
      <div className="flex h-full sm:w-1/2 flex-col items-center justify-center p-6">
        
        <div className="flex w-full max-w-lg flex-col">
          <h2 className="mb-4 text-xl font-semibold">
            Welcome back!
          </h2>
          <form onSubmit={handleSubmit} className="flex w-full flex-col">
            <label className="mb-2 text-base font-light leading-8">
              Email address
            </label>
            <input
              className="mb-4 w-full rounded-md border border-cf-gray p-2 text-sm outline-none transition-all duration-300 focus:border-cf-blue"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="johndoe@email.com"
              required
            />
            <label className="mb-2 text-base font-light leading-8">
              Password
            </label>
            <div>
            <input
              className="mb-6 w-full rounded-md border border-cf-gray p-2 text-sm outline-none transition-all duration-300 focus:border-cf-blue"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="*******"
              required
            />
            {/* <FaEye className="absolute top-85 text-cf-dark-gray"/> */}
            </div>
            <button
              className="hover:scale-105 my-2 rounded-md bg-cf-blue py-2 text-base font-medium text-white transition-all duration-300"
              type="submit"
            >
              Sign in
            </button>
          </form>
          {/* other signin options */}
          <div className="flex w-full flex-col items-center justify-center">
            <button
              className="my-2 flex w-full items-center justify-center gap-2 rounded-md border-2 border-solid bg-white py-2 text-sm font-medium transition-all duration-300"
              onClick={signInWithGoogle}
            >
              <FcGoogle className="h-4 w-4" />
              Sign in with Google
            </button>
          </div>
          <div className="flex w-full items-center justify-center mt-2">
            <p className="text-sm font-medium">
              Don't have an account?{" "}
              <Link
                className="text-sm font-medium text-cf-blue underline underline-offset-8"
                to="/signup"
              >
                Sign up for free
              </Link>
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

// export the sign in component
export default SignIn;
