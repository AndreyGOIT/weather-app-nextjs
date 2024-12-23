import React from "react";
import { MdWbSunny, MdMyLocation, MdOutlineLocationOn } from "react-icons/md";
import SearchBox from "./SearchBox";

// type Props = {}

// export default function Navbar({}: Props) {
export default function Navbar() {
  return (
    <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white">
      <div className="h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto">
        <p className="flex items-center justify-center gap-2">
          <h2 className="text-gray-500 text-3xl">Weather</h2>
          <MdWbSunny className="text-yellow-500 text-3xl mt-1" />
        </p>
      <section className="flex gap-2 items-center">
      <MdMyLocation className="text-gray-400 text-2xl hover:opacity-80 cursor-pointer" />
      <MdOutlineLocationOn className=" text-2xl " />
      <p className="text-slate-900/80 text-sm">Finland</p>
      <div>
        <SearchBox value={""} onChange={undefined} onSubmit={undefined} />
      </div>
      </section>
      </div>
    </nav>
  );
}
