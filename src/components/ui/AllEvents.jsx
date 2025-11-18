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
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Amazing Events
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of participants in our exciting events. Find something that sparks your interest!
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
            <div className="lg:col-span-2">
              <InputGroup className="w-full">
                <InputGroupInput
                  placeholder="Search events by title, description, or organizer..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="text-base py-3 px-4"
                />
                <InputGroupAddon className="bg-amber-100 px-4">
                  <Search className="text-amber-700" />
                </InputGroupAddon>
              </InputGroup>
            </div>
            <div>
              <h1 htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Filter by Category
              </h1>
              <NativeSelect
                id="category"
                value={category}
                onChange={e => setCategory(e.target.value)}
                className="w-full py-2.5 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
              >
                <NativeSelectOption value="">All Categories</NativeSelectOption>
                {categories.map(cat => (
                  <NativeSelectOption key={cat} value={cat}>
                    {cat}
                  </NativeSelectOption>
                ))}
              </NativeSelect>
            </div>
          </div>
          
          {search || category ? (
            <div className="mt-3 text-sm text-gray-600 flex items-center">
              <span>{filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'} found</span>
              {(search || category) && (
                <button 
                  onClick={() => {
                    setSearch('');
                    setCategory('');
                  }}
                  className="ml-2 text-amber-600 hover:text-amber-800 flex items-center text-sm"
                >
                  <hr className="h-4 w-4 mr-1" /> Clear filters
                </button>
              )}
            </div>
          ) : null}
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map(event => (
              <EventCard 
                event={event} 
                key={event.id} 
                className="h-full"
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-amber-100 mb-4">
              <Search className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">No events found</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              {search || category 
                ? 'Try adjusting your search or filter to find what you\'re looking for.'
                : 'There are currently no events available. Check back later!'}
            </p>
            {(search || category) && (
              <div className="mt-6">
                <button
                  onClick={() => {
                    setSearch('');
                    setCategory('');
                  }}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllEvents;
