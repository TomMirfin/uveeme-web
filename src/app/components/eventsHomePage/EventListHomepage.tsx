"use client";
import { Event } from "../../../../types/eventsTypes";
import React from "react";
import { getEventsForUserById } from "../../api/API";
import EventCard from "./EventCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery } from "@tanstack/react-query";
import { init } from "next/dist/compiled/webpack/webpack";

export default function EventListHomepage() {
  const userId = "0f4c7c0c-9b72-11ef-a55e-0227ff40ba33";

  const { data } = useQuery({
    queryKey: ["events", userId],
    queryFn: () => getEventsForUserById(userId),
  });
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 3,
    arrow: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <Slider className="flex flex-row gap-2 ml-6 mb-12" {...settings}>
      {data && data.length > 0 ? (
        data.map((event: Event) => {
          if (new Date(event.event_date) < new Date()) {
            return <EventCard key={event.id} data={event} />;
          }
        })
      ) : (
        <div className="text-gray-700 font-bold text-center flex items-center justify-center align-middle mt-2 p-4 font-[family-name:var(--font-geist-sans)] border-b-cyan-600 border-b-2 h-44 shadow-lg shadow-slate-600">
          When your groups have events they will appear here and your calendar
          will highlight the days where your events are booked
        </div>
      )}
    </Slider>
  );
}
