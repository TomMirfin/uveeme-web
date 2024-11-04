import { getGroups } from "../api/API";
import Link from "next/link";
import { Happy_Monkey } from "next/font/google";

const monkey = Happy_Monkey({
  subsets: ["latin"],
  weight: ["400"],
});

export default async function GroupsHomePage() {
  const groups = await getGroups();

  return (
    <div className="h-screen flex mt-10 flex-col w-full ">
      <div
        className="flex flex-col ml-10 h-3/4 gap-8  bg-[#ffffff] w-3/4 overflow-y-auto shadow-slate-300 shadow-xl  "
        style={{
          borderRadius: "40px",
        }}
      >
        {groups?.map((group) => {
          return (
            <Link
              href={`/groups/${group.id}`}
              key={group.id}
              className=" border-black p-4 font-[family-name:var(--font-geist-sans)]   border-b-cyan-600 border-b-2  "
            >
              <div>
                <strong className="text-2xl">{group.name}</strong>
                <div>{group.description}</div>
                {group.nextEvent && (
                  <div>
                    Next Event: {new Date(group.nextEvent).toLocaleString()}
                  </div>
                )}
                {group?.membersIds?.map((member) => {
                  return <div key={member}>{member}</div>;
                })}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
