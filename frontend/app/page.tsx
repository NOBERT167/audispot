import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ImageSlider from "@/components/ImageSlider";
// import LatestBlog from "@/components/LatestBlog";
import Product from "@/components/Product";
import FullWidthImageSection from "@/components/Submit2";
import Testimonials from "@/components/Testimonials";
import submitBg from "../public/Assets/Submit-bg1.jpg";

export default function Home() {
  return (
    <main className="bg-gray-200 dark:bg-primaryColor">
      <Hero />
      <ImageSlider />
      <Product />
      <Testimonials />
      <FullWidthImageSection />
      {/* <LatestBlog /> */}
    </main>
  );
}
