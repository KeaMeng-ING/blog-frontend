import React from "react";
import BlogPage from "@/components/BlogPage";

export default async function Home({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  const { query } = await searchParams;

  return <BlogPage query={query} />;
}
