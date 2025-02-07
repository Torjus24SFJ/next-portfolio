import Link from "next/link"
import React from "react"

const Links = [
    {href:"/about", text:"about"}
]

export const NavBar = () => {
    return (
        <nav className="flex flex-start justify-between m-10">
            <div className="flex">
                <h1 className="font-thin custom_text_gradient_radial">Torjus<br /> Tveten</h1>
                {/* <i className="fa fa-bars"></i> */}
                {/* <Link href="/" className="hover:bg-cyan-600 p-6">Home</Link> */}
                {/* <Link href="/about" className="hover:bg-cyan-600 p-6">About</Link> */}
            </div>
        </nav>
    )
}