import { EllipsisVertical, Phone, Search } from "lucide-react";
import React from "react";

export default function UsernameHeader() {
  return (
    <>
      <div className="relative h-20 w-2/3">
        <div className="flex justify-left items-center p-9">
          <img
            src="https://img.freepik.com/free-photo/young-adult-enjoying-virtual-date_23-2149328221.jpg?size=626&ext=jpg"
            className="h-[50px] w-[50px] rounded-full"
            alt=""
          />
          <div>
            <strong className="text-xl font-bold text-[#011627] ml-4">
              Alex Morgan
            </strong>
            <p className="text-[#707991] ml-4">last seen 5 mins ago</p>
          </div>
          <div className="flex ml-[700px]">
            <Search className="ml-4" color="#707991" />
            <Phone className="ml-4" color="#707991" />
            <EllipsisVertical className="ml-4 " color="#707991" />
          </div>
        </div>
      </div>
    </>
  );
}
