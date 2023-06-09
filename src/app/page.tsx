import { Button } from "@/components/Button";
import { Modal } from "@/components/Modal";

import { TechBlogLinkForm } from "./_components/TechBlogLinkForm";
import { postTechBlog } from "./_server/postTechBlog.server";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Modal
        trigger={<Button>登録</Button>}
        title={"技術ブログのURLを登録する"}
        content={<TechBlogLinkForm submit={postTechBlog} />}
      />
    </main>
  );
}
