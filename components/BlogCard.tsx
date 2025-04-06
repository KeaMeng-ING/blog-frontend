import React from "react";
import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Post {
  title: string;
  createdAt: string;
  author: string;
  imageUrl: string;
  content: string;
  views: number;
  category: string;
  subtitle: string;
}

const BlogCard = ({ post }: { post: Post }) => {
  const {
    title,
    createdAt,
    author,
    imageUrl,

    subtitle,
    views,
    category,
  } = post;

  return (
    <li className="startup-card group">
      <div className=" flex justify-between">
        <p className="startup-card_date">{formatDate(createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-my-primary" />
          <span className="text-16-medium">{views}</span>
          {/* TODO: To be updated */}
        </div>
      </div>

      <div className="flex justify-between mt-5 gap-5">
        <div className="flex-1">
          <Link href="#">
            <p className="font-medium text-lg line-clamp-1">{author}</p>
          </Link>
          <Link href="#">
            <h3 className="font-semibold text-xl line-clamp-2 h-[56px]">
              {title}
            </h3>
          </Link>
        </div>
        <Link href="#">
          {/* <Image
            src={image_url}
            alt={author}
            width={48}
            height={48}
            className="rounded-full"
          /> */}
          <h1>author</h1>
        </Link>
      </div>

      <Link href="#">
        <p className="startup-card_desc">{subtitle}</p>

        {/* TODO: To be updated */}
        <Image
          src={imageUrl}
          width={400}
          height={200}
          alt="placeholder"
          className="startup-card_img"
        />
      </Link>

      <div className="flex justify-between gap-3 mt-5">
        <Link href="#">
          <p className=" font-medium text-lg">{category}</p>
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href="#">Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default BlogCard;
