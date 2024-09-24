import React from "react";
import myCar from "../public/Assets/Audi9.jpg";
import logo from "../public/Assets/logo.jpg";
import Image from "next/image";
import support from "../public/Assets/undraw_transfer_money_re_6o1h.svg";
import Link from "next/link";
import { Button } from "./ui/button";

const About = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-8 lg:px-16">
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
              At Audispot 254, we’re more than just a store—we’re a community of
              Audi enthusiasts. Founded by Navas Herbert, our mission is to
              provide fellow Audi lovers with the best in authentic parts and
              exclusive merchandise. Whether you’re looking to enhance your
              car’s performance or show your love for the brand through custom
              gear, we’re here to deliver.
            </p>
            <Button className="secondaryBtn mb-4">
              <Link href="#">Follow us on Instagram!</Link>
            </Button>
            <Button className="secondaryBtn">
              <Link href="#">Follow our facebook page!</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="py-12 mx-auto px-4 md:px-8 lg:px-16">
        <h1 className="heading text-center">Our Story</h1>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <p className="textNormal">
              Our journey started with a deep passion for Audi. Navas Herbert,
              the founder of Audispot 254, has been a long-time Audi fan and car
              enthusiast. After struggling to find high-quality parts and unique
              merchandise for his own Audi, he decided to take matters into his
              own hands and create a space where fellow enthusiasts could easily
              find the parts they need and the gear they love. What started as a
              small venture has grown into a trusted resource for Audi owners
              and fans. We’re proud to offer a carefully curated selection of
              genuine parts and premium apparel, all tailored to meet the needs
              of our passionate community.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <Image
              src={logo}
              alt="Product showcase"
              width={600}
              height={400}
              className="rounded-lg shadow-md w-1/2 h-auto"
            />
          </div>
        </div>
      </div>
      <div className="py-12 mx-auto px-4 md:px-8 lg:px-16">
        <h1 className="heading text-center">Our Mission</h1>
        <div className="w-full flex flex-col justify-center">
          <p className="textNormal">
            At Audispot 254, our mission is simple: To help Audi owners maintain
            and enhance their vehicles while giving them the opportunity to
            express their love for the brand. We believe in providing
            high-quality products, fast shipping, and exceptional customer
            service. Whether you're tuning up your car or adding to your
            collection of Audi merchandise, we’re here to ensure you get the
            best.
          </p>
        </div>
      </div>
      <div className="py-12 mx-auto px-4 md:px-8 lg:px-16">
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

          <div className="w-full lg:w-1/2">
            <Image
              src={support}
              alt="Product showcase"
              width={600}
              height={400}
              className="rounded-lg shadow-md w-1/2 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
