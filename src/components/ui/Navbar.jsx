import React from 'react'
import { Link } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
const Navbar = () => {
  return (
    <div className='min-h-20 flex justify-evenly items-center px-18 py-4'>
      <div className='flex justify-center items-center'>
        <img src="/images/logo.svg" alt="" className='h-10'/>
      </div>
      <div className='flex justify-center items-center gap-15 flex-1 font-semibold'>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/create">Create Event</Link></div>
        <div><Link to="/profile">My Profile</Link></div>
      </div>
      <div>
        <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton appearance={{
    elements: {
            avatarBox: "w-14 h-14",      // increased size (e.g. w-14 = 3.5rem / 56px)
            avatarImage: "w-full h-full" // make the avatar image fill the box
          }
  }}/>
      </SignedIn>
    </header>
      </div>
    </div>
  )
}

export default Navbar