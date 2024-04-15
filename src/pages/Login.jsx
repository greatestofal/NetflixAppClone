import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/dc905d8b-0f80-40e4-a471-964ef99dcbf5/NG-en-20240408-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen">
          <div className="fixed w-full px-4 py-24 z-50">
            <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
              <div className="max-w-[320px] mx-auto py-16">
                <h1 className="text-3xl font-bold"> Login</h1>
                <form className="w-full flex-col flex py-4">
                  <input
                    className="p-3 my-2 bg-gray-700 rounded"
                    type="email"
                    placeholder="email"
                    autoComplete="email"
                  />
                  <input
                    className="p-3 my-2 bg-gray-700 rounded"
                    type="password"
                    placeholder="password"
                    autoComplete="current-password"
                  />
                  <button className="bg-red-600 py-3 my-6 font-bold">
                    Log In
                  </button>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <p className="mr-2">
                      <input type="checkbox" /> Remember me
                    </p>
                    <p> Need help?</p>
                  </div>
                  <p className="py-8">
                    <span className="text-gray-600">New to Netflix?</span>
                    <Link to={"/signup"}> Sign Up Now </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
