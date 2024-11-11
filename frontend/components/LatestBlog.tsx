// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { client } from "@/sanity/lib/client";
// import { blogCard } from "@/app/lib/interface";
// import { urlFor } from "@/sanity/lib/image";
// import { Button } from "./ui/button";

// interface BlogPost {
//   id: string;
//   title: string;
//   snippet: string;
//   imageUrl: string;
//   slug: string;
// }

// export const revalidate = 30; //revalidates at most 30 seconds
// async function fetchLatestBlog() {
//   const query = `*[_type == "blog"] | order(publishedAt desc) [0...3] {
//   title,
//   "currentSlug": slug.current,
//   titleImage,
//   smallDescription
// }`;

//   const data = await client.fetch(query);
//   return data;
// }

// const blogPosts: BlogPost[] = [
//   {
//     id: "1",
//     title: "5 Must-Have Audi Parts for Peak Performance",
//     snippet:
//       "Is your Audi not running as smoothly as it used to? Discover the top 5 essential parts that can boost your car’s performance and keep it in top condition. From turbochargers to performance brake pads, we've got the details on what you need.",
//     imageUrl: "/Assets/Audi11.jpg",
//     slug: "5 Must-Have Audi Parts for Peak Performance",
//   },
//   {
//     id: "2",
//     title: "Audi Maintenance Tips: How to Extend the Life of Your Car",
//     snippet:
//       "Routine maintenance is key to keeping your Audi performing at its best. In this guide, we cover expert tips on oil changes, brake inspections, and the importance of genuine parts. Learn how to extend your Audi’s lifespan and maintain its high performance.",
//     imageUrl: "/Assets/audi6.jpg",
//     slug: "Audi Maintenance Tips: How to Extend the Life of Your Car",
//   },
//   {
//     id: "3",
//     title: "Audi Enthusiast Gear: Top Merch for Every Fan",
//     snippet:
//       "Love Audi as much as we do? Check out our latest collection of Audi-branded hoods, t-shirts, and caps. In this post, we highlight the most popular merchandise that will keep you looking sharp at car meets or casual outings.",
//     imageUrl: "/Assets/merchgrouped.jpg",
//     slug: "Audi Enthusiast Gear: Top Merch for Every Fan",
//   },
// ];

// const LatestBlog: React.FC = async () => {
//   const latestBlogs: blogCard[] = await fetchLatestBlog();
//   return (
//     <section className="py-20">
//       <div className="container mx-auto px-4">
//         <h2 className="heading text-center">Latest from Our Blog</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {latestBlogs.map((blog) => (
//             <Card>
//               <Image
//                 alt="blog image"
//                 width={500}
//                 height={500}
//                 className="rounded-t-lg h-[200px] object-cover"
//                 src={urlFor(blog.titleImage).url()}
//               />
//               <CardContent>
//                 <h1 className="subHeading">{blog.title}</h1>
//                 <p className="textNormal line-clamp-3">
//                   {blog.smallDescription}
//                 </p>
//                 <div className="flex justify-center">
//                   <Button asChild className="secondaryBtn">
//                     <Link href={`/blog/${blog.currentSlug}`}>Read More</Link>
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//         <div className="text-center mt-8">
//           <Link
//             href="/blog"
//             className="inline-block bg-secondary dark:text-white text-primaryColor font-semibold py-2 px-6 rounded-lg hover:text-white hover:bg-secondaryColor/80 transition-colors duration-300"
//           >
//             View All Posts
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LatestBlog;
