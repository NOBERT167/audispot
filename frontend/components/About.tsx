"use client";
import React from "react";
import myCar from "../public/Assets/Audi9.jpg";
import logo from "../public/Assets/logo.jpg";
import Image from "next/image";
import support from "../public/Assets/support.png";
import Link from "next/link";
import { Button } from "./ui/button";
import Mission from "./Mission";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const About = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="max-w-4xl mx-auto py-8 px-4 lg:px-8">
        <h1 className="heading text-center">About Us – Driven by Passion</h1>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2">
            <Image
              src={myCar}
              alt="Product showcase"
              width={600}
              height={400}
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <p className="textNormal">
              Welcome to Audispot254—Kenya’s ultimate community for Audi
              enthusiasts. Founded by Navas Herbert, we’re dedicated to bringing
              together Audi lovers across the country. Audispot254 is your
              one-stop destination for exclusive merchandise, engaging content,
              and all things Audi. While we plan to offer authentic parts in the
              future, our primary focus is building a strong, connected
              community that shares a passion for the brand. Join us as we grow
              Kenya's Audi scene, bringing together fans with exciting events,
              custom gear, and shared experiences.
            </p>
            <h2 className="heading">Join Our Community!</h2>
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
              <Link href="https://www.youtube.com/@audispotke" target="_blank">
                <FaYoutube className="socialIcons" size={32} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 mx-auto px-4 md:px-8 lg:px-16">
        <h1 className="heading text-center">Our Journey at Audispot254</h1>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <p className="textNormal">
              Audispot254 was born out of a deep, long-standing passion for Audi
              and the automotive world. As a car enthusiast and founder, I,
              Navas Herbert, began simply by sharing posts about Audis for fun.
              What started as a personal hobby has since grown into a thriving
              platform for the Audi community in Kenya and beyond.
            </p>
            <p className="textNormal">
              Over time, I realized the need for a dedicated space where fellow
              Audi lovers could access both high-quality parts and unique
              merchandise without the hassle. This realization inspired me to
              take action, and with the support of my community, Audispot254
              evolved into a trusted resource for Audi enthusiasts.
            </p>
            <p className="textNormal">
              Today, we’re not just about showcasing stunning Audi content.
              We’re proud to offer a platform where people can easily source
              genuine Audi parts, enjoy premium merchandise, and connect with
              others who share the same passion. From helping enthusiasts with
              parts to celebrating the beauty of Audi cars, our journey is just
              beginning—and we’re excited about what’s to come for the
              Audispot254 family.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <Image
              src={logo}
              alt="Product showcase"
              width={600}
              height={400}
              className="rounded-lg shadow-md md:w-3/4 w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div className="">
        <Mission />
      </div>
      <div className="py-8 mx-auto px-4 md:px-8 lg:px-16">
        <h1 className="heading text-center">Support Our Journey</h1>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <p className="textNormal">
              We’re dedicated to growing this community and providing even more
              great products and content for Audi enthusiasts. If you’d like to
              support our work and help us continue to offer valuable resources,
              there are several ways you can contribute:
            </p>
            <div className="flex gap-8 mb-4">
              <Button className="secondaryBtn">
                <Link href="#">Buy Me Cofee</Link>
              </Button>
              <Button className="primaryBtn">
                <Link href="#">Paypal</Link>
              </Button>
            </div>
            <p className="textNormal opacity-60">
              Your support means the world to us, and it helps us invest in new
              products, website improvements, and more content for you. Every
              small contribution helps us grow and keep providing you with the
              best.
            </p>
          </div>

          <div className="w-full lg:w-3/4">
            <Image
              src={support}
              alt="Product showcase"
              width={600}
              height={400}
              className="rounded-lg shadow-md w-full md:w-1/2 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
