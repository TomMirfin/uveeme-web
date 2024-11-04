import Image from "next/image";
import GroupsHomePage from "./components/GroupsHomepage";
import EventsHomepage from "./components/Calendar/EventsHomepage";
import EventListHomepage from "./components/EventListHomepage";

export default function Home() {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-1">
        <GroupsHomePage />
      </div>

      <div className="col-span-3 ">
        <EventsHomepage />
      </div>
      <EventListHomepage />
    </div>
  );
}
