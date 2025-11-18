import React from 'react'
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-amber-200 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Branding & Copyright */}
        <div className="text-amber-900 font-bold text-xl text-center md:text-left">
          TrendHackers &copy; {new Date().getFullYear()} <br />
          <span className="text-base font-normal">All rights reserved.</span>
        </div>
        {/* Quick Links */}
        <div className="flex flex-col items-center gap-2">
          <span className="font-semibold text-amber-800">Quick Links</span>
          <div className="flex gap-4 flex-col">
            <a href="/" className="hover:underline text-amber-700">Home</a>
            <a href="/create" className="hover:underline text-amber-700">Create Event</a>
            <a href="/profile" className="hover:underline text-amber-700">Profile</a>
          </div>
        </div>
        {/* Social & Contact */}
        <div className="flex flex-col items-center gap-2">
          <span className="font-semibold text-amber-800">Connect with us</span>
          <div className="flex gap-4">
            <a href="mailto:info@trendhackers.com" aria-label="Email">
              <Mail className="h-6 w-6 text-amber-700 hover:text-amber-900 transition" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="h-6 w-6 text-amber-700 hover:text-amber-900 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-6 w-6 text-amber-700 hover:text-amber-900 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-amber-700 hover:text-amber-900 transition" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-amber-700 mt-6 text-sm">
        Made with ❤️ by TrendHackers Team
      </div>
    </footer>
  )
}

export default Footer