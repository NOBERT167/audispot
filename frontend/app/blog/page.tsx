import React from "react";
import { client, urlFor } from "../lib/sanity";
import { blogCard } from "../lib/interface";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function fetchBlog() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
  title, smallDescription, "currentSlug": slug.current, titleImage
}`;

  const data = await client.fetch(query);

  return data;
}

const BlogPage = async () => {
  const data: blogCard[] = await fetchBlog();
  return (
    <div className="bg-gray-200 dark:bg-primaryColor">
      <div className="w-full px-4 md:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 pt-5 gap-5">
        {data.map((blog) => (
          <Card key={blog.currentSlug}>
            <Image
              src={urlFor(blog.titleImage).url()}
              alt="Blog Image"
              width={500}
              height={500}
              className="rounded-t-lg h-[200px] object-cover"
            />
            <CardContent className="mt-5">
              <h3 className="subHeading line-clamp-2">{blog.title}</h3>
              <p className="textNormal line-clamp-3">{blog.smallDescription}</p>
            </CardContent>
            <Button asChild className="secondaryBtn w-full">
              <Link href={`/blog/${blog.currentSlug}`}>Read More</Link>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
