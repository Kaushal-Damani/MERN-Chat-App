import React from "react";

export default function UserBlock() {
  return (
    <>
      <div className="relative h-30 w-1/3 border-r-2">
        <div className="flex justify-between items-start ml-9 w-[400px]">
          <div className="flex items-center ">
            <img
              src="https://img.freepik.com/free-photo/portrait-smiling-blonde-woman_23-2148316635.jpg?size=626&ext=jpg"
              className="h-[70px] w-[70px] rounded-full"
              alt=""
            />
            <div className="ml-4">
              <strong className="text-xl font-bold text-[#011627]">
                Jessica Drew
              </strong>
              <p className="text-lg text-[#707991]">ok, see you later</p>
            </div>
          </div>
          <p className="text-lg text-[#707991]">7:77</p>
        </div>
      </div>
    </>
  );
}
