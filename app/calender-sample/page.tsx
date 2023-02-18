"use client";

import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interaction from "@fullcalendar/interaction";

const Default = () => {
  const showStartTime = "09:00:00";
  const showEndTime = "24:00:00";
  const headerToolbar = {
    left: "prev next",
    center: "title",
    right: "timeGridWeek,timeGridDay",
  };
  const dummyEvents = [{ title: "Sample Event", start: new Date() }];

  return (
    <div>
      <FullCalendar
        editable
        selectable
        headerToolbar={headerToolbar}
        plugins={[timeGridPlugin, interaction]}
        initialEvents={dummyEvents}
        initialView="timeGridWeek"
        locale="ja"
        views={{
          timeGridWeek: {
            slotMinTime: showStartTime,
            slotMaxTime: showEndTime,
          },
          timeGridDay: {
            slotMinTime: showStartTime,
            slotMaxTime: showEndTime,
          },
        }}
        contentHeight="auto"
      />
    </div>
  );
};

export default Default;
