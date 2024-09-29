import React from "react";
import myCar from "../public/Assets/Audi9.jpg";
import logo from "../public/Assets/logo.jpg";
import Image from "next/image";
import support from "../public/Assets/undraw_transfer_money_re_6o1h.svg";
import Link from "next/link";
import { Button } from "./ui/button";
<<<<<<< HEAD
=======
import Mission from "./Mission";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
>>>>>>> ee79a49ffe94eac3584744036a9147b5324e584e

const About = () => {
  return (
    <section className="max-w-6xl mx-auto">
<<<<<<< HEAD
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-8 lg:px-16">
=======
      <div className="max-w-4xl mx-auto py-8 px-4 lg:px-8">
>>>>>>> ee79a49ffe94eac3584744036a9147b5324e584e
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
<<<<<<< HEAD
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
=======
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
>>>>>>> ee79a49ffe94eac3584744036a9147b5324e584e
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <Image
              src={logo}
              alt="Product showcase"
              width={600}
              height={400}
<<<<<<< HEAD
              className="rounded-lg shadow-md w-1/2 h-auto"
=======
              className="rounded-lg shadow-md w-full md:w-3/4 h-auto"
>>>>>>> ee79a49ffe94eac3584744036a9147b5324e584e
            />
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <div className="py-12 mx-auto px-4 md:px-8 lg:px-16">
=======
      <div className="">
        <Mission />
      </div>
      {/* <div className="py-12 mx-auto px-4 md:px-8 lg:px-16">
>>>>>>> ee79a49ffe94eac3584744036a9147b5324e584e
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
<<<<<<< HEAD
      </div>
      <div className="py-12 mx-auto px-4 md:px-8 lg:px-16">
=======
      </div> */}
      <div className="py-8 mx-auto px-4 md:px-8 lg:px-16">
>>>>>>> ee79a49ffe94eac3584744036a9147b5324e584e
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
<<<<<<< HEAD
              className="rounded-lg shadow-md w-1/2 h-auto"
=======
              className="rounded-lg shadow-md w-full md:w-1/2 h-auto"
>>>>>>> ee79a49ffe94eac3584744036a9147b5324e584e
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
