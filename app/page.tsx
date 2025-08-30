"use client";

import CalendarCard from "./calendar/CalendarCard";

// import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from "@fullcalendar/interaction";

export default function Home() {
  return (
      <div className="p-6 pb-0 text-black">
      {/* <FullCalendar
      plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
      initialView="dayGridWeek"
      editable={true}
      selectable={true}
      allDaySlot={false}
        headerToolbar={{
    left: 'prev,title,next',
    center: 'today',
    right: 'timeGridDay,timeGridWeek,dayGridMonth'
  }}
      events={[
        { title: 'event 1', date: '2025-08-25' },
        { title: 'event 2', date: '2025-08-26' }
      ]}
      height="780px"
    /> */}
    <CalendarCard />
      </div>
  );
}
