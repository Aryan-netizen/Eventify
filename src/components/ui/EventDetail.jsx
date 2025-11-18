import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Info } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useNavigate, useParams } from "react-router-dom";
import events from "../../data/events";
import EventCard from "./EventCard";

const speakers = [
  {
    name: "Dr. Ritu Sharma",
    title: "Dean, Computer Science",
    image: "/images/test-2.png"
  },
  {
    name: "Mr. Aman Verma",
    title: "Industry Expert, AI",
    image: "/images/test.png"
  }
];

const faqs = [
  {
    q: "How do I register for an event?",
    a: "Click the 'Buy tickets' button and complete the registration process."
  },
  {
    q: "Can I host my own event?",
    a: "Yes! Use the 'Create Event' section from the main menu."
  }
];

const EventDetail = () => {
  const navigate = useNavigate();
  let params = useParams();
  const eventId = params.id.replace(/^:/, "");
  const event = events.find((e) => String(e.id) === eventId);

  if (!event) {
    return <div className="min-h-screen flex items-center justify-center text-2xl">Event not found</div>;
  }

  const relatedEvents = events.filter(
    (e) => e.category === event.category && e.id !== event.id
  );

  // Scroll to top when navigating to a related event
  const handleCardClick = (id) => {
    navigate(`/Event-detail/:${id}`);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <div className="min-h-150 grid grid-cols-1 md:grid-cols-2 bg-amber-400 shadow-xl my-8 mx-4 md:mx-20">
        <div className="flex justify-center items-center p-8">
          <img
            src={event.image}
            className="object-contain rounded-2xl shadow-xl w-full h-96 border-4 border-amber-300"
            alt={event.title}
          />
        </div>
        <div className="h-full flex flex-col justify-center gap-5 p-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-amber-800 mb-2 drop-shadow">
            {event.title}
          </h1>
          <div className="space-x-2 mb-2">
            <Badge className="p-2 px-4 bg-amber-300 text-amber-900 font-bold shadow">$ {event.price}</Badge>
            <Badge className="p-2 px-4 bg-amber-200 text-amber-900 font-bold shadow">{event.category}</Badge>
            <span className="font-bold text-amber-800">by : {event.organizer}</span>
          </div>
          <Button className="w-fit bg-amber-700 text-white hover:bg-amber-800 transition shadow-lg" onClick={() => navigate(`/Payment/:${event.id}`)}>Buy tickets</Button>
          <div className="flex gap-2 flex-col mt-4">
            <div className="flex items-center space-x-2">
              <Calendar className="text-amber-700" />
              <span className="font-semibold">{event.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="text-amber-700" />
              <span className="font-semibold">{event.location}</span>
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-6">
            <h2 className="font-bold text-2xl text-amber-700">What You'll Learn</h2>
            <p className="text-gray-700">{event.description}</p>
            <a href={event.url || "#"} className="text-amber-700 underline font-semibold">Event Website</a>
          </div>
        </div>
      </div>
      {/* Speakers Section */}
      <section className="py-8 px-4 md:px-20 bg-amber-300 rounded-2xl my-8 shadow">
        <h2 className="text-3xl font-bold text-amber-900 mb-6 flex items-center gap-2">
          <Users className="inline-block" /> Speakers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {speakers.map((sp, idx) => (
            <Card key={idx} className="flex flex-row items-center gap-4 bg-white shadow-lg border-2 border-amber-200">
              <img src={sp.image} alt={sp.name} className="w-24 h-24 rounded-full object-cover m-4 border-4 border-amber-400" />
              <CardContent>
                <h3 className="font-bold text-xl text-amber-700">{sp.name}</h3>
                <p className="text-gray-700">{sp.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-8 px-4 md:px-20 bg-amber-100 rounded-2xl my-8 shadow">
        <h2 className="text-3xl font-bold text-amber-900 mb-6 flex items-center gap-2">
          <Info className="inline-block" /> Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow p-6 border-2 border-amber-200">
              <h4 className="font-semibold text-amber-700">{faq.q}</h4>
              <p className="text-gray-700 mt-2">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Related Events Section */}
      <div className="my-8 px-4 md:px-20">
        <h2 className="min-h-25 flex bg-amber-300 items-center text-3xl md:text-5xl font-bold mb-6 rounded-2xl px-4 py-2 shadow">
          Related Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {relatedEvents.length > 0 ? (
            relatedEvents.map((e) => (
              <div key={e.id} onClick={() => handleCardClick(e.id)} className="hover:scale-105 transition">
                <EventCard event={e} />
              </div>
            ))
          ) : (
            <p className="col-span-3 text-center text-xl">No related events found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDetail;