import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { SelectedPage } from "@/shared/types";

import { UserAuth } from "@/contexts/AuthContext";
import { signInWithRedirect, auth, provider } from "@/utils/firebase";
import doctors from "@/assets/doctors.jpg";

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
    <div className="mt-20 flex h-[100vh] w-full items-start ">
      <div className="relative flex h-[100%] w-1/2 flex-col">
        <div className="absolute top-[50%] z-10 flex flex-col px-5">
          <h1 className="text-5xl font-bold text-cf-blue">CareFinder</h1>
          <p className="mt-4 text-medium font-medium">
            Getting the best medical care has never been easier. Find the best
            hospitals.
          </p>
        </div>
        <img className="h-full w-full object-cover" src={doctors} alt="img" />
      </div>

      <div className="flex h-full w-1/2 flex-col items-center justify-center bg-cf-light-gray p-6">
        {/* <h1>CareFinder</h1> */}
        <div className="flex w-full max-w-lg flex-col">
          <h1 className="mb-8 text-4xl font-semibold leading-10">
            Welcome back!
          </h1>
          <form onSubmit={handleSubmit} className="flex w-full flex-col">
            <label className="mb-2 text-medium font-light leading-8">
              Email address
            </label>
            <input
              className="mb-6 w-full rounded-md border border-cf-gray p-4 text-base outline-none transition-all duration-300 focus:border-cf-blue"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="johndoe@email.com"
              required
            />
            <label className="mb-2 text-medium font-light leading-8">
              Password
            </label>
            <input
              className="mb-6 w-full rounded-md border border-cf-gray p-4 text-base outline-none transition-all duration-300 focus:border-cf-blue"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="*******"
              required
            />
            <button
              className="hover:bg-cf-dark-blue my-4 rounded-md bg-cf-blue py-4 text-medium font-medium text-white transition-all duration-300"
              type="submit"
            >
              Sign in
            </button>
          </form>
          {/* other signin options */}
          <div className="flex w-full flex-col items-center justify-center">
            <button
              className="my-4 flex w-full items-center justify-center gap-4 rounded-md border-2 border-solid bg-white p-4 text-medium font-medium transition-all duration-300"
              onClick={signInWithGoogle}
            >
              <FcGoogle className="h-8 w-8" />
              Sign in with Google
            </button>
          </div>
          <div className="flex w-full items-center justify-center">
            <p className="text-medium font-medium">
              Don't have an account?
              <Link
                className="text-medium font-medium text-cf-blue underline underline-offset-8"
                to="/signup"
              >
                Sign up for free
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// export the sign in component
export default SignIn;
