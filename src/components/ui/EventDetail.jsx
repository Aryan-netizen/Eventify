import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate, useParams } from "react-router-dom";
import events from "../../data/events";
import EventCard from "./EventCard";

const EventDetail = () => {
    const navigate = useNavigate()
    let params = useParams();
    const eventId = params.id.replace(/^:/, "");
    const event = events.find((e)=>(e.id==eventId))
    
    if (!event) {
      return <div className="min-h-screen flex items-center justify-center text-2xl">Event not found</div>;
    }
    console.log(params.id)
    
  return (
    <div className="min-h-screen">
      <div className="min-h-150 grid grid-cols-2">
        <div className=" flex justify-center items-center">
          <img
            src={event.image}
            className="object-contain size-100 h-full"
            alt=""
          />
        </div>
        <div className=" h-full flex flex-col justify-center gap-5">
          <h1 className="text-4xl font-bold">
            {event.title}
          </h1>
          <div className="space-x-2">
            <Badge className="p-2 px-4">$ {event.price}</Badge>
            <Badge className="p-2 px-4">{event.category}</Badge>
            <span className="font-bold">by : {event.organizer}</span>
          </div>
          <Button className="w-fit" onClick={()=>navigate(`/Payment/:${event.id}`)}>Buy tickets</Button>
          <div className="flex gap-2 flex-col">
            <div className="flex space-x-1">
              <Calendar />
              <h1>{event.date}</h1>
            </div>
            <div className="flex space-x-1">
              <MapPin />
              <h1>{event.location}</h1>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-2xl">What You'll learn:</h1>
            <p>
              {event.description}
            </p>
            <p>http://jsgalaxyuniverse.com/</p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="min-h-25 flex bg-amber-300 items-center text-5xl font-bold">
          Related Event
        </h1>
        <div className="grid grid-cols-3 gap-5 p-5">
          {events.map((e)=>{
            return <EventCard event={e} key={e.id}/>
          })}
        </div>
      </div>
    </div>
  );
};

export default EventDetail;