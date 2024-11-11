"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import audi1 from "../public/Assets/Kenya Audis/Audi1.jpg";
import audi2 from "../public/Assets/Kenya Audis/Audi2.jpg";
import audi3 from "../public/Assets/Kenya Audis/Audi3.jpg";
import audi4 from "../public/Assets/Kenya Audis/Audi4.jpg";
import audi5 from "../public/Assets/Kenya Audis/Audi5.jpg";
import audi6 from "../public/Assets/Kenya Audis/Audi6.jpg";
import audi7 from "../public/Assets/Kenya Audis/Audi7.jpg";
import audi8 from "../public/Assets/Kenya Audis/Audi8.jpg";
import audi9 from "../public/Assets/Kenya Audis/Audi9.jpg";
import audi10 from "../public/Assets/Kenya Audis/Audi10.jpg";
import audi11 from "../public/Assets/Kenya Audis/Audi11.jpg";
import audi12 from "../public/Assets/Kenya Audis/Audi12.jpg";
import audi13 from "../public/Assets/Kenya Audis/Audi13.jpg";
import audi14 from "../public/Assets/Kenya Audis/Audi14.jpg";
import audi15 from "../public/Assets/Kenya Audis/Audi15.jpg";
import audi16 from "../public/Assets/Kenya Audis/Audi16.jpg";
import audi17 from "../public/Assets/Kenya Audis/Audi17.jpg";
import audi18 from "../public/Assets/Kenya Audis/Audi18.jpg";

// Interface for image data
interface ImageData {
  src: StaticImageData;
}

// Image data array
const images: ImageData[] = [
  {
    src: audi1,
  },
  {
    src: audi2,
  },
  {
    src: audi3,
  },
  {
    src: audi4,
  },
  {
    src: audi5,
  },
  {
    src: audi6,
  },
  {
    src: audi7,
  },
  {
    src: audi8,
  },
  {
    src: audi9,
  },
  {
    src: audi10,
  },
  {
    src: audi11,
  },
  {
    src: audi12,
  },
  {
    src: audi13,
  },
  {
    src: audi14,
  },
  {
    src: audi15,
  },
  {
    src: audi16,
  },
  {
    src: audi17,
  },
];

export default function ImageSlider(): JSX.Element {
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // State to determine if the image is being hovered over
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Function to show the previous slide
  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Function to show the next slide
  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // useEffect hook to handle automatic slide transition
  useEffect(() => {
    // Start interval for automatic slide change if not hovered
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      // Cleanup the interval on component unmount
      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  // Handle mouse over event
  const handleMouseOver = (): void => {
    setIsHovered(true);
  };

  // Handle mouse leave event
  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  return (
    <section className="md:max-w-4xl w-full py-8 mx-auto">
      <div className="relative w-full px-4 md:px-1 mx-auto mt-4">
        <div
          className="relative h-[500px] w-full overflow-hidden mx-4 group"
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src={images[currentIndex].src}
            alt={`Slider Image ${currentIndex + 1}`}
            objectFit="cover"
            className="w-full rounded-lg h-full object-cover transition-all duration-500 ease-in-out cursor-pointer"
          />
        </div>
        <button
          className="absolute left-12 top-1/2 transform h-[60px] rounded-xl hover:bg-[#1a222f] mx-1 -translate-y-1/2 bg-[#1a222f85] text-white p-2 group"
          onClick={prevSlide}
        >
          <ChevronLeft className="text-gray-400 group-hover:text-white" />
        </button>
        <button
          className="absolute right-12 top-1/2 transform h-[60px] rounded-xl hover:bg-[#1a222f] mx-1 -translate-y-1/2 bg-[#1a222f85] text-white p-2 group"
          onClick={nextSlide}
        >
          <ChevronRight className="text-gray-400 group-hover:text-white" />
        </button>
        <div className="flex justify-center mt-4">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-1 w-10 mx-1 ${
                index === currentIndex
                  ? "bg-secondaryColor rounded-xl"
                  : "bg-gray-300 rounded-xl"
              } transition-all duration-500 ease-in-out`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
