"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow bg-white sticky top-0 z-50">
      {/* Logo */}
      <a href="/" className="flex items-center space-x-2">
        <Image
          src="/images/logo.png" // <-- put your logo file in public/images/
          alt="Bhakti Bites Logo"
          width={200} // adjust size
          height={200}
          className="object-contain"
        />
        {/* <span className="text-xl font-bold text-orange-700 hidden sm:block">
          Bhakti Bites
        </span> */}
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <li><a href="#">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#values">Our Values</a></li>
        <li><a href="#story">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-gray-700"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col space-y-4 p-6 text-gray-700 font-medium">
            <li><a href="#" onClick={() => setOpen(false)}>Home</a></li>
            <li><a href="#products" onClick={() => setOpen(false)}>Products</a></li>
            <li><a href="#values" onClick={() => setOpen(false)}>Our Values</a></li>
            <li><a href="#story" onClick={() => setOpen(false)}>About</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
