import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-xl">
      <Navbar />
      <Banner />
      <Gallery />
      <Footer />
    </main>
  );
}
