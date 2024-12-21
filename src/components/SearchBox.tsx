import React from "react";
import { IoSearch } from "react-icons/io5";

type Props = {};

export default function SearchBox({}: Props) {
  return (
    <form className="flex relative items-center justify-center h-10 ">
      <input
        type="text"
        placeholder="Search for a city"
        className="px-4 py-2 w-[230px] border border-gray-300 rounded-1-md focus:outline-none focus:border-blue-500 h-full"
      />
      <button
        type="submit"
        className="absolute right-0 h-full px-4 bg-blue-500 text-white rounded-full"
      >
        <IoSearch />
      </button>
    </form>
  );
}
