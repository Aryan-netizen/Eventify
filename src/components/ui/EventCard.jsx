import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useNavigate } from 'react-router-dom'

const EventCard = ({ event }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Card
        onClick={() => {
          event.isEnrolled
            ? navigate(`/profile`)
            : navigate(`/Event-detail/:${event.id}`)
        }}
        className="cursor-pointer"
      >
        <CardContent className="flex flex-col gap-1">
          <div className="mb-5">
            <img src={event.image} alt="" className="h-50 w-full object-cover object-center" />
          </div>
          <div className="space-x-1">
            {event.isEnrolled ? (
              <Badge className="bg-yellow-400 text-black">Enrolled</Badge>
            ) : (
              <Badge className="bg-green-400 text-black">$ {event.price}</Badge>
            )}
            <Badge>{event.category}</Badge>
          </div>
          <p className="text-gray-700">{event.date}</p>
          <h1 className="font-bold text-xl">{event.title}</h1>
        </CardContent>
        <CardFooter className="text-sm">
          <p>{event.organizer}</p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default EventCard