import { useState } from "react";
import SideNav from "../components/Sidenav";
import TagInputBox from "../components/TagInputBox";
import MemeFeed from "../components/Feed";
export default function Home() {
  return (
    <div className="flex h-screen">
      <SideNav />

      <main className="flex-1 overflow-auto bg-white p-4 relative">
        <TagInputBox />
        <MemeFeed />
        <MemeFeed />
        <MemeFeed />
      </main>
    </div>
  );
}
