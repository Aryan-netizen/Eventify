import React from 'react'
import { CalendarDays, Users, Rocket, Star, GraduationCap, BookOpen } from 'lucide-react'

import AllEvents from './AllEvents'
import Hero from './Hero'

const Home = () => {
  return (
    <div>
      <Hero />
      {/* About Section */}
      <section className="py-12 px-4 md:px-20 bg-amber-100">
        <h2 className="text-4xl font-extrabold mb-4 text-center text-amber-900">About Chitkara University Events</h2>
        <p className="text-lg text-center max-w-2xl mx-auto text-amber-800">
          Chitkara University Event Management System empowers students and faculty to discover, organize, and participate in vibrant campus events. 
          From tech fests to cultural nights, our platform brings the Chitkara community together.
        </p>
      </section>
      {/* Features Section */}
      <section className="py-12 px-4 md:px-20 bg-amber-50">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-amber-700">Platform Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-amber-200 rounded-lg p-6 shadow hover:scale-105 transition">
            <CalendarDays className="mx-auto mb-4 h-12 w-12 text-amber-700" />
            <h3 className="font-semibold text-xl mb-2 text-amber-800">Browse Events</h3>
            <p>Find upcoming university events by category, date, or organizer.</p>
          </div>
          <div className="bg-amber-100 rounded-lg p-6 shadow hover:scale-105 transition">
            <Users className="mx-auto mb-4 h-12 w-12 text-amber-700" />
            <h3 className="font-semibold text-xl mb-2 text-amber-800">Register & Participate</h3>
            <p>Sign up for workshops, competitions, and cultural programs with a single click.</p>
          </div>
          <div className="bg-amber-200 rounded-lg p-6 shadow hover:scale-105 transition">
            <Rocket className="mx-auto mb-4 h-12 w-12 text-amber-700" />
            <h3 className="font-semibold text-xl mb-2 text-amber-800">Host Your Own</h3>
            <p>Create and manage your own events, invite participants, and track enrollments.</p>
          </div>
        </div>
      </section>
      {/* Upcoming Highlights Section */}
      <section className="py-12 px-4 md:px-20 bg-amber-50">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-amber-900">Upcoming Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
            <Star className="mb-4 h-10 w-10 text-amber-700" />
            <h3 className="font-bold text-xl mb-2">Chitkara Tech Fest</h3>
            <p className="text-center">Join the biggest tech event of the year with coding, robotics, and more!</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
            <BookOpen className="mb-4 h-10 w-10 text-amber-700" />
            <h3 className="font-bold text-xl mb-2">Design Expo</h3>
            <p className="text-center">Showcase your creativity and learn from industry experts in design.</p>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-12 px-4 md:px-20 bg-amber-100">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-amber-900">What Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow">
            <GraduationCap className="mb-2 h-8 w-8 text-amber-700 mx-auto" />
            <p className="italic">"I found my dream internship through a campus event listed here!"</p>
            <span className="block mt-2 font-semibold text-amber-800">- Priya, Computer Science</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <Rocket className="mb-2 h-8 w-8 text-amber-700 mx-auto" />
            <p className="italic">"Organizing our tech fest was so easy and fun with this platform."</p>
            <span className="block mt-2 font-semibold text-amber-800">- Rahul, Event Coordinator</span>
          </div>
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="py-12 px-4 mb-25 md:px-20 bg-amber-200 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4 text-center text-amber-900">Ready to Experience Campus Life?</h2>
        <p className="text-lg text-center max-w-xl mb-6 text-amber-800">
          Sign up now to discover, join, and organize events at Chitkara University. Connect, learn, and celebrate with your peers!
        </p>
          <button className="bg-amber-700 text-white px-8 py-4 rounded-full font-bold shadow hover:bg-amber-800 transition">
            Get Started
          </button>
     
      </section>
      <AllEvents />
    </div>
  )
}

export default Home