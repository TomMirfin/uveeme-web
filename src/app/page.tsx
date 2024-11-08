import Image from "next/image";
import GroupsHomePage from "./components/GroupsHomepage";
import EventsHomepage from "./components/Calendar/EventsHomepage";
import EventListHomepage from "./components/eventsHomePage/EventListHomepage";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-4 sm:grid-cols-1 bg-white h-screen">
      <div className="col-span-3">
        <GroupsHomePage />
      </div>
      <div className="col-span-1 ">
        <EventsHomepage />
      </div>
      <div className="col-span-3  bg-gradient-to-t rounded-t-xl">
        <EventListHomepage />
      </div>
    </div>
  );
}
