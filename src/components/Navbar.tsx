import React from 'react'
import Link from "next/link"

const Navbar = () => {
  return (
    <div className=' flex justify-between w-full bg-black text-lg'>
      <Link href="/">Home</Link>
      <Link href="new">Add a Machine</Link>
      </div>
  )
}

export default Navbar