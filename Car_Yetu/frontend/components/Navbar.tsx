"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "@/node_modules/next/image";
import logo from "../public/Assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky">
      <nav className="mt-3 z-50 max-w-6xl mx-auto rounded-3xl bg-primary shadow-lg">
        <div className="mx-auto px-4">
          <div className="flex justify-between">
            <div>
              <Link href="/" className="flex items-center py-2 px-1">
                <Image
                  src={logo}
                  width={50}
                  height={50}
                  className="rounded-full"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="flex space-x-7">
              <div className="hidden md:flex items-center space-x-1">
                <Link
                  href="/"
                  className="py-4 px-2 text-foreground hover:text-[#cf253f]"
                >
                  Home
                </Link>
                <Link
                  href="/parts"
                  className="py-4 px-2 text-foreground hover:text-[#cf253f]"
                >
                  Audi Parts
                </Link>
                <Link
                  href="/merchandise"
                  className="py-4 px-2 text-foreground hover:text-[#cf253f]"
                >
                  Merchandise
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-3">
              <Button className="hover:text-[#cf253f]">
                {" "}
                <Link href="/about">About</Link>
              </Button>
              <Button className="bg-[#cf253f] hover:bg-[#cf253f]/80">
                <Link href="/support">Buy Me Coffee</Link>
              </Button>
            </div>
            <div className="md:hidden flex items-center">
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <Link
              href="/"
              className="block py-2 px-4 text-sm hover:bg-gray-200"
            >
              Home
            </Link>
            <Link
              href="/parts"
              className="block py-2 px-4 text-sm hover:bg-gray-200"
            >
              Audi Parts
            </Link>
            <Link
              href="/merchandise"
              className="block py-2 px-4 text-sm hover:bg-gray-200"
            >
              Merchandise
            </Link>
            <div className="py-2 px-4">
              <Button variant="outline" className="w-full mb-2">
                <Link href="/about">About</Link>
              </Button>
              <Button className="w-full">
                <Link href="/support">Buy Me Cofee</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
