import patient from "@/assets/patient01.png";
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
    <section className="bg-cf-gray min-h-screen flex justify-center items-center">
      <div className=" flex rounded-2xl shadow-lg shadow-cf-dark-blue max-w-4xl items-center mt-16">
      <div className="sm:block hidden relative w-1/2 min-h-full">
        <div className="absolute top-[40%] z-10 flex flex-col px-5">
          <h1 className="text-3xl font-bold text-cf-blue">CareFinder</h1>
          <p className="mt-4 text-base text-[#060f28] font-semibold">
            Getting the best medical care has never been easier. Find the best
            hospitals.
          </p>
        </div>
        <div className="bg-[#0d3160] sm:block hidden h-68 rounded-2xl">
        <img className="w-[80] h-full object-cover mix-blend-screen" src={patient} alt="img" />
        </div>
      </div>
      {/* form container */}
      <div className="flex h-full sm:w-1/2 flex-col items-center justify-center p-6">
        <div className="flex w-full max-w-lg flex-col">
          <h2 className="mb-4 text-xl font-semibold leading-10">
            Create an account
          </h2>
          {/* {error && <p className="error">{error}</p>} */}
          <form onSubmit={handleSubmit} className="flex w-full flex-col">
            <label className=" text-base font-light leading-8">
              Name
            </label>
            <input
              className="mb-4 w-full rounded-md border border-cf-gray p-2 text-sm outline-none transition-all duration-300 focus:border-cf-blue"
              type="text"
              placeholder="John Doe"
              required
            />
            <label className=" text-base font-light leading-8">
              Email
            </label>
            <input
              className="mb-4 w-full rounded-md border border-cf-gray p-2 text-sm outline-none transition-all duration-300 focus:border-cf-blue"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              required
            />
            <label className="text-base font-light leading-8">
              Password
            </label>
            <input
              className="mb-4 w-full rounded-md border border-cf-gray p-2 text-sm outline-none transition-all duration-300 focus:border-cf-blue"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              required
            />
            <label className=" text-base font-light leading-8">
              Confirm Password
            </label>
            <input
              className="mb-4 w-full rounded-md border border-cf-gray p-2 text-sm outline-none transition-all duration-300 focus:border-cf-blue"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="********"
              required
            />
            <button
              className="hover:bg-cf-dark-blue my-2 rounded-md bg-cf-blue py-2 text-base font-medium text-white transition-all duration-300"
              type="submit"
            >
              Sign up
            </button>
          </form>
          <div className="flex w-full flex-col items-center justify-center">
            <button className="my-2 flex w-full items-center justify-center gap-2 rounded-md border-2 border-solid bg-white py-2 text-sm font-medium transition-all duration-300">
              <FcGoogle className="h-4 w-4" />
              Sign up with Google
            </button>
          </div>
          {/* other signin options */}
          <div className="flex w-full items-center justify-center mt-2">
            <p className="text-sm font-medium">
              Already have an account?{" "}
              <Link
                className="text-sm font-medium text-cf-blue underline underline-offset-8"
                to="/SignIn"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default SignUp;
