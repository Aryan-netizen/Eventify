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
const CreateEvents = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(undefined);
  const [eopen, setEOpen] = useState(false);
  const [edate, setEDate] = useState(undefined);
  return (
    <div className="min-h-50">
      <h1 className="min-h-25 flex bg-amber-300 items-center text-5xl font-bold">
        Create Event
      </h1>
      <div className="grid grid-cols-2 gap-5 bg-amber-50 p-10">

        <Input type="text" placeholder="Event title..." />

        <NativeSelect>
          <NativeSelectOption value="">Select Category</NativeSelectOption>
          <NativeSelectOption value="todo">Todo</NativeSelectOption>
        </NativeSelect>

        <InputGroup>
          <InputGroupTextarea placeholder="Description" />
        </InputGroup>

        <Input type="text" placeholder="Image Url..." />

        <InputGroup className="col-span-2">
          <InputGroupInput placeholder="Event location or Online..." />
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
              defaultValue="10:30:00"
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
              defaultValue="10:30:00"
              className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
            />
          </InputGroup>
        </div>
        <InputGroup>
          <InputGroupInput />
          <InputGroupAddon>
            <DollarSign />
          </InputGroupAddon>
          <InputGroupAddon align="inline-start">
            <InputGroupButton>Price</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput />
          <InputGroupAddon>
            <Link />
          </InputGroupAddon>
          <InputGroupAddon align="inline-start">
            <InputGroupButton>Url</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <Button className="col-span-2">Submit</Button>
      </div>
    </div>
  );
};

export default CreateEvents;
