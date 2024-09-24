"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import UserSide from "./UserSide";

type Props = {};

const Navbar = (props: Props) => {
  const [SearchInput, setSearchInput] = useState<string>("");
  const router = useRouter();

  const SearchFun = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      router.push(`/search?for=${SearchInput}`);
    }
  };
  return (
    <div className="px-8 py-2 border-b-[1px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link href="/">
            <Image src="/medium-icon.svg" width={40} height={40} alt="Medium Logo" />
          </Link>
          <div className="flex items-center bg-gray-100 border border-gray-200 overflow-hidden rounded-full md:min-w-[400px]">
            <Search onClick={() => router.push(`/search?for${SearchInput}`)} size={20} className="opacity-50 ml-2 mr-1" />
            <input
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => SearchFun(e)}
              type="text"
              placeholder="Search..."
              className="focus:outline-none px-1 py-2 placeholder:text-sm text-sm bg-gray-50 w-full"
            />
          </div>
        </div>
        <UserSide />
      </div>
    </div>
  );
};

export default Navbar;
