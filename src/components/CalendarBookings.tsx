import { Paper, Typography } from "@mui/material";
import AppBarBerlin from "./AppBarBerlin";
import { Calendar, momentLocalizer, Event } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Fragment, useEffect, useState } from "react";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar-styles.css"; // Add your custom styles here

export default function CalendarBookings() {
    const [events, setEvents] = useState<Event[]>([]);
    const localizer = momentLocalizer(moment);

    useEffect(() => {
        fetch('store/BerlinBooking.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                // Add netx line so no cache of calendar info is allowed
                'Cache-Control': 'no-cache'
            }
        })
            .then(response => response.json())
            .then(events => {
                setEvents(events);
            })
    }, [])

    return (
        <Fragment>
            <AppBarBerlin />
            <Paper style={{ backgroundColor: "#e6eae8", margin: "5px" }}>
                <Typography>
                    Din bookning vises fra den dag du kommer til din sidste hele dag.
                </Typography>
                <Typography>
                    Du skal forlade lejlighed dagen efter inden kl. 10:00.
                </Typography>
                <Calendar
                    localizer={localizer}
                    // events={myEventsList}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }}
                    views={['month']}
                />
            </Paper>
        </Fragment>
    )
}
