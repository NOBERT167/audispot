import Link from "@/node_modules/next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative w-full h-[80vh] md:h-[60vh]">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('../public/Assets/Footer-bg.jpg')]">
        {" "}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-5 md:gap-20 pt-4 md:pt-20 md:flex-row justify-between text-center md:text-left px-4 md:px-12">
            <div className="p-2">
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
                Products
              </h2>
              <Link
                className="text-center font-montserrat text-sm md:text-base font-medium text-gray-300 mb-2 md:mb-4 hover:underline"
                href="merchandise"
              >
                Merchandise
              </Link>
              <br />
              <Link
                className="text-center font-montserrat text-sm md:text-base font-medium text-gray-300 mb-2 md:mb-4 hover:underline"
                href="parts"
              >
                Audi Parts
              </Link>
              <br />
            </div>
            <div className="p-2">
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
                Quicklinks
              </h2>
              <Link
                className="text-center font-montserrat text-sm md:text-base font-medium text-gray-300 mb-2 md:mb-4 hover:underline"
                href="merchandise"
              >
                About Us
              </Link>
              <br />
              <Link
                className="text-center font-montserrat text-sm md:text-base font-medium text-gray-300 mb-2 md:mb-4 hover:underline"
                href="parts"
              >
                Buy Me Cofee
              </Link>
              <br />
              <Link
                className="text-center font-montserrat text-sm md:text-base font-medium text-gray-300 mb-2 md:mb-4 hover:underline"
                href="merchandise"
              >
                Contact
              </Link>
              <br />
              <Link
                className="text-center font-montserrat text-sm md:text-base font-medium text-gray-300 mb-2 md:mb-4 hover:underline"
                href="https://www.instagram.com/audispot254/"
                target="_blank"
              >
                Submit shots
              </Link>
              <br />
            </div>
            <div className="p-2">
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
                Follow Us!
              </h2>
              <div className="flex items-center space-x-4">
                <Link
                  href="https://www.instagram.com/audispot254/"
                  target="_blank"
                >
                  <FaInstagram className="socialIcons" size={32} />
                </Link>
                <Link
                  href="https://web.facebook.com/navas.herbert"
                  target="_blank"
                >
                  <FaFacebook className="socialIcons" size={32} />
                </Link>
                <Link
                  href="https://www.tiktok.com/@audispot254?_t=8pzdvtUD16r&_r=1"
                  target="_blank"
                >
                  <FaTiktok className="socialIcons" size={32} />
                </Link>
                <Link
                  href="https://www.youtube.com/@audispotke"
                  target="_blank"
                >
                  <FaYoutube className="socialIcons" size={32} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <p className="text-base font-medium text-gray-300 mb-6 mt-10 text-center">
          &copy; Copyright Audispot254.All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
