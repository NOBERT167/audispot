"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import logo from "../public/Assets/logo.jpg";
import Image from "@/node_modules/next/image";

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
                width={50}
                height={50}
                className="rounded-full"
                alt="logo"
              />
            </Link>
          </div>
          <div className="flex space-x-7">
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/" className="px-2 textNormal hover:text-[#cf253f]">
                Home
              </Link>
              <Link
                href="/parts"
                className="py-4 px-2 textNormal hover:text-[#cf253f]"
              >
                Audi Parts
              </Link>
              <Link
                href="/merchandise"
                className="py-4 px-2 textNormal hover:text-[#cf253f]"
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
            <div className="flex items-center space-x-2">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <Switch
                checked={theme === "dark"}
                onCheckedChange={toggleTheme}
              />
            </div>
          </div>
          <div className="md:hidden flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <Switch
                checked={theme === "dark"}
                onCheckedChange={toggleTheme}
              />
            </div>
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
          <Link href="/" className="block py-2 px-4 text-sm hover:bg-gray-200">
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
  );
};

export default Navbar2;
