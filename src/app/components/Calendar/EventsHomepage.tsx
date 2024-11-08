"use client";
import Events from "../../../../types/eventsTypes";
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { getEventsForUserById } from "@/app/api/API";
import { useQuery } from "@tanstack/react-query";
import "./Calendar.css";

export default function EventsHomepage() {
  const userId = "0f4c7c0c-9b72-11ef-a55e-0227ff40ba33";

  const { data } = useQuery({
    queryKey: ["events", userId],
    queryFn: () => getEventsForUserById(userId),
  });

  console.log(data);

  return (
    <div className=" text-gray-800  rounded-lg shadow-lg w-screen px-2">
      <FullCalendar
        customButtons={{
          myCustomButton: {
            text: "custom!",
            click: function () {
              alert("clicked the custom button!");
            },
          },
        }}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={data?.map((event: Events) => ({
          title: event.event_name,
          start: event.event_date.split("T")[0],
        }))}
        themeSystem="standard"
        contentHeight={300}
        eventTextColor="white"
      />
    </div>
  );
}
