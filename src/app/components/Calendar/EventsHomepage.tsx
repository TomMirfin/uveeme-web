import React from "react";
import Calendar from "react-calendar";
import "./Calendar.css";

export default function EventsHomepage() {
  const value = new Date();

  return (
    <div className="items-center justify-center p-6  ">
      <Calendar value={value} />
    </div>
  );
}
