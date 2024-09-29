import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const notFound = () => {
  return (
    <main className="bg-gray-200 dark:bg-primaryColor">
      <div className="max-w-4xl mx-auto">
        <h1 className="heading text-center">
          Oops! Looks like you took a wrong turn.
        </h1>
        <p className="textNormal text-center">
          It seems the page you're looking for doesn’t exist. But don’t worry,
          you’re still in the right place for all things Audi!
        </p>
        <br />
        <h3 className="subHeading">
          Here are some helpful links to get you back on track:
        </h3>
        <ul>
          <li className="list-none">
            <Link
              href="/merchandise"
              className="textNormal hover:underline hover:text-secondaryColor block"
            >
              👉🏼Explore Audi Merchandise
            </Link>
            <Link
              href="/"
              className="textNormal hover:underline hover:text-secondaryColor block"
            >
              👉🏼Go to the Homepage
            </Link>
            <Link
              href="/contact"
              className="textNormal hover:underline hover:text-secondaryColor block"
            >
              👉🏼Contact Us if you need assistance.
            </Link>
          </li>
        </ul>
        <span className="subHeading">
          Or, why not check out our{" "}
          <Link className="underline text-blue-700" href="/block">
            latest blog posts?
          </Link>
        </span>
        <br />
        <h3 className="heading">Need some help</h3>
        <p className="textNormal">
          If you need further assistance, feel free to reach out to our team.
          We’re here to help!
        </p>{" "}
        <div className="my-5">
          <hr />
          <h3 className="heading">
            Follow us on social media for the latest updates:
          </h3>
          <div className="flex items-center space-x-4">
            <Link href="https://www.instagram.com/audispot254/" target="_blank">
              <FaInstagram className="socialIcons" size={32} />
            </Link>
            <Link href="https://web.facebook.com/navas.herbert" target="_blank">
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
    </main>
  );
};

export default notFound;
