import React from "react";
import { getEventsForUser } from "../api/API";
export default async function EventListHomepage() {
  const events = await getEventsForUser();
  console.log(events);

  return (
    <div>
      <h1>Events</h1>
      <div className="flex flex-row flex-wrap  gap-4 justify-center">
        {events?.map((event) => {
          return (
            <>
              <div
                key={event.id}
                className=" border flex flex-row h-96 w-96 rounded-lg shadow-lg p-4"
              >
                <div>
                  {event.name}
                  <div> {event.description}</div>
                  <div> {event.date}</div>
                  <div> {event.location}</div>
                  <div> {event.groupId}</div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
