import { Inter } from "next/font/google";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import { getPosts } from "../hobbyisthub-backend/sanity-utils";

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="mx-auto px-4 max-w-screen-xl">
      <Banner />
      <Gallery posts={posts} />
    </main>
  );
}
