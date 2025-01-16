import React from "react";
import Link from "next/link";
import Image from "next/image";
import fuel from "../../public/Assets/Fuel.jpg";
import { Button } from "@/components/ui/button";

const Support = () => {
  return (
    <main className="bg-gray-200 dark:bg-primaryColor">
      <section className="max-w-4xl mx-auto">
        <div className="py-8 px-4 lg:px-6">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="heading text-center">Support AudiSpot254</h1>
            <p className="textNormal">
              Help us fuel our passion for Audi and keep creating stunning
              content for the Audi community.
            </p>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-full lg:w-1/2">
                <Image
                  src={fuel}
                  alt="Support fuel audi"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <h2 className="subHeading text-left">
                  Why Your Support Matters
                </h2>
                <p className="textNormal text-left">
                  At AudiSpot, we celebrate the Audi lifestyle by creating
                  captivating road trip content, featuring top-tier Audi models,
                  and building a vibrant community of enthusiasts. Being a
                  startup, however, comes with challenges:
                </p>
                <ul className="textNormal list-disc text-left">
                  <li className="ml-4 text-secondaryColor ">
                    Hiring premium Audi models for shoots.
                  </li>
                  <li className="ml-4 text-secondaryColor ">
                    Covering fuel and travel expenses for scenic road trips.
                  </li>
                  <li className="ml-4 text-secondaryColor ">
                    Investing in professional video production gear.
                  </li>
                </ul>
                <p className="textNormal text-left">
                  Your support helps us expand our content reach, host events
                  for Audi lovers, and continue offering premium Audi parts and
                  merchandise.
                </p>
                <Link href="/supportnow" className="">
                  <Button className="secondaryBtn w-full hover:text-white text-white text-lg dark:hover:text-slate-900">
                    Support Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Ways to Support Section
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">
              Ways to Support AudiSpot
            </h2>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Lipa na M-Pesa</h3>
              <p className="mb-4">
                Support us directly via M-Pesa Till Number for quick and
                seamless contributions.
              </p>
              <p className="font-semibold">
                Till Number: <span className="text-blue-600">123456</span>
              </p>
            </div>
          </section> */}

          {/* Thank You Section */}
          <section className="text-center mb-12">
            <h2 className="subHeading">Every Contribution Counts</h2>
            <p className="textNormal">
              Your support means the world to us. Whether it’s a small donation,
              purchasing our merch, or sharing our content, you’re helping us
              grow and connect with more Audi enthusiasts.
            </p>
            <p className="textNormal italic">
              Together, we can keep the Audi spirit alive and thriving!
            </p>
          </section>

          {/* Contact Section */}
          <section className="mb-12 text-center">
            <h2 className="subHeading">Contact Us for Collaborations</h2>
            <p className="mb-4 textNormal">
              Want to collaborate or sponsor a road trip? Let’s create something
              extraordinary together.
            </p>
            <ul className="list-none textNormal text-center">
              <li>
                Email:{" "}
                <a
                  href="mailto:support@audispot.com"
                  className="text-blue-600 hover:text-secondaryColor"
                >
                  audispot254@gmail.com
                </a>
              </li>
              <li>
                Call/WhatsApp:{" "}
                <a
                  href="mailto:support@audispot.com"
                  className="text-blue-600 hover:text-secondaryColor"
                >
                  0715623803
                </a>
              </li>
              <li>
                Social Media:{" "}
                <a
                  href="https://www.instagram.com/audispot254/"
                  className="text-blue-600 hover:text-secondaryColor"
                >
                  Instagram
                </a>
                ,{" "}
                <a
                  href="https://www.youtube.com/@audispotke"
                  className="text-blue-600 hover:text-secondaryColor"
                >
                  YouTube
                </a>
                ,{" "}
                <a
                  href="https://www.tiktok.com/@audispot254?_t=8pzdvtUD16r&_r=1"
                  className="text-blue-600 hover:text-secondaryColor"
                >
                  TikTok
                </a>
                ,{" "}
                <Link
                  href={`https://wa.me/254715623803?text=Hello%20i%20would%20like%20to%20collaborate%20with%20you%20or%20sponsor%20a%20road%20trip.`}
                  target="_blank"
                  className="text-blue-600 hover:text-secondaryColor"
                >
                  Whatsap
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Support;
