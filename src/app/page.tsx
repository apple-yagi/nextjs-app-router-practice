import { TodayRegisterdTechBlogList } from "./_components/TodayRegisteredTechBlogList";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col">
      <section className="flex flex-col gap-4 p-24">
        <h2 className="text-lg">今日読んだ記事</h2>
        <TodayRegisterdTechBlogList />
      </section>
    </main>
  );
}
