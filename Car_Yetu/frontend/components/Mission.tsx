import Link from "next/link";
import React from "react";

const Mission = () => {
  return (
    <div className="relative w-full h-[70vh] md:h-[80vh]">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-[url('../public/Assets/Audi-bg(lg).jpg')] bg-[url('../public/Assets/Audi-bg.jpg')]">
        {" "}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70" />

      {/* Content */}
      <div className="relative max-w-4xl z-10 flex items-center mx-auto justify-center h-full">
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="max-w-2xl scale-120 md:scale-150 text-center px-4 md:px-12"
        >
          <h1 className="text-secondaryColor text-center font-roboto text-lg md:text-2xl font-semibold mb-2 md:mb-4">
            Our Mission
          </h1>
          <p className="text-center font-montserrat text-sm md:text-base font-medium text-white mb-2 md:mb-4">
            At Audispot254, our mission is to empower Audi enthusiasts by
            providing easy access to high-quality parts, unique merchandise, and
            engaging content, while building a passionate community that shares
            a love for these exceptional cars.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
