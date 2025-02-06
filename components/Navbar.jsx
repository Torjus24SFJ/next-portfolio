import Link from "next/link"
import React from "react"

const Links = [
    {href:"/about", text:"about"}
]

export const NavBar = () => {
    return (
        <nav className="">
            <div className="flex gap-10">
                <Link href="/" className="hover:bg-cyan-600 p-6">Home</Link>
                <Link href="/about" className="hover:bg-cyan-600 p-6">About</Link>
            </div>
        </nav>
    )
}