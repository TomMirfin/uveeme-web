import React from "react";
import {
  BeakerIcon,
  CalendarIcon,
  UserGroupIcon,
  UserCircleIcon,
  BellAlertIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import Logo from "../../../public/logo";

export default function Nav() {
  return (
    <nav className="shadow-md  border-b-2 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-row justify-between items-center p-4 md:p-6">
        {/* Logo */}
        <Logo />
        {/* Icons */}
        <div className="flex space-x-4 md:space-x-6 items-center">
          <Link href="/groups/createGroup">
            <UserGroupIcon className="h-8 w-8 md:h-10 md:w-10 text-indigo-400" />
          </Link>
          <BellAlertIcon className="h-8 w-8 md:h-10 md:w-10 text-indigo-400" />
          <UserCircleIcon className="h-8 w-8 md:h-10 md:w-10 text-indigo-400" />
        </div>
      </div>
    </nav>
  );
}
