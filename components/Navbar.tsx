"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        <div className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Unsaid Spaces Logo"
            width={36}
            height={36}
            className="transition duration-300 hover:opacity-70"
          />
          <h1 className="text-sm uppercase tracking-[0.3em] text-zinc-300">
            Unsaid Spaces
          </h1>
        </div>

        <div className="flex gap-6 text-sm text-zinc-400">
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>

          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <a href="#gallery" className="hover:text-white transition">
            Gallery
          </a>
        </div>
      </div>
    </nav>
  );
}