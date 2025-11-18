import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import events from '../../data/events'
import EventCard from './EventCard'

const Myprofile = () => {
  const enrolledEvents = events.filter(event => event.isEnrolled === true);
  const organizedEvents = events.filter(event => event.organizer && event.organizer.toLowerCase() === "aryan garg");

  return (
    <div className="min-h-screen">
      <h1 className="min-h-25 flex bg-amber-100 border-b-2 items-center text-3xl md:text-5xl font-bold text-center">
        My tickets
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4 md:p-10">
        {enrolledEvents.length > 0 ? (
          enrolledEvents.map(event => (
            <EventCard event={event} key={event.id} />
          ))
        ) : (
          <p className="col-span-3 text-center text-xl">No tickets found.</p>
        )}
      </div>
      <h1 className="min-h-25 flex bg-amber-100 border-b-2 items-center text-3xl md:text-5xl font-bold text-center">
        Event Organized
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4 md:p-10">
        {organizedEvents.length > 0 ? (
          organizedEvents.map(event => (
            <EventCard event={event} key={event.id} />
          ))
        ) : (
          <p className="col-span-3 text-center text-xl">No organized events found.</p>
        )}
      </div>
    </div>
  )
}

export default Myprofile