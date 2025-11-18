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
  const enrolledEvents = events.filter(event => event.isEnrolled === true && event.isApproved);
  const organizedEvents = events.filter(event => event.isApproved);

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
            <Card key={event.id}>
              <CardContent className="flex flex-col gap-1">
                <div className="mb-5">
                  <img src={event.image || "/images/default.jpg"} alt="" className="h-50 w-full object-cover object-center" />
                </div>
                <div className="space-x-1">
                  <Badge>Enrolled</Badge>
                  <Badge>{event.category}</Badge>
                </div>
                <p className="text-gray-700">{event.date}</p>
                <h1 className="font-bold text-xl">{event.title}</h1>
              </CardContent>
              <CardFooter className="text-sm">
                <p>{event.organizer}</p>
              </CardFooter>
            </Card>
          ))
        ) : (
          <p className="col-span-3 text-center text-xl">No organized events found.</p>
        )}
      </div>
    </div>
  )
}

export default Myprofile