import {Inter} from "next/font/google"
import Banner from "./components/Banner"
import Gallery from "./components/Gallery"
import {getPosts} from "../hobbyisthub-backend/sanity-utils"

async function getData() {
  const res = await getPosts()
  console.log(res)

  return res
}
//test
export default async function Home() {
  const posts = await getData()
  return (
    <main className='mx-auto px-4 max-w-screen-xl'>
      <Banner />
      <Gallery posts={posts} />
    </main>
  )
}
