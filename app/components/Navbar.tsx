import React from "react"
import Link from "next/link"
function Navbar() {
  return (
    <div className="flex justify-center items-center py-4">
      <Link href={"/"} className="text-2xl">
        Hobbyist Hub
      </Link>
    </div>
  )
}

export default Navbar
