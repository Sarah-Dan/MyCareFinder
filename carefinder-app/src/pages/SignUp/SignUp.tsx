import doctors from "@/assets/doctors.jpg";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "@/contexts/AuthContext";

const SignUp = () => {
  // states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
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
    <div className="mt-20 flex h-[100vh] w-full items-start">
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
        <div className="flex w-full max-w-lg flex-col">
          <h1 className="mb-8 text-4xl font-semibold leading-10">
            Create an account
          </h1>
          {/* {error && <p className="error">{error}</p>} */}
          <form onSubmit={handleSubmit} className="flex w-full flex-col">
            <label className="mb-2 text-medium font-light leading-8">
              Name
            </label>
            <input
              className="mb-6 w-full rounded-md border border-cf-gray p-4 text-base outline-none transition-all duration-300 focus:border-cf-blue"
              type="text"
              placeholder="John Doe"
            />
            <label className="mb-2 text-medium font-light leading-8">
              Email
            </label>
            <input
              className="mb-6 w-full rounded-md border border-cf-gray p-4 text-base outline-none transition-all duration-300 focus:border-cf-blue"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
            />
            <label className="mb-2 text-medium font-light leading-8">
              Password
            </label>
            <input
              className="mb-6 w-full rounded-md border border-cf-gray p-4 text-base outline-none transition-all duration-300 focus:border-cf-blue"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
            />
            <label className="mb-2 text-medium font-light leading-8">
              Confirm Password
            </label>
            <input
              className="mb-6 w-full rounded-md border border-cf-gray p-4 text-base outline-none transition-all duration-300 focus:border-cf-blue"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="********"
            />
            <button
              className="hover:bg-cf-dark-blue my-4 rounded-md bg-cf-blue py-4 text-medium font-medium text-white transition-all duration-300"
              type="submit"
            >
              Sign up
            </button>
          </form>
          <div className="flex w-full flex-col items-center justify-center">
            <button className="my-4 flex w-full items-center justify-center gap-4 rounded-md border-2 border-solid bg-white p-4 text-medium font-medium transition-all duration-300">
              <FcGoogle className="h-8 w-8" />
              Sign up with Google
            </button>
          </div>
          {/* other signin options */}
          <div className="flex w-full items-center justify-center">
            <p className="text-medium font-medium">
              Already have an account?{" "}
              <Link
                className="text-medium font-medium text-cf-blue underline underline-offset-8"
                to="/SignIn"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
