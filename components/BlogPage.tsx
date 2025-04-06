"use client";

import React, { useEffect, useState } from "react";
import BlogCard from "@/components/BlogCard";
import SearchForm from "@/components/SearchForm";

interface Post {
  id: number;
  title: string;
  createdAt: string;
  author: string;
  imageUrl: string;
  content: string;
  views: number;
  category: string;
  subtitle: string;
}

const BlogPage = ({ query }: { query: string | undefined }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem("token"); // Access localStorage here
        if (!token) {
          throw new Error("No token found");
        }

        const response = await fetch(
          "https://blog-backend-l4jw.onrender.com/api/posts",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch posts: ${response.statusText}`);
        }

        const data: { posts: Post[] } = await response.json();

        setPosts(data.posts);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred");
        }
      }
    };

    fetchPosts();
  }, []); // Ignore the warning

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (posts.length === 0) {
    return <p className="text-gray-500">No posts available.</p>;
  }

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

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="font-bold text-3xl">
          {query ? `Search results for "${query}"` : "All Blogs"}
        </p>
        <ul className="mt-7 card_grid">
          {posts.map((post: Post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default BlogPage;
