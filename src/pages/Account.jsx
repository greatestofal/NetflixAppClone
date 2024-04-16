import React from "react";
import SavedShows from "../components/SavedShows";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="sm:block absolute w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/dc905d8b-0f80-40e4-a471-964ef99dcbf5/NG-en-20240408-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[500px]">
          <div className="absolute top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold"> My Shows </h1>
          </div>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;
