"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import AOS from "aos";
import "aos/dist/aos.css";

interface BlogPost {
  id: string;
  title: string;
  snippet: string;
  imageUrl: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "5 Must-Have Audi Parts for Peak Performance",
    snippet:
      "Is your Audi not running as smoothly as it used to? Discover the top 5 essential parts that can boost your car’s performance and keep it in top condition. From turbochargers to performance brake pads, we've got the details on what you need.",
    imageUrl: "/Assets/Audi11.jpg",
    slug: "5 Must-Have Audi Parts for Peak Performance",
  },
  {
    id: "2",
    title: "Audi Maintenance Tips: How to Extend the Life of Your Car",
    snippet:
      "Routine maintenance is key to keeping your Audi performing at its best. In this guide, we cover expert tips on oil changes, brake inspections, and the importance of genuine parts. Learn how to extend your Audi’s lifespan and maintain its high performance.",
    imageUrl: "/Assets/audi6.jpg",
    slug: "Audi Maintenance Tips: How to Extend the Life of Your Car",
  },
  {
    id: "3",
    title: "Audi Enthusiast Gear: Top Merch for Every Fan",
    snippet:
      "Love Audi as much as we do? Check out our latest collection of Audi-branded hoods, t-shirts, and caps. In this post, we highlight the most popular merchandise that will keep you looking sharp at car meets or casual outings.",
    imageUrl: "/Assets/merchgrouped.jpg",
    slug: "Audi Enthusiast Gear: Top Merch for Every Fan",
  },
];

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <Card className="h-full overflow-hidden">
    <div className="relative h-48 w-full">
      <Image
        src={post.imageUrl}
        alt={post.title}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <CardContent className="p-4">
      <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
      <p className="textNormal opacity-70">{post.snippet}</p>
      <Link
        href={`/blog/${post.slug}`}
        className="text-secondaryColor hover:underline"
      >
        Read more
      </Link>
    </CardContent>
  </Card>
);

const LatestBlog: React.FC = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2
          data-aos="fade-down"
          data-aos-duration="500"
          className="heading text-center"
        >
          Latest from Our Blog
        </h2>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/blog"
            className="inline-block bg-secondary dark:text-white text-primaryColor font-semibold py-2 px-6 rounded-lg hover:text-white hover:bg-secondaryColor/80 transition-colors duration-300"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
