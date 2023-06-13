import { TechBlogLinkForm } from "./_components/TechBlogLinkForm";
import { postTechBlog } from "./_server/postTechBlog.server";

export default function New() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col">
      <section className="flex flex-col gap-4 p-4">
        <h2 className="text-lg">新規追加</h2>
        <TechBlogLinkForm submit={postTechBlog} />
      </section>
    </main>
  );
}
