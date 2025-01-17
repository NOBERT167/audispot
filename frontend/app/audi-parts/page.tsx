"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import parts from "../../public/Assets/Parts.jpg";
import { ClipboardCheck, Copy } from "lucide-react";

const Support = () => {
  const [copy, setCopy] = useState(false);
  const handleCopyClick = () => {
    navigator.clipboard.writeText("4970110");
    setCopy(true);
  };

  return (
    <main className="bg-gray-200 dark:bg-primaryColor py-8 px-4 lg:px-6">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto">
        <div className="text-center pb-6 mb-4 md:pb-12">
          <h1 className="heading text-center">Audi Parts – Coming Soon</h1>
          <p className="subHeading">Exciting Things Are on the Way!</p>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2">
              <Image
                src={parts}
                alt="Audi parts"
                width={600}
                height={400}
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <p className="textNormal text-left">
                We’re working hard behind the scenes to bring you a
                comprehensive selection of genuine Audi parts, from engine
                components to performance upgrades, all in one place. Stay tuned
                for the launch of our Audi Parts store, where you’ll be able to
                find everything you need to maintain and upgrade your Audi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Follow us section */}
      <section className="text-center pb-8 md:pb-12">
        <h2 className="subHeading">Follow Us for Updates:</h2>
        <p className="textNormal">
          Follow us on social media for sneak peeks and updates about our Audi
          Parts launch:
        </p>
        <ul className="list-none textNormal text-center">
          <li>
            Tiktok:{" "}
            <a
              href="https://www.tiktok.com/@audispot254"
              className="text-blue-600 hover:text-secondaryColor"
              target="_blank"
            >
              @audispot254
            </a>
          </li>
          <li>
            Instagram:{" "}
            <a
              href="https://www.instagram.com/audispot254/"
              className="text-blue-600 hover:text-secondaryColor"
              target="_blank"
            >
              @audispot254
            </a>
          </li>
          <li>
            Facebook:{" "}
            <a
              href="https://web.facebook.com/navas.herbert"
              className="text-blue-600 hover:text-secondaryColor"
              target="_blank"
            >
              Navas Herbert
            </a>
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="pb-8 md:pb-12 mt-4 md:mt-8 text-center">
        <h2 className="subHeading">In the Meantime…</h2>
        <span className="mb-4 textNormal">
          Check out our latest{" "}
          <Link
            href="/merchandise"
            className="text-blue-600 hover:text-secondaryColor"
          >
            merchandise
          </Link>{" "}
          or{" "}
          <Link
            href="/support"
            className="text-blue-600 hover:text-secondaryColor"
          >
            Support us
          </Link>{" "}
          so that we can be able to provide audi parts asap
        </span>
      </section>
    </main>
  );
};

export default Support;
