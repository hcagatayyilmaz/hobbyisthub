import React from "react"
import Link from "next/link"

function Navbar() {
  return (
    <div className="max-w-screen-xl flex flex-col justify-center items-center py-4 ">
      <Link href={"/"} className="text-2xl">
        <span className="text-yellow-400 font-bold">H</span>obbyist Hub
      </Link>
    </div>
  )
}

export default Navbar
