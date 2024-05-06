import { AlignJustify, Search } from "lucide-react";
import React from "react";

export default function SearchBar() {
  return (
    <>
      <div className="relative h-30 w-1/3 border-r-2">
        <div className="flex justify-left items-center p-9">
          <AlignJustify color="#707991" />
          <div className="ml-9 relative">
            <input
              type="text"
              className="box-border rounded-full ml-4 h-[40px] w-[376px] p-4 bg-[#f5f5f5]"
              name=""
              placeholder="       Search"
            />
            <span className="absolute top-2 left-[350px] ">
              <Search color="#707991" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
