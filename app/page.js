import BlogCard from "./components/BlogCard";

export default function Home() {
  return (
    <main className="md:px-20 px-4 md:pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 scroll-x--rows-2">
        {Array.from({ length: 30 }).map((_, index) => (
          <BlogCard key={index} />
        ))}
      </div>
    </main>
  );
}
