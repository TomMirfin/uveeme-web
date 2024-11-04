import React from "react";
import { Poppins } from "next/font/google";

import {
  BeakerIcon,
  CalendarIcon,
  UserGroupIcon,
  UserCircleIcon,
  BellAlertIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className=" shadow-md border-b-slate-300 border-b-2 text-6xl font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-row justify-between items-center p-6">
        {/* Logo */}
        <div className="flex items-center ml-20 space-x-[-8px]">
          <strong className="text-cyan-400">U</strong>
          <strong className="text-slate-700">v</strong>
          <strong className="text-cyan-600">M</strong>
        </div>

        {/* Icons */}
        <div className="flex space-x-6 mr-10 items-center">
          <Link href="/groups/createGroup">
            <UserGroupIcon className="h-10 w-10 text-cyan-400" />
          </Link>
          <BellAlertIcon className="h-10 w-10 text-cyan-400" />
          <UserCircleIcon className="h-10 w-10 text-cyan-400" />
        </div>
      </div>
    </nav>
  );
}
