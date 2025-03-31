import BlogCard from "@/components/BlogCard";
import SearchForm from "@/components/SearchForm";
import React from "react";

export default async function home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = await searchParams;
  const { query: q } = query;

  const posts = [
    {
      id: 1,
      title: "Hello World",
      published_date: "20 May, 2025",
      author: "John Doe",
      image_url:
        "https://lh7-rt.googleusercontent.com/docsz/AD_4nXf1wlLTqTQ9pcYUzfKH1ezrHvqSAVf8lE2konBcR2XYpDU7E88nzX3y05db5pRPdArQ6FB9OkuNXjKChl0FqXSc6D9WPv6XfBL2HWJtNSXokISxLQB5lNfE82yvD_f_f4qNljax?key=spbvIU828Tn0aeT_YjMRri-R",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      views: 100,
      category: "Technology",
    },
    {
      id: 2,
      title: "AI and the Future",
      published_date: "22 May, 2025",
      author: "Jane Smith",
      image_url:
        "https://lh7-rt.googleusercontent.com/docsz/AD_4nXf1wlLTqTQ9pcYUzfKH1ezrHvqSAVf8lE2konBcR2XYpDU7E88nzX3y05db5pRPdArQ6FB9OkuNXjKChl0FqXSc6D9WPv6XfBL2HWJtNSXokISxLQB5lNfE82yvD_f_f4qNljax?key=spbvIU828Tn0aeT_YjMRri-R",
      content:
        "Artificial Intelligence is shaping the future in unexpected ways.",
      views: 250,
      category: "AI",
    },
    {
      id: 3,
      title: "Cybersecurity Trends",
      published_date: "25 May, 2025",
      author: "Michael Brown",
      image_url:
        "https://lh7-rt.googleusercontent.com/docsz/AD_4nXf1wlLTqTQ9pcYUzfKH1ezrHvqSAVf8lE2konBcR2XYpDU7E88nzX3y05db5pRPdArQ6FB9OkuNXjKChl0FqXSc6D9WPv6XfBL2HWJtNSXokISxLQB5lNfE82yvD_f_f4qNljax?key=spbvIU828Tn0aeT_YjMRri-R",
      content:
        "Cyber threats are evolving rapidly, making security a top priority.",
      views: 320,
      category: "Cybersecurity",
    },
    {
      id: 4,
      title: "The Rise of Quantum Computing",
      published_date: "28 May, 2025",
      author: "Sarah Johnson",
      image_url:
        "https://lh7-rt.googleusercontent.com/docsz/AD_4nXf1wlLTqTQ9pcYUzfKH1ezrHvqSAVf8lE2konBcR2XYpDU7E88nzX3y05db5pRPdArQ6FB9OkuNXjKChl0FqXSc6D9WPv6XfBL2HWJtNSXokISxLQB5lNfE82yvD_f_f4qNljax?key=spbvIU828Tn0aeT_YjMRri-R",
      content:
        "Quantum computing is set to revolutionize industries from finance to healthcare.",
      views: 150,
      category: "Technology",
    },
    {
      id: 5,
      title: "Blockchain Beyond Cryptocurrency",
      published_date: "30 May, 2025",
      author: "Emily White",
      image_url:
        "https://lh7-rt.googleusercontent.com/docsz/AD_4nXf1wlLTqTQ9pcYUzfKH1ezrHvqSAVf8lE2konBcR2XYpDU7E88nzX3y05db5pRPdArQ6FB9OkuNXjKChl0FqXSc6D9WPv6XfBL2HWJtNSXokISxLQB5lNfE82yvD_f_f4qNljax?key=spbvIU828Tn0aeT_YjMRri-R",
      content:
        "Blockchain technology has applications far beyond digital currency.",
      views: 200,
      category: "Blockchain",
    },
  ];

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
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </ul>
      </section>
    </>
  );
}
