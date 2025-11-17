import { Button } from "@/components/ui/button";
import Navbar from "./components/ui/Navbar";

import Footer from "./components/ui/Footer";
import Home from "./components/ui/Home";
import CreateEvents from "./components/ui/CreateEvents";
import { Route, Routes } from "react-router-dom";
import Myprofile from "./components/ui/Myprofile";
import EventDetail from "./components/ui/EventDetail";
import { Payment } from "./components/ui/Payment";

function App() {
  return (
    <div className="min-h-screen bg-amber-100">
      <nav className="min-h-20 bg-amber-200">
        <Navbar />
      </nav>
      <main className="mx-auto container min-h-fit w-[80%]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateEvents />} />
          <Route path="/profile" element={<Myprofile />} />
          <Route path="/Event-detail/:id" element={<EventDetail />} />
          <Route path="/Payment/:id" element={<Payment />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
