import { getGroups } from "../api/API";
import Link from "next/link";

export default async function Groups() {
  const groups = await getGroups();

  return (
    <div>
      <h1>Groups</h1>
      <div className="flex flex-row flex-wrap  gap-4 justify-center">
        {groups?.map((group) => {
          console.log(group, "group");
          return (
            <>
              <Link
                href={`/groups/${group.id}`}
                key={group.id}
                className=" border flex flex-row h-96 w-96 rounded-lg shadow-lg p-4"
              >
                <div>
                  {group.name}
                  <div> {group.description}</div>
                  <div> {group.nextEvent}</div>
                  {group?.membersIds?.map((member) => {
                    return <div>{member}</div>;
                  })}
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
}
