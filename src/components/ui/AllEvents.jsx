import React from "react";
import { Input } from "@/components/ui/input";
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
const AllEvents = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-fit p-2 flex flex-col gap-8">
      <h1 className="font-bold text-4xl">
        Trusted by <br />
        Thousand of Events
      </h1>
      <div className="grid grid-cols-2 gap-2 p-2 ">
        <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
      </InputGroup>
        <NativeSelect>
          <NativeSelectOption value="">Select Category</NativeSelectOption>
          <NativeSelectOption value="todo">Todo</NativeSelectOption>
        </NativeSelect>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <Card onClick={() => navigate('/Event-detail')}>
          <CardContent className="flex flex-col gap-1">
            <div className="mb-5">
                <img src="/images/test.png" alt="" className="h-50 w-full object-cover object-center" />
            </div>
            <div className="space-x-1">
              <Badge>$100</Badge>
              <Badge>Ai</Badge>
            </div>
            <p className="text-gray-700">Tue, Jan, 4:30 PM</p>
            <h1 className="font-bold text-xl">Github Universe</h1>
          </CardContent>
          <CardFooter className="text-sm">
            <p>BroCoder | Aryan garg</p>
          </CardFooter>
        </Card>


        <Card>
          <CardContent className="flex flex-col gap-1">
            <div className="mb-5">
                <img src="/images/test.png" alt="" className="h-50 w-full object-cover object-center" />
            </div>
            <div className="space-x-1">
              <Badge>$100</Badge>
              <Badge>Ai</Badge>
            </div>
            <p className="text-gray-700">Tue, Jan, 4:30 PM</p>
            <h1 className="font-bold text-xl">Github Universe</h1>
          </CardContent>
          <CardFooter className="text-sm">
            <p>BroCoder | Aryan garg</p>
          </CardFooter>
        </Card>
        <Card>
          <CardContent className="flex flex-col gap-1">
            <div className="mb-5">
                <img src="/images/test.png" alt="" className="h-50 w-full object-cover object-center" />
            </div>
            <div className="space-x-1">
              <Badge>$100</Badge>
              <Badge>Ai</Badge>
            </div>
            <p className="text-gray-700">Tue, Jan, 4:30 PM</p>
            <h1 className="font-bold text-xl">Github Universe</h1>
          </CardContent>
          <CardFooter className="text-sm">
            <p>BroCoder | Aryan garg</p>
          </CardFooter>
        </Card>
        <Card>
          <CardContent className="flex flex-col gap-1">
            <div className="mb-5">
                <img src="/images/test.png" alt="" className="h-50 w-full object-cover object-center" />
            </div>
            <div className="space-x-1">
              <Badge>$100</Badge>
              <Badge>Ai</Badge>
            </div>
            <p className="text-gray-700">Tue, Jan, 4:30 PM</p>
            <h1 className="font-bold text-xl">Github Universe</h1>
          </CardContent>
          <CardFooter className="text-sm">
            <p>BroCoder | Aryan garg</p>
          </CardFooter>
        </Card>


      </div>
    </div>
  );
};

export default AllEvents;
