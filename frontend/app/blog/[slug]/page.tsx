import { blogContentTypes } from "@/app/lib/interface";
import { client, UrlFor } from "@/app/lib/sanity";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";
import React from "react";

export const revalidate = 30; //revalidates at most 30 seconds

const fetchBlogContent = async (slug: string) => {
  const query = `*[_type == 'blog' && slug.current == '${slug}'] {
  "currentSlug": slug.current,
  title,
    content,
    titleImage
}[0]`;
  const data = await client.fetch(query);
  return data;
};

const BlogArticle = async ({ params }: { params: { slug: string } }) => {
  const data: blogContentTypes = await fetchBlogContent(params.slug);
  return (
    <div className="bg-gray-200 min-h-screen dark:bg-primaryColor flex justify-center">
      <div className="max-w-6xl px-4 mx-auto py-10">
        <h1 className="heading text-center">{data.title}</h1>
        <div className="flex justify-center">
          <Image
            alt="blog image"
            src={urlFor(data.titleImage).url()}
            width={1200}
            height={1200}
            priority
            className="rounded-lg w-[500px] mt-3"
          />
        </div>
        <div className="mt-10 prose prose-blue prose-xl dark:prose-invert prose-li:marker:text-secondaryColor">
          <PortableText value={data.content} />
        </div>
      </div>
    </div>
  );
};

export default BlogArticle;
