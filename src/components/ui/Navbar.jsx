import React from 'react'
import { Link } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { Menu } from 'lucide-react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <nav className="bg-amber-100 shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center text-3xl md:text-4xl font-extrabold text-amber-700">
            <Link to="/">Eventify</Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 flex-1 justify-center font-semibold text-amber-900">
            <Link to="/" className="hover:text-amber-700 transition">Home</Link>
            <Link to="/all" className="hover:text-amber-700 transition">All Events</Link>
            <Link to="/create" className="hover:text-amber-700 transition">Create Event</Link>
            <Link to="/dean" className="hover:text-amber-700 transition">Dean</Link>
            <Link to="/profile" className="hover:text-amber-700 transition">My Profile</Link>
          </div>
          {/* Auth Buttons */}
          <div className="flex items-center gap-2">
            <SignedOut>
              <SignInButton>
                <button className="bg-amber-700 text-white px-5 py-2 rounded-full font-bold shadow hover:bg-amber-800 transition">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton appearance={{
                elements: {
                  avatarBox: "w-16 h-16", // Bigger avatar
                  avatarImage: "w-full h-full",
                  userButtonPopoverCard: "rounded-lg shadow-lg"
                }
              }} />
              <button
                className="bg-amber-700 text-white px-5 py-2 rounded-full font-bold shadow hover:bg-amber-800 transition ml-2"
                onClick={() => window.location.href = "/sign-out"}
              >
                Sign Out
              </button>
            </SignedIn>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden ml-4 p-2 rounded hover:bg-amber-200"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open Menu"
            >
              <Menu className="h-7 w-7 text-amber-700" />
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-4 py-4 font-semibold text-amber-900 bg-amber-50 rounded shadow">
            <Link to="/" className="px-4 py-2 hover:text-amber-700 transition" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/all" className="px-4 py-2 hover:text-amber-700 transition" onClick={() => setMenuOpen(false)}>All Event</Link>
            <Link to="/create" className="px-4 py-2 hover:text-amber-700 transition" onClick={() => setMenuOpen(false)}>Create Event</Link>
            <Link to="/dean" className="px-4 py-2 hover:text-amber-700 transition" onClick={() => setMenuOpen(false)}>Dean</Link>
            <Link to="/profile" className="px-4 py-2 hover:text-amber-700 transition" onClick={() => setMenuOpen(false)}>My Profile</Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar