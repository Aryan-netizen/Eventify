import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useNavigate } from 'react-router-dom'
// {
//     id: 1,
//     title: "Tech Conference 2023",
//     date: "2023-12-15T09:00:00",
//     price: 199,
//     category: "Technology",
//     description: "Annual tech conference featuring the latest in software development and innovation.",
//     organizer: "Tech Events Inc.",
//     location: "Convention Center, New York",
//     image: "https://images.unsplash.com/photo-1763037152119-f86924827076?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     tags: ["AI", "Development", "Cloud"]
//   },
const EventCard = ({event}) => {
    const navigate = useNavigate();
  return (
    <div>
        <Card onClick={() => navigate(`/Event-detail/:${event.id}`)}>
                  <CardContent className="flex flex-col gap-1">
                    <div className="mb-5">
                        <img src={event.image} alt="" className="h-50 w-full object-cover object-center" />
                    </div>
                    <div className="space-x-1">
                      <Badge>$ {event.price}</Badge>
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