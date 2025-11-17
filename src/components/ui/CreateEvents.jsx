import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ArrowUpIcon,
  Calendar1,
  ChevronDownIcon,
  DollarSign,
  Link,
  LocateIcon,
  MapPin,
  Plus,
  Search,
  SearchIcon,
} from "lucide-react";
import events from "../../data/events"; // Import your events array

const USERNAME = "Aryan garg"; // Replace with dynamic username if available

const CreateEvents = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(undefined);
  const [eopen, setEOpen] = useState(false);
  const [edate, setEDate] = useState(undefined);

  // Form fields
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [startTime, setStartTime] = useState("10:30:00");
  const [endTime, setEndTime] = useState("10:30:00");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEvent = {
      id: events.length + 1,
      title,
      date: date ? date.toISOString().split("T")[0] + "T" + startTime : "",
      price: Number(price),
      category,
      description,
      organizer: USERNAME,
      location,
      image,
      tags: [],
      isEnrolled: false,
      url,
    };

    // Add to local events array
    events.push(newEvent);



    // Reset form
    setTitle("");
    setCategory("");
    setDescription("");
    setImage("");
    setLocation("");
    setDate(undefined);
    setStartTime("10:30:00");
    setEndTime("10:30:00");
    setPrice("");
    setUrl("");
    alert("Event created!");
  };

  return (
    <div className="min-h-50">
      <h1 className="min-h-25 flex bg-amber-300 items-center text-5xl font-bold">
        Create Event
      </h1>
      <form
        className="grid grid-cols-2 gap-5 bg-amber-50 p-10"
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          placeholder="Event title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <NativeSelect
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <NativeSelectOption value="">Select Category</NativeSelectOption>
          <NativeSelectOption value="Technology">Technology</NativeSelectOption>
          <NativeSelectOption value="Design">Design</NativeSelectOption>
          <NativeSelectOption value="Business">Business</NativeSelectOption>
          <NativeSelectOption value="Marketing">Marketing</NativeSelectOption>
        </NativeSelect>

        <InputGroup>
          <InputGroupTextarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </InputGroup>

        <Input
          type="text"
          placeholder="Image Url..."
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <InputGroup className="col-span-2">
          <InputGroupInput
            placeholder="Event location or Online..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <InputGroupAddon>
            <MapPin />
          </InputGroupAddon>
        </InputGroup>
        <div className="flex flex-col gap-3">
          <InputGroup>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  id="date-picker"
                  className="w-32 justify-between font-normal"
                  type="button"
                >
                  {date ? date.toLocaleDateString() : "Select date"}
                  <ChevronDownIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto overflow-hidden p-0"
                align="start"
              >
                <Calendar
                  mode="single"
                  selected={date}
                  captionLayout="dropdown"
                  onSelect={(date) => {
                    setDate(date);
                    setOpen(false);
                  }}
                />
              </PopoverContent>
            </Popover>
            <InputGroupAddon>
              <Calendar1 />
            </InputGroupAddon>
            <InputGroupAddon align="inline-start">
              <InputGroupButton>Start Date:</InputGroupButton>
            </InputGroupAddon>
            <Input
              type="time"
              id="time-picker"
              step="1"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
            />
          </InputGroup>
        </div>
        <div className="flex flex-col gap-3">
          <InputGroup>
            <Popover open={eopen} onOpenChange={setEOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  id="date-picker"
                  className="w-32 justify-between font-normal"
                  type="button"
                >
                  {edate ? edate.toLocaleDateString() : "Select date"}
                  <ChevronDownIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto overflow-hidden p-0"
                align="start"
              >
                <Calendar
                  mode="single"
                  selected={edate}
                  captionLayout="dropdown"
                  onSelect={(date) => {
                    setEDate(date);
                    setEOpen(false);
                  }}
                />
              </PopoverContent>
            </Popover>
            <InputGroupAddon>
              <Calendar1 />
            </InputGroupAddon>
            <InputGroupAddon align="inline-start">
              <InputGroupButton>End Date:</InputGroupButton>
            </InputGroupAddon>
            <Input
              type="time"
              id="time-picker"
              step="1"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
            />
          </InputGroup>
        </div>
        <InputGroup>
          <InputGroupInput
            placeholder="Price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <InputGroupAddon>
            <DollarSign />
          </InputGroupAddon>
          <InputGroupAddon align="inline-start">
            <InputGroupButton>Price</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput
            placeholder="Url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <InputGroupAddon>
            <Link />
          </InputGroupAddon>
          <InputGroupAddon align="inline-start">
            <InputGroupButton>Url</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <Button className="col-span-2" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreateEvents;
