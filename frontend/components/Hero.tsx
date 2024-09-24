"use client";
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import React, { useEffect } from "react";
import heroImg from "../public/Assets/Hero Img.jpg";
import { Button } from "./ui/button";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <section className="px-4 md:px-8 py-8 lg:px-16 min-h-screen">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-4 md:gap-8">
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="w-full lg:w-1/2 flex flex-col justify-start"
        >
          <h2 className="heading uppercase">
            Welcome to audispot 254 - your ultimate audi destination
          </h2>
          <p className="textNormal">
            Genuine Audi parts & Exclusive Merchandise for Enthusiasts Like You
          </p>
          <div className="flex gap-4">
            <Button className="secondaryBtn text-white text-lg hover:text-slate-900">
              <Link href="/mechandise" className="">
                Shop Merchandise
              </Link>
            </Button>
            <Button className="font-montserrat">
              <Link href="/buymecofee" className="text-lg">
                Buy Me Cofee
              </Link>
            </Button>
          </div>
        </div>
        <div
          data-aos-duration="1500"
          data-aos="flip-left"
          className="w-full lg:w-1/2"
        >
          <Image
            src={heroImg}
            alt="Product showcase"
            width={600}
            height={400}
            className="shadow-lg w-full md:w-3/4 h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
