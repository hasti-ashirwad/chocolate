import React from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import bgImage from "../images/background.jpg";

const Search = () => {
  return (
    <div className="flex w-4/5 pt-5 justify-end">
      <div
        className="flex flex-col md:flex-row gap-x-16 justify-between p-4 bg-[#e2dfdc] w-full md:w-[45rem] rounded-lg z-10"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          border: "1px solid #e2dfdc",
        }}
      >
        <div className="flex items-center gap-3">
          <FaShoppingCart className="text-2xl text-darkcoffy cursor-pointer" />
          <p className="text-lg text-darkcoffy">Cart</p>
          <div className="bg-darkcoffy text-white text-sm font-bold rounded-full px-2 py-0.5">
            0
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 w-full">
          {/* Currency Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-darkcoffy text-lg font-medium">Currency:</span>
            <div className="relative">
              <select
                className="flex items-center justify-center rounded-lg bg-[#e2dfdc0a] text-darkcoffy focus:outline-none cursor-pointer"
                defaultValue="USD"
              >
                <option value="USD">USD</option>
                <option value="AUD">Australia</option>
              </select>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex items-center w-full mt-4 md:mt-0">
            <input
              type="text"
              placeholder="Search the store"
              className="border border-gray-300 rounded-l-lg py-2 px-4 w-[18rem] focus:outline-none text-md font-thin bg-white"
            />
            <button className="bg-[#d15f31] text-white rounded-r-md px-4 py-3 hover:bg-red-600 focus:outline-none">
              <FaSearch className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
