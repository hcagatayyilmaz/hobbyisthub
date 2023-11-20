import React from "react"
import Image from "next/image"

type Post = {
  title: string
  image: any
}

const Card: React.FC<Post> = ({title, image}) => {
  return (
    <div className='flex h-full justify-between flex-col gap-4 items-center bg-slate-200 rounded-xl p-1 pb-4'>
      <div className='h-[100px] md:h-[200px] w-full relative'>
        <Image src={image} alt={title} fill className='rounded-xl' />
      </div>
      <h2 className='text-black text-md text-center px-4 py-1'>{title}</h2>
    </div>
  )
}

export default Card
