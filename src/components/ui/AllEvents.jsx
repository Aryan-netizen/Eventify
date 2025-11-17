import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import events from "../../data/events";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import EventCard from "./EventCard";

const AllEvents = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  // Get unique categories from events
  const categories = Array.from(new Set(events.map(e => e.category)));

  // Filter events based on search and category
  const filteredEvents = events.filter(event => {
    const matchesSearch =
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.description.toLowerCase().includes(search.toLowerCase()) ||
      event.organizer.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category ? event.category === category : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-fit p-2 flex flex-col gap-8">
      <h1 className="font-bold text-4xl">
          Trusted by <br />
          Thousands of Events
        </h1>
      <div className="grid grid-cols-2 gap-2 p-2 ">
        <InputGroup>
          <InputGroupInput
            placeholder="Search..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            {filteredEvents.length} results
          </InputGroupAddon>
        </InputGroup>
        <NativeSelect
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <NativeSelectOption value="">All Categories</NativeSelectOption>
          {categories.map(cat => (
            <NativeSelectOption key={cat} value={cat}>
              {cat}
            </NativeSelectOption>
          ))}
        </NativeSelect>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <EventCard event={event} key={event.id} />
          ))
        ) : (
          <p className="col-span-3 text-center text-xl">No events found.</p>
        )}
      </div>
    </div>
  );
};

export default AllEvents;
