import React, { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { searchHouses, addSearchParams } from "../../slices/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";

const HomeForm = () => {
  const [cityState, setCityState] = useState("");
  const router = useRouter();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cityState === "") {
      console.log("Please enter a city and state");
    } else {
      try {
        dispatch(addSearchParams(cityState));
        const response = await dispatch(searchHouses(cityState));
        unwrapResult(response);
        localStorage.setItem("cityState", cityState);
        router.push("/search-houses");
      } catch (err) {
        console.log(err);
        
      }
    }
  };

  const handleChange = (e) => {
    setCityState(e.target.value);
  };

  return (
    <>
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block p-4 pl-10 laptop:w-96 mobile:w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-gray-300 focus:outline-gray-200"
            placeholder="City, State"
            onChange={handleChange}
            value={cityState}
            name="cityState"
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 transition duration-500"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
};

export default HomeForm;
