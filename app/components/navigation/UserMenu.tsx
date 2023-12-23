"use client";

import { useCallback, useState } from "react";
import Avatar from "../Avatar";
import { BsArrowDown } from "react-icons/bs"; 
import Link from "next/link";
import MenuItem from "./MenuItem";
import { signOut } from "next-auth/react";
import BackDrop from "./BackDrop";
import { SafeUser } from "@/types";

interface UserMenuProps {
  currentUser: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <div className="relative z-30">
        <div
          onClick={toggleOpen}
          className="
            p-3
            border-[2px]
            border-green-500
            flex
            flex-row
            items-center
            gap-2
            rounded-md
            cursor-pointer
            hover:bg-green-500
            hover:text-white
            transition
            text-green-600
          "
        >
          <Avatar src={currentUser?.image} />
          <BsArrowDown />
        </div>
        {isOpen && (
          <div
            className="absolute
              rounded-lg
              shadow-lg
              w-[200px]
              bg-white
              overflow-hidden
              right-0
              top-12
              text-sm
              flex
              flex-col
              cursor-pointer
            "
          >
            {currentUser ? (
              <div>
                <Link href="/orders">
                  <MenuItem onClick={toggleOpen}>Your Purchases</MenuItem>
                </Link>
                <hr className="border-gray-600 my-2" />
                <MenuItem
                  onClick={() => {
                    toggleOpen();
                    signOut();
                  }}
                >
                  Sign Out
                </MenuItem>
              </div>
            ) : (
              <div>
                <Link href="/login">
                  <MenuItem onClick={toggleOpen}>Log In</MenuItem>
                </Link>
                <Link href="/register">
                  <MenuItem onClick={toggleOpen}>Sign Up</MenuItem>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
      {isOpen ? <BackDrop onClick={toggleOpen} /> : null}
    </>
  );
};

export default UserMenu;
