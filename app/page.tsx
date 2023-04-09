import { Inter } from "next/font/google";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import { getPosts } from "../hobbyisthub-backend/sanity-utils";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <main className="mx-auto max-w-screen-xl">
      <Banner />
      <Gallery />
    </main>
  );
}
