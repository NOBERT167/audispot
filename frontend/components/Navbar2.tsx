"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import logo from "../public/Assets/logo.jpg";
import Image from "@/node_modules/next/image";
import { ModeToggle } from "./ModeToggle";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <nav className="bg-slate-300 dark:bg-gray-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div>
            <Link href="/" className="flex items-center py-2 px-1">
              <Image
                src={logo}
                width={60}
                height={60}
                className="rounded-full"
                alt="logo"
              />
            </Link>
          </div>
          <div className="flex space-x-7">
            <div className="hidden md:flex items-center space-x-1">
              <Link
                href="/"
                className="px-2 mt-3 textNormal hover:text-[#cf253f]"
              >
                Home
              </Link>
              <Link
                href="/audi-parts"
                className="py-4 px-2 mt-3 textNormal hover:text-[#cf253f]"
              >
                Audi Parts
              </Link>
              <Link
                href="/merchandise"
                className="py-4 px-2 mt-3 textNormal hover:text-[#cf253f]"
              >
                Merchandise
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <Button className="primaryBtn">
              {" "}
              <Link href="/about">About</Link>
            </Button>
            <Button className="secondaryBtn">
              <Link href="/support">Buy Me Coffee</Link>
            </Button>
            <div className="border border-slate-500 dark:border-slate-300 dark:text-white rounded-sm">
              <ModeToggle />
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <div className="border border-slate-500 dark:border-slate-300 dark:text-white rounded-sm mr-2">
              <ModeToggle />
            </div>
            <Button className="" size="icon" onClick={toggleMenu}>
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
        <div className="md:hidden px-4">
          <Link href="/" onClick={toggleMenu} className="textNormal block">
            Home
          </Link>
          <Link
            href="/audi-parts"
            onClick={toggleMenu}
            className="textNormal block"
          >
            Audi Parts
          </Link>
          <Link
            href="/merchandise"
            onClick={toggleMenu}
            className="textNormal block"
          >
            Merchandise
          </Link>
          <div className="py-2">
            <Button variant="outline" className="w-full primaryBtn mb-2">
              <Link onClick={toggleMenu} href="/about">
                About
              </Link>
            </Button>
            <Button className="w-full secondaryBtn mb-4">
              <Link onClick={toggleMenu} href="/support">
                Buy Me Cofee
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;
