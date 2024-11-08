import { getGroups } from "../api/API";
import Link from "next/link";
import { Happy_Monkey } from "next/font/google";
import { UserGroupIcon } from "@heroicons/react/24/solid";

export default async function GroupsHomePage() {
  const groups = await getGroups();

  return (
    <div className="h-96 flex mt-4 flex-col bg-gradient-to-b from-white to-indigo-300 rounded-br-lg rounded-bl-lg overflow-y-visible">
      <h2 className="text-center text-2xl text-slate-700 font-[family-name:var(--font-geist-sans)]">
        <strong>Your Groups</strong>
      </h2>
      <div
        className="flex flex-col p-4 gap-6 sm:mx-36 shadow-2xl mx-10 text-center"
        style={{ borderRadius: "10px" }}
      >
        {groups && groups.length > 0 ? (
          groups.map((group) => {
            return (
              <Link
                href={`/groups/${group.id}`}
                key={group.id}
                className=" p-4 font-[family-name:var(--font-geist-sans)] "
              >
                <div>
                  <strong className="text-xl sm:text-2xl text-black">
                    {group.team_name}
                  </strong>
                  <div className="text-black">{group.description}</div>
                </div>
              </Link>
            );
          })
        ) : (
          <div className="text-gray-700 font-bold text-center items-center justify-center mt-20 p-4 font-[family-name:var(--font-geist-sans)] border-b-cyan-600 border-b-2 h-44">
            You are not currently part of any groups, create a group to get
            started.
            <div className="flex justify-center mt-4">
              <UserGroupIcon className="h-10 w-10 text-cyan-400" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
