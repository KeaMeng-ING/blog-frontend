import BlogCard from "@/components/BlogCard";
import SearchForm from "@/components/SearchForm";
import React from "react";

interface Post {
  id: number;
  title: string;
  published_date: string;
  author: string;
  image_url: string;
  content: string;
  views: number;
  category: string;
}

export default async function home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = await searchParams;
  const { query: q } = query;

  const response = await fetch("http://localhost:8080/api/posts", {
    cache: "no-store",
  });
  const posts: Post[] = await response.json();
  console.log(posts);

  return (
    <>
      <section className="pink_container pattern">
        <div className="bg-yellow-300 inline-block px-6 py-3 rounded-md mb-4 transform ">
          <span className="font-bold text-black">READ, WRITE, AND GROW</span>
        </div>
        <h1 className="heading">
          Share Your Stories, <br /> Connect With Readers and Writers
        </h1>

        <p className="sub-heading !max-w-3xl">
          Publish articles, gain followers, and engage with a community of
          passionate writers
        </p>

        <SearchForm query={q} />
      </section>

      <section className="section_container">
        <p className="font-bold text-3xl">
          {q ? `Search results for "${q}"` : "All Blogs"}
        </p>
        <ul className="mt-7 card_grid">
          {posts.map((post: Post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </ul>
      </section>
    </>
  );
}
