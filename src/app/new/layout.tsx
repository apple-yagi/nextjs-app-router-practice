import Link from "next/link";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav className="flex justify-center px-6 py-4">
        <Link href="/">Home</Link>
      </nav>

      {children}
    </div>
  );
}
