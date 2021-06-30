import React, { useState } from "react";

import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import ptbrLocale from '@fullcalendar/core/locales/pt-br';

function EmpenhoHome() {
  
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        locale={ptbrLocale}
        dayMaxEvents={3}
        events={[
          { title: "event 1", date: "2021-06-01" },
          { title: "event 2", date: "2021-06-02",color:'red' ,borderColor:'black',textColor:'#ccc'},
          { title: "event 1", date: "2021-06-01" },
          { title: "event 2", date: "2021-06-02",color:'red' ,borderColor:'black',textColor:'#ccc'},
          { title: "event 1", date: "2021-06-01" },
          { title: "event 2", date: "2021-06-02",color:'red' ,borderColor:'black',textColor:'#ccc'},
          { title: "event 1", date: "2021-06-01" },
          { title: "event 2", date: "2021-06-02",color:'red' ,borderColor:'black',textColor:'#ccc'},
          { title: "event 1", date: "2021-06-01" },
          { title: "event 2", date: "2021-06-02",color:'red' ,borderColor:'black',textColor:'#ccc'},
        ]}
      />
    </div>
  );
}

export default EmpenhoHome;
