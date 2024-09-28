"use client";
import Link from "@/node_modules/next/link";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import AOS from "aos";
import "aos/dist/aos.css";

const FullWidthImageSection: React.FC = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <section className="relative w-full h-[80vh]">
      {/* Background Image */}
      <div
        data-aos="zoom-out"
        data-aos-duration="2000"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('../public/Assets/Submit-bg(small).jpg')] md:bg-[url('../public/Assets/Submit-bg1.jpg')]"
      >
        {" "}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content */}
      <div className="relative max-w-4xl z-10 flex items-center justify-center md:justify-start h-full">
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="max-w-2xl text-center md:text-left px-4 md:px-12"
        >
          <h1 className="text-xl md:text-3xl font-semibold mb-4 text-white">
            Have quality audi shots?
          </h1>
          <p className="text-base font-medium text-gray-300 mb-6">
            Send us your Audi shots now to get posted on instagram, receive
            shout outs and get a chance to win free merchandise!
          </p>
          <Button className="ctaButton">
            <Link target="_blank" href="https://www.instagram.com/audispot254/">
              Submit Now!
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FullWidthImageSection;
