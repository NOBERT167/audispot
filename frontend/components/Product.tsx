"use client";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import productShowcase from "../public/Assets/merchgrouped.jpg";
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <section
      data-aos="flip-up"
      data-aos-duration="1000"
      className="py-12 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="heading text-center">Merchandise</h1>
        <p className="subHeading text-center">
          Exclusive Audi Gear - Wear Your Passion
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2">
            <Image
              src={productShowcase}
              alt="Product showcase"
              width={600}
              height={400}
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800 dark:text-white">
              Exclusive Audi Gear
            </h2>
            <p className="textNormal">
              Express your love for Audi with our exclusive collection of hoods,
              t-shirts, and caps. Whether you're at a car meet or just hanging
              out, look your best in high-quality gear.
            </p>
            <Button size="lg" className="secondaryBtn">
              <Link href="merchandise">Shop Now!</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
