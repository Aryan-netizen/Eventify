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
import { useNavigate } from "react-router-dom";
const EventDetail = () => {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen">
      <div className="min-h-150 grid grid-cols-2">
        <div className=" flex justify-center items-center">
          <img
            src="/images/test.png"
            className="object-contain size-100 h-full"
            alt=""
          />
        </div>
        <div className=" h-full flex flex-col justify-center gap-5">
          <h1 className="text-4xl font-bold">
            Host, Connect, Celebrate: Your Events, Our Platform!
          </h1>
          <div className="space-x-2">
            <Badge className="p-2 px-4">$299</Badge>
            <Badge className="p-2 px-4">Development</Badge>
            <span>By: BroCoder | Aryan Garg </span>
          </div>
          <Button className="w-fit" onClick={()=>navigate("/Payment")}>Buy tickets</Button>
          <div className="flex gap-2 flex-col">
            <div className="flex space-x-1">
              <Calendar />
              <h1>Wed, Dec 20, 2023 / 2:30 PM - 1:00 PM</h1>
            </div>
            <div className="flex space-x-1">
              <MapPin />
              <h1>Houston Space Center, TX</h1>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-2xl">What You'll learn:</h1>
            <p>
              Embark on a cosmic journey through the galaxy of JavaScript at JS
              Galaxy! This event brings together JavaScript developers and
              enthusiasts for an out-of-this-world experience. Dive into
              deep-space discussions on the latest ECMAScript features,
              cutting-edge frameworks, and futuristic JavaScript technologies.
            </p>
            <p>http://jsgalaxyuniverse.com/</p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="min-h-25 flex bg-amber-300 items-center text-5xl font-bold">
          Related Event
        </h1>
        <div className="grid grid-cols-3 gap-5">
          <Card onClick={() => navigate("/Event-detail")}>
            <CardContent className="flex flex-col gap-1">
              <div className="mb-5">
                <img
                  src="/images/test.png"
                  alt=""
                  className="h-50 w-full object-cover object-center"
                />
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
                <img
                  src="/images/test.png"
                  alt=""
                  className="h-50 w-full object-cover object-center"
                />
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
                <img
                  src="/images/test.png"
                  alt=""
                  className="h-50 w-full object-cover object-center"
                />
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
                <img
                  src="/images/test.png"
                  alt=""
                  className="h-50 w-full object-cover object-center"
                />
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
    </div>
  );
};

export default EventDetail;
