import React from "react";
import {
  AlignJustify,
  EllipsisVertical,
  Paperclip,
  Phone,
  Plane,
  Search,
  SendHorizontal,
  Smile,
} from "lucide-react";
import ChatBar from "./ChatBar";
import UserBlock from "./UserBlock";
import UsernameHeader from "./UsernameHeader";
import SearchBar from "./SearchBar";

export default function ChatPage() {
  return (
    <>
      {/* search bar */}
      <div className="flex">
        <SearchBar />

        {/* userName Header */}
        <UsernameHeader />
      </div>

      {/* Users Block*/}
      <div className="flex">
        <UserBlock />

        {/* Chatsbar */}
        <ChatBar />
      </div>
    </>
  );
}
