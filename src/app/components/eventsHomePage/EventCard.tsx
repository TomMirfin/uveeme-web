"use client";

import React, { useEffect, useState } from "react";
import { Event } from "../../../../types/eventsTypes";
import { getUserById } from "@/app/api/API";

export default function EventCard({ data }: { data: Event }) {
  const date = new Date(data.event_date).toLocaleString();

  // useEffect(() => {
  //   const fetchAttendeeNames = async () => {
  //     const names = await Promise.all(
  //       data.attendees.map(async (attendee) => {
  //         const user = await getUserById({ id: attendee });
  //         return user.name;
  //       })
  //     );
  //     setAttendeeNames(names);
  //   };

  //   if (data.attendees.length > 0) {
  //     fetchAttendeeNames();
  //   }
  // }, [data.attendees]);

  return (
    <div className="shadow-md p-5 h-full">
      <div className="font-bold">{data.event_name}</div>
      <div className="text-sm relative top-2">{data.description}</div>
      <div className="absolute bottom-12 text-sm font-bold">{date}</div>

      <div className="text-m absolute bottom-5 text-sm font-bol">
        {data.location}
      </div>
    </div>
  );
}
