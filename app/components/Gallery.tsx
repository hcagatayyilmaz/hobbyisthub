import React from "react"
import Card from "./Card"
import Link from "next/link"
import {Post} from "../types/Post"

function Gallery({posts}: any) {
  return (
    <div className=' mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4'>
      {posts.map((post: Post) => (
        <div key={post._id}>
          <Link href={`/hobbies/${post.slug}`}>
            <Card title={post.title} image={post.image} />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Gallery
