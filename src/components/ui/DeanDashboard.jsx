import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import eventsData from "../../data/events";
import { Pencil, CheckCircle, XCircle } from "lucide-react";

const DeanDashboard = () => {
  // Simulate event approval status
  const [events, setEvents] = useState(
    eventsData.map(ev => ({ ...ev, status: "pending", isApproved: ev.isApproved ?? false }))
  );
  const [editId, setEditId] = useState(null);
  const [editFields, setEditFields] = useState({});

  // Approve event
  const handleApprove = (e,id) => {
    e.preventDefault()
    setEvents(events =>
      events.map(ev =>
        ev.id === id ? { ...ev, status: "approved", isApproved: true } : ev
      )
    );
  };

  // Reject event
  const handleReject = id => {
    setEvents(events =>
      events.map(ev =>
        ev.id === id ? { ...ev, status: "rejected" } : ev
      )
    );
  };

  // Start editing
  const handleEdit = event => {
    setEditId(event.id);
    setEditFields({
      title: event.title,
      date: event.date,
      price: event.price,
      category: event.category,
      description: event.description,
      location: event.location,
    });
  };

  // Save edit
  const handleSave = id => {
    setEvents(events =>
      events.map(ev =>
        ev.id === id ? { ...ev, ...editFields } : ev
      )
    );
    setEditId(null);
    setEditFields({});
  };

  // Cancel edit
  const handleCancelEdit = () => {
    setEditId(null);
    setEditFields({});
  };

  return (
    <div className="min-h-screen bg-amber-50 pb-10">
      <h1 className="text-4xl font-extrabold text-center text-amber-700 py-8 mb-4 bg-amber-100 shadow">
        Dean Dashboard
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {events.map(event => (
          <Card key={event.id} className="shadow-lg rounded-xl bg-white">
            <CardContent className="flex flex-col gap-2">
              <img src={event.image || "/images/default.jpg"} alt={event.title} className="h-40 w-full object-cover rounded-lg mb-2" />
              {editId === event.id ? (
                <div className="flex flex-col gap-2">
                  <input
                    className="border rounded px-2 py-1"
                    value={editFields.title}
                    onChange={e => setEditFields(f => ({ ...f, title: e.target.value }))}
                  />
                  <input
                    className="border rounded px-2 py-1"
                    value={editFields.date}
                    onChange={e => setEditFields(f => ({ ...f, date: e.target.value }))}
                  />
                  <input
                    className="border rounded px-2 py-1"
                    value={editFields.price}
                    type="number"
                    onChange={e => setEditFields(f => ({ ...f, price: e.target.value }))}
                  />
                  <input
                    className="border rounded px-2 py-1"
                    value={editFields.category}
                    onChange={e => setEditFields(f => ({ ...f, category: e.target.value }))}
                  />
                  <input
                    className="border rounded px-2 py-1"
                    value={editFields.location}
                    onChange={e => setEditFields(f => ({ ...f, location: e.target.value }))}
                  />
                  <textarea
                    className="border rounded px-2 py-1"
                    value={editFields.description}
                    onChange={e => setEditFields(f => ({ ...f, description: e.target.value }))}
                  />
                </div>
              ) : (
                <>
                  <h2 className="font-bold text-xl text-amber-700">{event.title}</h2>
                  <div className="space-x-2 mb-2">
                    <Badge className="bg-amber-300 text-amber-900 font-bold">${event.price}</Badge>
                    <Badge className="bg-amber-200 text-amber-900 font-bold">{event.category}</Badge>
                  </div>
                  <p className="text-gray-700">{event.date}</p>
                  <p className="text-gray-700">{event.location}</p>
                  <p className="text-gray-700">{event.description}</p>
                </>
              )}
              <div className="flex gap-2 mt-2">
                {editId === event.id ? (
                  <>
                    <button
                      className="bg-amber-700 text-white px-3 py-1 rounded hover:bg-amber-800"
                      onClick={() => handleSave(event.id)}
                    >
                      Save
                    </button>
                    <button
                      className="bg-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-400"
                      onClick={handleCancelEdit}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 flex items-center gap-1"
                      onClick={(e) => handleApprove(e,event.id)}
                      disabled={event.status === "approved"}
                    >
                      <CheckCircle className="w-4 h-4" /> Approve
                    </button>
                    <button
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 flex items-center gap-1"
                      onClick={() => handleReject(event.id)}
                      disabled={event.status === "rejected"}
                    >
                      <XCircle className="w-4 h-4" /> Reject
                    </button>
                    <button
                      className="bg-amber-500 text-white px-3 py-1 rounded hover:bg-amber-600 flex items-center gap-1"
                      onClick={() => handleEdit(event)}
                    >
                      <Pencil className="w-4 h-4" /> Edit
                    </button>
                  </>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <span className={`font-bold px-3 py-1 rounded-full ${
                event.status === "approved"
                  ? "bg-green-100 text-green-700"
                  : event.status === "rejected"
                  ? "bg-red-100 text-red-700"
                  : "bg-amber-100 text-amber-700"
              }`}>
                {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
              </span>
              <span className="text-sm text-gray-500">Organizer: {event.organizer}</span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DeanDashboard;