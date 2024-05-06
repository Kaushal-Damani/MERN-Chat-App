import { Paperclip, SendHorizontal, Smile } from "lucide-react";
import React from "react";

export default function ChatBar() {
  return (
    <>
      <div className=" flex justify-center items-center h-[713px] w-2/3 bg-[#8babd8]">
        <h1 className="text-center ">Today</h1>
        <div className="relative flex justify-end">
          <p className="absolute box-content rounded-lg  p-1 text-center font-normal bg-[#78e378] top-[190px] right-[-300px]">Hello, I'm Kaushal Damani<span className="flex justify-end mr-3 text-white">7:30</span> </p>
        </div>
        <div className="relative flex justify-start">
          <p className="absolute box-content rounded-lg  w-[200px] h-[50px] p-1 text-start px-3 font-normal bg-[#78e378] top-[90px] left-[-310px]">What is your ? <span className="flex justify-end mr-1 text-white">7:00 </span> </p>
        </div>
        <div className="relative flex justify-start">
          <p className="absolute box-content rounded-lg  w-[200px] h-[50px] p-1 text-start px-3 font-normal bg-[#78e378] top-[90px] left-[-310px]">What is your ? <span className="flex justify-end mr-1 text-white">7:00 </span> </p>
        </div>
        <div className="absolute flex justify-center items-center mb-[30px] bottom-0 h-[56px] bg-[#8babd8] rounded-lg">
          <div className="flex bg-white w-[694px] h-full px-4 rounded-lg">
            <input
              type="text"
              className="form-control form-control-lg flex-grow px-2 bg-transparent focus:outline-none"
              placeholder="Type message"
            />
            <div className="flex items-center">
              <a className="text-muted" href="#!">
                <Paperclip />
              </a>
              <a className="text-muted mx-2" href="#!">
                <Smile />
              </a>
              <a href="#!">
                <SendHorizontal color="#8babd8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
