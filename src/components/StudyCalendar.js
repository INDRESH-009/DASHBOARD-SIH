import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);
const events = [
  { title: 'Studied Math', start: new Date(), end: new Date() },
  { title: 'Science Quiz', start: new Date(moment().subtract(2, 'days').toDate()), end: new Date(moment().subtract(2, 'days').toDate()) },
];

const StudyCalendar = () => {
  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: "12px", backgroundColor: "#e1bee7" }}>
      <Typography variant="h6" gutterBottom sx={{ color: "#6a1b9a", fontWeight: "bold" }}>
        Study Calendar
      </Typography>
      <Box sx={{ height: 350 }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 300 }}
        />
      </Box>
    </Paper>
  );
};

export default StudyCalendar;
