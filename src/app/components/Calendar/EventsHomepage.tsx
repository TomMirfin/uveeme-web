"use client";
import Events from "../../../types/types";
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

  return (
    <div className=" text-gray-800  rounded-lg shadow-lg w-screen px-4">
      <h2 className="text-center text-2xl text-slate-700 font-[family-name:var(--font-geist-sans)] vs:mb-2">
        <strong>Your Events</strong>
      </h2>
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
        themeSystem="bootstrap5'"
        contentHeight={300}
        eventTextColor="white"
        buttonIcons={{
          prev: "chevron-left",
          next: "chevron-right",
        }}
      />
    </div>
  );
}
