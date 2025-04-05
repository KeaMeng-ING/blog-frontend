import BlogForm from "@/components/BlogForm";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth();

  if (!session) redirect("/");

  return (
    <>
      <section className="pink_container  pattern !min-h-[230px]">
        <h1 className="heading">Create Your Blog Today</h1>
      </section>

      <BlogForm />
    </>
  );
};

export default Page;
